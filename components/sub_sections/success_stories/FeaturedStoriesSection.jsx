import { StudentStoryCard } from "./StudentStoryCard";

export function FeaturedStoriesSection({ stories }) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Featured Success Stories
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Inspiring journeys of students who overcame challenges and achieved
            their academic goals with our support.
          </p>
        </div>

        <div className="space-y-16">
          {stories.map((story, index) => (
            <StudentStoryCard key={story.name} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}