// src/app/page.tsx

import HeroSection from './home/HeroSection';
import ServicesOverview from './home/ServicesOverview';
import ClinicGallery from './home/ClinicGallery';
import Testimonials from './home/Testimonials';
import CTASection from './home/CTASection';
import Test from './home/Test';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Test />
      <ServicesOverview />
      <ClinicGallery />
      <Testimonials />
      <CTASection />
    </>
  );
}
