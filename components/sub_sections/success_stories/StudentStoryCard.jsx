import { GraduationCap, Quote, ArrowRight } from "lucide-react";
import Link from "next/link";
import { StarRating } from "./StarRating";

export function StudentStoryCard({ story, index }) {
  const isReversed = index % 2 === 1;

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        isReversed ? "lg:grid-flow-col-dense" : ""
      }`}
    >
      {/* Story Content */}
      <div className={isReversed ? "lg:col-start-2" : ""}>
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 rounded-full bg-amber-200 dark:bg-card flex items-center justify-center mr-4">
            <span className="text-xl font-bold text-blue-800 dark:text-blue-400">
              {story.photo}
            </span>
          </div>
          <div>
            <h3 className="text-2xl font-bold">{story.name}</h3>
            <div className="flex items-center text-foreground/70">
              <span className="text-2xl mr-2">{story.flag}</span>
              <span>{story.university}</span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <StarRating rating={story.rating} />
        </div>

        <div className="relative mb-6">
          <Quote className="h-8 w-8 text-foreground/80 absolute -top-2 -left-2" />
          <p className="text-foreground/60 italic leading-relaxed pl-6">
            {story.story}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Previous Education</h4>
            <p className="text-sm text-foreground/70">
              {story.previousEducation}
            </p>
          </div>
          <div className="bg-card p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Current Status</h4>
            <p className="text-sm text-foreground/70">{story.currentStatus}</p>
          </div>
        </div>
      </div>

      {/* Story Details */}
      <div className={isReversed ? "lg:col-start-1" : ""}>
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <div className="text-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg mb-4">
              <GraduationCap className="h-12 w-12 mx-auto mb-2" />
              <h4 className="text-xl font-bold">{story.program}</h4>
              <p className="text-blue-100">{story.university}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg">
              <span className="font-medium text-foreground/80">
                Admission Year
              </span>
              <span className="text-blue-800 dark:text-blue-400 font-semibold">
                {story.year}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg">
              <span className="font-medium text-foreground/80">
                Scholarship Received
              </span>
              <span className="text-green-600 dark:text-green-400 font-semibold">
                {story.scholarship}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg">
              <span className="font-medium text-foreground/80">Country</span>
              <span className="font-semibold">
                {story.flag} {story.country}
              </span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/contact"
              className="btn-cta-primary px-6 py-3 rounded-lg font-semibold inline-flex items-center"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
