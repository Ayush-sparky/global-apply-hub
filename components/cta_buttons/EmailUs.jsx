import { Mail } from "lucide-react";

export default function EmailUs() {
    return (
      <a
        href="mailto:ayushdk5758967@gmail.com?subject=Quick%20Inquiry&body=Hello,%20I%20would%20like%20to%20know%20more%20about..."
        className="cta-btn btn btn-primary"
      >
        <Mail className="cta-icons" /> Send Email
      </a>
    );
};
