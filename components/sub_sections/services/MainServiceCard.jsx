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
    <div className="card flex justify-between flex-col items-start p-8">
      <div className="dark:bg-background/50 bg-amber-100 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl lg:text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-xs xl:text-sm mb-6">{desc}</p>
      <ul className="space-y-2 mb-6">
        {checkList.map(({ title }, index) => (
          <CheckCircleList key={index} title={title} />
        ))}
      </ul>
      <Link
        href={link}
        className="group hover:text-blue-500 text-xs lg:text-sm inline-flex items-center"
      >
        Learn More{" "}
        <ArrowRight className="inline h-4 w-4 transform group-hover:translate-x-1 transition duration-200 ml-1" />
      </Link>
    </div>
  );
}
