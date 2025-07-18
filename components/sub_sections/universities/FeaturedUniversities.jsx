import ContactUsBtn from "@/components/cta_buttons/ContactUsBtn";
import { Award, Link, Star } from "lucide-react";

export default function FeaturedUniversities({ university }) {
  return (
    <div className="bg-card overflow-hidden shadow-lg rounded-lg">
      <div className=" h-32 md:h-48 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-800 flex items-center justify-center">
        <div className="text-center text-white">
          <span className="text-2xl md:text-4xl mb-1 md:mb-2 block">{university.flag}</span>
          <h3 className="text-lg md:text-2xl font-bold">{university.name}</h3>
          <p className="text-blue-100 text-sm md:text-[16px]">{university.location}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-500 mr-1" />
            <span className="font-semibold">{university.ranking}</span>
          </div>
          <div className="text-sm text-foreground">
            Est. {university.established}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <span className="text-gray-600 dark:text-gray-300">Students:</span>
            <span className="font-semibold text-foreground ml-1">
              {university.students}
            </span>
          </div>

          <div>
            <span className="text-gray-600 dark:text-gray-300">
              Acceptance:
            </span>
            <span className="font-semibold text-foreground ml-1">
              {university.acceptance}
            </span>
          </div>
          
          <div className=" md:col-span-2">
            <span className="text-gray-600 dark:text-gray-300">
              Annual Tuition:
            </span>
            <span className="font-semibold text-blue-800 dark:text-blue-500 ml-1">
              {university.tuition}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Popular Programs</h4>
          <div className="flex items-center flex-wrap gap-2">
            {university.programs.slice(0, 3).map((program) => (
              <span
                key={program}
                className="bg-blue-100 text-blue-800 dark:bg-slate-700 dark:text-foreground px-2 py-1 rounded text-xs font-medium"
              >
                {program}
              </span>
            ))}
            {university.programs.length > 3 && (
              <span className="text-foreground/70 text-xs">
                +{university.programs.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-2">Key Highlights</h4>
          <ul className="space-y-1">
            {university.highlights.slice(0, 2).map((highlight) => (
              <li
                key={highlight}
                className="flex items-center text-sm text-foreground/80"
              >
                <Award className="h-3 w-3 text-green-600 mr-2" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <ContactUsBtn classProp='btn-primary'>
          Apply now
        </ContactUsBtn>
      </div>
    </div>
  );
}
