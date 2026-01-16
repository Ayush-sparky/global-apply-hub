import CTAsection from "@/components/sections_pages/CTAsection";
import ContactUsBtn from "@/components/cta_buttons/ContactUsBtn";
import PageBanner from "@/components/PageBanner";
import { FeaturedStoriesSection } from "@/components/sub_sections/success_stories/FeaturedStoriesSection";
import { SuccessByCountrySection } from "@/components/sub_sections/success_stories/SuccessByCountrySection";
import { TestimonialsSection } from "@/components/sub_sections/success_stories/TestimonialsSection";
import { AchievementHighlights } from "@/components/sub_sections/success_stories/AchievementHighlights";
import { featuredStories, successByCountry, testimonials } from "@/components/sub_sections/success_stories/successStoriesData";
import Link from "next/link";

export default function SuccessStoriesPage() {
  return (
    <div>
      {/* <PageBanner
        title=" Success Stories"
        subtitle="Real stories from students who achieved their international
            education dreams with our guidance and support."
      />
      <FeaturedStoriesSection stories={featuredStories} />
      <SuccessByCountrySection countries={successByCountry} />
      <TestimonialsSection testimonials={testimonials} />
      <AchievementHighlights />
      <CTAsection
        title="Ready to Write Your Success Story?"
        desc=" Join thousands of successful students who achieved their international
          education dreams with our expert guidance and support."
      >
        <ContactUsBtn classProp=" cta-btn">Start your Journey</ContactUsBtn>
        <Link href="/services" className="btn cta-btn-secondary">
          Explore Our Services
        </Link>
      </CTAsection> */}
      <h1>Under Construction</h1>
    </div>
  );
}
