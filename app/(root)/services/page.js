import PageBanner from "@/components/PageBanner";
import MainServiceCard from "@/components/sub_sections/services/MainServiceCard";
import { services } from "@/components/sub_sections/services/mainServicesData";
import { StatsSection } from "@/components/sub_sections/services/StatsSection";
import { BookOpen, Plane, Users } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <PageBanner
        title="Our Services"
        subtitle="Just ask, we are always there"
        desc="From initial consultation and university selection to visa
              assistance and career guidance, our dedicated team is here to
              support you at every step. Trust us to provide personalized
              solutions tailored to your unique aspirations, helping you
              navigate the complexities of international education and make
              informed decisions that shape your future."
      />

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Study Abroad Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert team provides comprehensive support at every stage of
              your international education journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((prop, index) => (
              <MainServiceCard key={index} {...prop} />
            ))}
          </div>
        </div>
      </section>

      {/* Auto increment Stats Section */}
      <StatsSection />

      {/* Service Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Service Process</h2>
            <p className="text-xl max-w-3xl mx-auto">
              A systematic approach to ensure your success at every step of your
              international education journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-800 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Initial Consultation
              </h3>
              <p className="text-gray-600 text-sm">
                Free consultation to understand your goals, assess your profile,
                and create a personalized roadmap.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-800 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                University Selection
              </h3>
              <p className="text-gray-600 text-sm">
                Shortlist universities and programs that match your profile,
                preferences, and career objectives.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-800 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Application & Visa
              </h3>
              <p className="text-gray-600 text-sm">
                Complete application assistance followed by expert visa
                processing and interview preparation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-800 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Pre-departure
              </h3>
              <p className="text-gray-600 text-sm">
                Pre-departure support including accommodation, travel
                arrangements, and orientation sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized services to enhance your international education
              experience and career prospects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-surface p-6 rounded-lg shadow-md">
              <Users className="h-8 w-8 text-blue-800 mb-4" />
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Career Counseling
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Professional career guidance to help you choose the right
                academic path aligned with your career goals and market demands.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Career assessment tests</li>
                <li>• Industry trend analysis</li>
                <li>• Job market insights</li>
                <li>• Resume building workshops</li>
              </ul>
            </div>

            <div className="card-surface p-6 rounded-lg shadow-md">
              <BookOpen className="h-8 w-8 text-blue-800 mb-4" />
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Academic Writing Support
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Expert assistance with academic writing including essays,
                research proposals, and thesis preparation for various academic
                levels.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Essay writing workshops</li>
                <li>• Research methodology training</li>
                <li>• Citation and referencing</li>
                <li>• Proofreading services</li>
              </ul>
            </div>

            <div className="card-surface p-6 rounded-lg shadow-md">
              <Plane className="h-8 w-8 text-blue-800 mb-4" />
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Post-arrival Support
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Continued support after you reach your destination including
                local orientation, banking assistance, and academic guidance.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Airport pickup coordination</li>
                <li>• Bank account opening</li>
                <li>• Local SIM card assistance</li>
                <li>• Academic integration support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book a free consultation with our expert counselors to discuss your
            study abroad plans and get personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-cta-secondary px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
