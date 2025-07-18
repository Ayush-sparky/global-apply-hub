import { GraduationCap, Globe, Users } from "lucide-react";
import Image from "next/image";
import ContactUsBtn from "../cta_buttons/ContactUsBtn";
import AboutUsBtn from "../cta_buttons/AboutUs";

export default function HeroSection() {
  return (
    <section className="relative py-8 bg-hero-background md:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-xs md:text-sm font-medium text-blue-800">
                <Globe className="mr-2 h-4 w-4" />
                Trusted Educational Partner
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block text-blue-600 dark:text-blue-400">
                  Global ApplyHub
                </span>
                <span className="block dark:text-blue-500 text-2xl pt-2 md:pt-4 sm:text-3xl md:text-4xl xl:text-5xl">
                  Educational Network
                </span>
              </h1>

              <h2 className="text-lg md:text-xl xl:text-2xl font-semibold text-blue-800 dark:text-blue-600">
                Education and Career Counselling Services
              </h2>

              <p className="text-sm lg:text-lg text-blue-700 dark:text-blue-600 font-medium italic">
                "Serving you for your better future."
              </p>

              <p className="text-base text-foreground/80 max-w-lg">
                Expert guidance for Nepali students seeking international
                education opportunities. From university selection to visa
                assistance, we're here to make your dreams come true.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <ContactUsBtn classProp="btn-primary">
                Start your journey
              </ContactUsBtn>
              <AboutUsBtn classProp="btn-secondary" title="Learn More" />
            </div>

            {/* Stats or Features */}
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center gap-2 text-blue-700 dark:text-white">
                <Users className="h-5 w-5" />
                <span className="text-sm font-medium">
                  500+ Students Guided
                </span>
              </div>
              <div className="flex items-center gap-2 text-blue-700 dark:text-white">
                <GraduationCap className="h-5 w-5" />
                <span className="text-sm font-medium">
                  50+ Partner Universities
                </span>
              </div>
              <div className="flex items-center gap-2 text-blue-700 dark:text-white">
                <Globe className="h-5 w-5" />
                <span className="text-sm font-medium">15+ Countries</span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/2.png"
                alt="Students celebrating graduation - Global education success"
                width={500}
                height={600}
                className="object-cover w-full h-[350px] md:h-[400px] lg:h-[500px]"
                priority
              />
              {/* Overlay with additional info */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 md:p-4">
                  <p className="text-xs md:text-sm font-semibold text-blue-900">
                    🎓 Your Gateway to Global Education
                  </p>
                  <p className="text-[10px] md:text-xs text-gray-600 mt-1">
                    Comprehensive support from application to graduation
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white border-4 border-background p-3 rounded-full shadow-lg">
              <Globe className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
