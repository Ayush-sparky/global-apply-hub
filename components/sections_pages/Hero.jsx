import { Button } from "@/components/ui/button";
import { GraduationCap, Globe, Users } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
                <Globe className="mr-2 h-4 w-4" />
                Trusted Educational Partner
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block text-blue-600">Global ApplyHub</span>
                <span className="block text-3xl pt-2 md:pt-4 sm:text-4xl md:text-5xl">Educational Network</span>
              </h1>

              <h2 className="text-xl md:text-2xl font-semibold text-blue-800">
                Education and Career Counselling Services
              </h2>

              <p className="text-lg text-blue-700 font-medium italic">
                "Serving you for your better future."
              </p>

              <p className="text-base text-gray-600 max-w-lg">
                Expert guidance for Nepali students seeking international
                education opportunities. From university selection to visa
                assistance, we're here to make your dreams come true.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold"
              >
                Start Your Journey
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold bg-transparent"
              >
                Learn More
              </Button>
            </div>

            {/* Stats or Features */}
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center gap-2 text-blue-700">
                <Users className="h-5 w-5" />
                <span className="text-sm font-medium">
                  500+ Students Guided
                </span>
              </div>
              <div className="flex items-center gap-2 text-blue-700">
                <GraduationCap className="h-5 w-5" />
                <span className="text-sm font-medium">
                  50+ Partner Universities
                </span>
              </div>
              <div className="flex items-center gap-2 text-blue-700">
                <Globe className="h-5 w-5" />
                <span className="text-sm font-medium">15+ Countries</span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/GraduatedPic.jpg"
                alt="Students celebrating graduation - Global education success"
                width={500}
                height={600}
                className="object-cover w-full h-[350px] md:h-[400px] lg:h-[500px]"
                priority
              />
              {/* Overlay with additional info */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-semibold text-blue-900">
                    🎓 Your Gateway to Global Education
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Comprehensive support from application to graduation
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white border-4 border-blue-200 p-3 rounded-full shadow-lg">
              <Globe className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-blue-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]">
          <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
            <defs>
              <pattern
                id="hero-pattern"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#hero-pattern)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
