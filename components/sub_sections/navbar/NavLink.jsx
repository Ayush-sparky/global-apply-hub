import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ title, pageLink }) {
  const pathname = usePathname();
  const isActive = pathname === pageLink;

  return (
    <li>
      <Link
        href={pageLink}
        className={`hover:text-white/70 text-white duration-200 ${
          isActive && "text-white/70"
        }`}
      >
        {title}
      </Link>
    </li>
  );
}
