import { PhoneOutgoing } from "lucide-react";

export default function CallNow({classProp}) {
  return (
    <a
      href="tel:+977 9704481514"
      className={classProp}
    >
      <PhoneOutgoing className="w-4 h-4" /> Call Now
    </a>
  );
}
