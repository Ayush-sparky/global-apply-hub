import { NextResponse } from "next/server";

// Simple in-memory rate limiter
const submissions = new Map();
const RATE_LIMIT = 3;
const TIME_WINDOW = 60 * 60 * 1000;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SPAM_KEYWORDS = [
  "viagra",
  "casino",
  "lottery",
  "win money",
  "click here",
  "free money",
];

function validateInput(data) {
  const { name, email, subject, message } = data;

  if (!name || !email || !subject || !message) {
    return { valid: false, error: "All fields are required" };
  }
  if (name.length > 100) return { valid: false, error: "Name too long" };
  if (email.length > 100) return { valid: false, error: "Email too long" };
  if (!EMAIL_REGEX.test(email))
    return { valid: false, error: "Invalid email format" };
  if (message.length < 10) return { valid: false, error: "Message too short" };
  if (message.length > 2000) return { valid: false, error: "Message too long" };

  const textToCheck = `${name} ${message}`.toLowerCase();
  for (const keyword of SPAM_KEYWORDS) {
    if (textToCheck.includes(keyword)) {
      return { valid: false, error: "Message flagged as spam" };
    }
  }

  return { valid: true };
}

function checkRateLimit(ip) {
  const now = Date.now();
  const userSubmissions = submissions.get(ip) || [];
  const recentSubmissions = userSubmissions.filter(
    (time) => now - time < TIME_WINDOW
  );

  if (recentSubmissions.length >= RATE_LIMIT) {
    return {
      allowed: false,
      remainingTime: TIME_WINDOW - (now - recentSubmissions[0]),
    };
  }

  recentSubmissions.push(now);
  submissions.set(ip, recentSubmissions);
  return { allowed: true, remaining: RATE_LIMIT - recentSubmissions.length };
}

export async function POST(request) {
  // if (data.website && data.website.trim() !== "") {
  //   return NextResponse.json({ error: "Bot detected" }, { status: 400 });
  // }

  try {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : "unknown";

    const rateLimitResult = checkRateLimit(ip);
    if (!rateLimitResult.allowed) {
      const minutesRemaining = Math.ceil(rateLimitResult.remainingTime / 60000);
      return NextResponse.json(
        {
          error: `Too many requests. Try again in ${minutesRemaining} minutes.`,
        },
        { status: 429 }
      );
    }

    const data = await request.json();
    const { name, email, subject, message } = data;

    const validation = validateInput(data);
    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    // Use Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Contact Form <onboarding@resend.dev>",
        to: [process.env.RECIPIENT_EMAIL],
        subject: `Contact Form: ${subject}`,
        html: `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>IP:</strong> ${ip}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error("Resend API Error:", errorText);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Email sent successfully",
        remaining: rateLimitResult.remaining,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in /api/send_email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
