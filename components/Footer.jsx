import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export default function EducationFooter() {
  return (
    <footer className="bg-nav_footer text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 w-[150px] h-[60px] md:w-[180px] md:h-[80px] relative">
                <Image
                  src="/company_transparent_logo.png"
                  fill
                  alt="Company's Logo"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering students to achieve their academic dreams through
              personalized guidance and expert consultation services.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-blue-600/20 p-3 rounded-full hover:bg-blue-500/30 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-blue-600/20 p-3 rounded-full hover:bg-blue-500/30 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-blue-600/20 p-3 rounded-full hover:bg-blue-500/30 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-blue-600/20 p-3 rounded-full hover:bg-blue-500/30 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-200">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "University Admission",
                "Scholarship Guidance",
                "Career Counseling",
                "Test Preparation",
                "Study Abroad Programs",
                "Academic Planning",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-300 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-200">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                "About Us",
                "Success Stories",
                "Blog & Resources",
                "Contact Us",
                "FAQ",
                "Privacy Policy",
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-300 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-200">
              Contact & Locations
            </h4>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@educonsult.com</p>
                  <p className="text-gray-400 text-sm">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM</p>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">New York Office</p>
                  <p className="text-gray-400 text-sm">
                    123 Education Ave, NY 10001
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">London Office</p>
                  <p className="text-gray-400 text-sm">
                    456 Academic St, London EC1A 1BB
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Sydney Office</p>
                  <p className="text-gray-400 text-sm">
                    789 University Rd, Sydney NSW 2000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-600/20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-blue-200 mb-2">
                Stay Updated
              </h4>
              <p className="text-gray-300">
                Get the latest education insights and opportunities delivered to
                your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-white/10 border border-blue-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm sm:w-64"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800/30 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} EduConsult. All rights reserved. | Transforming futures
                through education.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-300 text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-300 text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-300 text-sm transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
