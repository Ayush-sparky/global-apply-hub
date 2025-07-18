import ContactUsBtn from "@/components/cta_buttons/ContactUsBtn";
import PageBanner from "@/components/PageBanner";
import CTAsection from "@/components/sections_pages/CTAsection";
import { featuredUniversities } from "@/components/sub_sections/universities/featUnisData";
import FeaturedUniversities from "@/components/sub_sections/universities/FeaturedUniversities";
import { universitiesByCountry } from "@/components/sub_sections/universities/uniByCountryData";
import {
  ArrowRight,
  Award,
  BookOpen,
  Globe,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Universities",
  description: "In partnership with universites all over the seas",
};

export default function UniversityPage() {
  return (
    <div>
      <PageBanner
        title="Universities"
        desc="From initial consultation and university selection to visa
              assistance and career guidance, our dedicated team is here to
              support you at every step. Trust us to provide personalized
              solutions tailored to your unique aspirations, helping you
              navigate the complexities of international education and make
              informed decisions that shape your future."
        subtitle="We are partnered with universites all around the world providing multiple choices for students"
      />

      {/* Featured Universities */}
      <section className="py-5 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Universities</h2>
            <p className="text-xs md:text-sm lg:text-lg text-foreground/90 max-w-3xl mx-auto">
              Discover some of the world's most prestigious institutions where
              our students have successfully gained admission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredUniversities.map((university) => (
              <FeaturedUniversities
                key={university.name}
                university={university}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Universities by Country */}
      <section className="py-8 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Universities by Country</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Browse our extensive network of partner universities organized by
              popular study destinations.
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(universitiesByCountry).map(
              ([country, universities]) => (
                <div
                  key={country}
                  className="bg-card p-4 md:p-6 xl-p-8 rounded-lg shadow-md"
                >
                  <div className="flex items-center mb-6">
                    <Globe className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className=" text-lg lg:text-2xl font-bold">
                      {country}
                    </h3>
                    <span className="ml-auto bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-[10px] md:text-sm font-medium">
                      {universities.length}+ Universities
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {universities.map((uni) => (
                      <div
                        key={uni.name}
                        className="bg-background p-4 rounded-lg border border-gray-200 dark:border-0 shadow-lg"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{uni.name}</h4>
                          <span className="text-xs bg-yellow-100 dark:bg-card text-yellow-800 dark:text-foreground px-2 py-1 rounded">
                            {uni.ranking}
                          </span>
                        </div>
                        <p className="text-sm text-foreground/70 mb-2">
                          {uni.programs}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-blue-800 dark:text-blue-500">
                            {uni.tuition}
                          </span>
                          <Link href="/contact" className="text-xs hover:text-blue-800 dark:hover:text-blue-500 cursor-pointer font-medium">
                            Apply →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <div className="hidden md:flex">
                      <ContactUsBtn classProp="btn-primary">
                        More about {country} Universities
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </ContactUsBtn>
                    </div>
                    <div className="flex md:hidden">
                      <ContactUsBtn classProp="btn-primary">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </ContactUsBtn>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* University Rankings */}
      <section className="py-10 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Top Ranked Universities</h2>
            <p className="text-lg md:text:xl text-foreground/80 max-w-3xl mx-auto">
              Our students have gained admission to universities consistently
              ranked among the world's best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">QS World Rankings</h3>
              <p className="text-foreground/70 mb-4">
                Universities ranked in the top 100 globally by QS World
                University Rankings, recognized for academic reputation and
                research impact.
              </p>
              <div className="text-2xl font-bold text-blue-800 dark:text-blue-500">
                150+
              </div>
              <div className="text-sm text-foreground/60">
                Partner Universities
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Times Higher Education
              </h3>
              <p className="text-foreground/60 mb-4">
                Universities featured in THE World University Rankings, known
                for teaching excellence and research performance.
              </p>
              <div className="text-2xl font-bold text-blue-800 dark:text-blue-500">
                120+
              </div>
              <div className="text-sm text-foreground/60">
                Partner Universities
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Subject Rankings</h3>
              <p className="text-foreground/70 mb-4">
                Universities with top-ranked programs in specific fields like
                Engineering, Business, Medicine, and Computer Science.
              </p>
              <div className="text-2xl font-bold text-blue-800 dark:text-blue-500">
                200+
              </div>
              <div className="text-sm text-foreground/60">Top Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTAsection
        title=" Ready to Apply to Your Dream University?"
        desc="Our expert counselors will help you identify the best universities
            for your profile and guide you through the entire application
            process."
      >
        <ContactUsBtn classProp="btn cta-btn">
          Start Your Application
        </ContactUsBtn>
        <Link href="/services" className="btn cta-btn-secondary">
          View Our Services
        </Link>
      </CTAsection>
    </div>
  );
}
