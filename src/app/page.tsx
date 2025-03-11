// src/app/page.tsx

import HeroSection from './home/HeroSection';
// import ServicesOverview from './home/ServicesOverview';
// import ClinicGallery from './home/ClinicGallery';
// import Testimonials from './home/Testimonials';
import CTASection from './home/CTASection';
import ServicesSection from "@/app/home/ServicesSection";
import TestimonialsSection from "./home/Testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      {/*<ServicesOverview />*/}
      {/*<ClinicGallery />*/}
      {/*<Testimonials />*/}
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
