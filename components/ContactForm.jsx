"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [errors, setErrors] = useState({});

  // Auto-dismiss success message after 5 seconds
  useEffect(() => {
    if (submitStatus.includes("successfully")) {
      const timer = setTimeout(() => {
        setSubmitStatus("");
      }, 5000); // 5 seconds

      return () => clearTimeout(timer); // Cleanup timer on unmount or status change
    }
  }, [submitStatus]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.length > 100) newErrors.name = "Name too long";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.subject) newErrors.subject = "Subject is required";

    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.length < 10)
      newErrors.message = "Message too short (min 10 characters)";
    else if (formData.message.length > 2000)
      newErrors.message = "Message too long (max 2000 characters)";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus("Please fix the errors above");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/send_email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else if (response.status === 429) {
        setSubmitStatus(`Rate limit exceeded. ${result.error}`);
      } else {
        setSubmitStatus(
          result.error || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus(
        "Network error. Please check your connection and try again."
      );
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            maxLength={100}
            className={errors.name ? "border-red-500" : ""}
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            maxLength={100}
            className={errors.email ? "border-red-500" : ""}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Select
          name="subject"
          value={formData.subject}
          onValueChange={(value) => handleInputChange("subject", value)}
          required
        >
          <SelectTrigger className={errors.subject ? "border-red-500" : ""}>
            <SelectValue placeholder="Select a topic" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General Inquiry</SelectItem>
            <SelectItem value="support">Technical Support</SelectItem>
            <SelectItem value="feature">Feature Request</SelectItem>
            <SelectItem value="bug">Bug Report</SelectItem>
            <SelectItem value="feedback">Feedback</SelectItem>
            <SelectItem value="partnership">Partnership</SelectItem>
          </SelectContent>
        </Select>
        {errors.subject && (
          <p className="text-red-500 text-sm">{errors.subject}</p>
        )}
      </div>

      {/* Honeypot field – hidden from users */}
      <input
        type="text"
        name="website"
        style={{ display: "none" }}
        autoComplete="off"
      />

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us how we can help you..."
          className={`min-h-[120px] resize-none ${
            errors.message ? "border-red-500" : ""
          }`}
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          maxLength={2000}
          required
        />
        <div className="flex justify-between text-sm text-gray-500">
          {errors.message && (
            <span className="text-red-500">{errors.message}</span>
          )}
          <span className="ml-auto">{formData.message.length}/2000</span>
        </div>
      </div>

      {submitStatus && (
        <div
          className={`text-sm p-3 rounded ${
            submitStatus.includes("success")
              ? "text-green-700 bg-green-50 border border-green-200"
              : "text-red-700 bg-red-50 border border-red-200"
          }`}
        >
          {submitStatus}
        </div>
      )}

      <Button
        type="submit"
        className={`w-full btn btn-primary ${
          isSubmitting && "cursor-no-drop"
        }`}
        disabled={isSubmitting}
      >
        <Send className="w-4 h-4 mr-2" />
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
