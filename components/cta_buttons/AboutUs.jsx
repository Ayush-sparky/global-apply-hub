import Link from "next/link";

export default function AboutUsBtn({title, classProp}) {
    return (
      <Link href="/about" className={`btn ${classProp}`}>
        {title}
      </Link>
    );
};
