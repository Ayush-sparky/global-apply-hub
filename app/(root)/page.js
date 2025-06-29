import { ContactSection } from "@/components/sections_pages/ContactEmail";
import HeroSection from "@/components/sections_pages/Hero";
import ServicesSection from "@/components/sections_pages/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
