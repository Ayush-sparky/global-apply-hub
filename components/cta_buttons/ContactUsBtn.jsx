import Link from "next/link";

export default function ContactUsBtn({ title, classProp }) {
  return (
    <Link href="/contact" className={`btn ${classProp}`}>
      {title}
    </Link>
  );
}
