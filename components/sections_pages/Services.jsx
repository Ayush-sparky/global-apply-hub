import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Search,
  FileText,
  Award,
  DollarSign,
  Plane,
  ArrowRight,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: GraduationCap,
      title: "Personalized Guidance",
      description: "Personalized Guidance for your academic path",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Search,
      title: "Destination Finding",
      description: "Finding your ideal educational destination",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Streamlined Documentation Assistance",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Award,
      title: "Admission Support",
      description: "Securing your admission offer",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: DollarSign,
      title: "Financial Guidance",
      description: "Guidance for Financial Documentation",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: Plane,
      title: "Study Preparation",
      description: "Preparing you for Abroad Study",
      color: "bg-indigo-100 text-indigo-600",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* First Section - Description */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Our Services
          </h2>
          <p className="md:text-lg text-gray-600 leading-relaxed">
            From initial consultation and university selection to visa
            assistance and career guidance, the{" "}
            <span className="font-semibold text-lg text-blue-700">
              Global ApplyHub Network
            </span> {' '}
            is dedicated to supporting you at every step. Trust us to provide
            personalized solutions tailored to your unique aspirations, helping
            you navigate the complexities of international education and make
            informed decisions that shape your future.
          </p>
        </div>

        {/* Second Section - Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-card"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-8 w-8" />
                  </div>

                  <h3 className="text-xl font-bold text-card-foreground mb-4 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Educational Journey?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get personalized guidance from our expert counselors and take the
              first step towards your dream education abroad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Get Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold bg-transparent"
              >
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
