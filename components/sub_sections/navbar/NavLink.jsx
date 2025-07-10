import Link from "next/link";

export default function NavLink({ title, pageLink }) {
  return (
    <li>
      <Link href={pageLink} className="hover:text-white/70 duration-200">
        {title}
      </Link>
    </li>
  );
}
