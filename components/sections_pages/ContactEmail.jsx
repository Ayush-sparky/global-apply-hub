import { Mail, MessageSquare, Clock } from "lucide-react";
import { ContactForm } from "../ContactForm";

export function ContactSection() {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-sm md:text-lg text-foreground/70 max-w-2xl mx-auto">
              Have questions, feedback, or need help? We'd love to hear from
              you. Send us a message and we'll get back to you as soon as
              possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email Support</h3>
                    <p className="text-foreground text-sm lg:text-lg">
                      Send us an email and we'll respond within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      Feedback & Suggestions
                    </h3>
                    <p className="text-foreground text-sm lg:text-lg">
                      Help us improve TaskFlow by sharing your ideas and
                      feedback.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Response Time</h3>
                    <p className="text-foreground text-sm lg:text-lg">
                      We typically respond to all inquiries within 24 hours
                      during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card text-foreground rounded-lg p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
