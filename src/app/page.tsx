// src/app/home/page.tsx
import HeroSection from '../components/HeroSection';
import ServicesGrid from '../components/ServicesGrid';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
};

export default HomePage;
