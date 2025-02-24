// /src/components/HeroSection.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";  // Importing the local button

const HeroSection = () => {
  return (
    <div className="relative bg-white text-gray-900 py-32 px-6 lg:px-12">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-wide">
            Transform Your Smile with Expert Care
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light opacity-80">
            Discover top-notch dental treatments tailored to your needs at Luminous Dental Care.
          </p>
          <div className="flex justify-center lg:justify-start space-x-6">
            <Button variant="default" className="btn-lg px-10 py-4 text-lg font-bold transition-transform transform hover:scale-105">
              Book Appointment
            </Button>
            <Button variant="outline" className="btn-lg px-10 py-4 text-lg font-semibold transition-transform transform hover:scale-105">
              Get in Touch
            </Button>
          </div>
        </div>

        <div className="mt-12 lg:mt-0 max-w-full lg:max-w-md">
          <Image
            src="https://picsum.photos/800/800?random=1"
            alt="Dental Care"
            className="w-full"
            width="800"
            height="800"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
