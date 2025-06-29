import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory store for rate limiting
const submissions = new Map();
const RATE_LIMIT = 3; // Max 3 submissions per hour
const TIME_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Check for spam keywords
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

  // Required field validation
  if (!name || !email || !subject || !message) {
    return { valid: false, error: "All fields are required" };
  }

  // Length validation
  if (name.length > 100) return { valid: false, error: "Name too long" };
  if (email.length > 100) return { valid: false, error: "Email too long" };
  if (message.length > 2000) return { valid: false, error: "Message too long" };
  if (message.length < 10) return { valid: false, error: "Message too short" };

  // Email format validation
  if (!EMAIL_REGEX.test(email)) {
    return { valid: false, error: "Invalid email format" };
  }

  // Spam detection
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

  // Remove old submissions outside time window
  const recentSubmissions = userSubmissions.filter(
    (time) => now - time < TIME_WINDOW
  );

  if (recentSubmissions.length >= RATE_LIMIT) {
    return {
      allowed: false,
      remainingTime: TIME_WINDOW - (now - recentSubmissions[0]),
    };
  }

  // Add current submission
  recentSubmissions.push(now);
  submissions.set(ip, recentSubmissions);

  return { allowed: true, remaining: RATE_LIMIT - recentSubmissions.length };
}

export async function POST(request) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : "unknown";

    // Rate limiting check
    const rateLimitResult = checkRateLimit(ip);
    if (!rateLimitResult.allowed) {
      const minutesRemaining = Math.ceil(
        rateLimitResult.remainingTime / (1000 * 60)
      );
      return NextResponse.json(
        {
          error: `Too many requests. Try again in ${minutesRemaining} minutes.`,
        },
        { status: 429 }
      );
    }

    const data = await request.json();
    const { name, email, subject, message } = data;

    // Input validation
    const validation = validateInput(data);
    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    // Create transporter - Fixed import issue
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content with sanitized input
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Contact Form: ${subject.substring(0, 100)}`, // Limit subject length
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name.replace(
              /[<>]/g,
              ""
            )}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject.replace(
              /[<>]/g,
              ""
            )}</p>
            <p style="margin: 8px 0;"><strong>IP:</strong> ${ip}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #007bff; border-radius: 3px;">
              ${message.replace(/[<>]/g, "").replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #666; font-size: 14px;">
            <em>You can reply directly to this email to respond to ${name.replace(
              /[<>]/g,
              ""
            )}</em>
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        message: "Email sent successfully",
        remaining: rateLimitResult.remaining,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    // Don't expose internal errors to client
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
