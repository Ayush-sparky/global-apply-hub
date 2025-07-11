import { PhoneOutgoing } from "lucide-react";

export default function CallNow() {
  return (
    <a
      href="tel:+977 9704481514"
      className="btn-primary cta-btn btn"
    >
      <PhoneOutgoing className="w-4 h-4" /> Call Now
    </a>
  );
}
