import Link from "next/link";
import { Children } from "react";

export default function ContactUsBtn({ children, classProp }) {
  return (
    <Link href="/contact" className={`btn ${classProp}`}>
      {children}
    </Link>
  );
}
