import Link from "next/link";
import CheckCircleList from "./CheckCircle";
import { ArrowRight } from "lucide-react";

export default function MainServiceCard({
  icon,
  title,
  desc,
  checkList,
  link,
}) {
  return (
    <div className="card p-8">
      <div className="dark:bg-background/50 bg-amber-100 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className=" mb-6 leading-relaxed">{desc}</p>
      <ul className="space-y-2 mb-6">
        {checkList.map(({ title }, index) => (
          <CheckCircleList key={index} title={title} />
        ))}
      </ul>
      <Link href={link} className="text-blue-500">
        Learn More <ArrowRight className="inline h-4 w-4 ml-1" />
      </Link>
    </div>
  );
}
