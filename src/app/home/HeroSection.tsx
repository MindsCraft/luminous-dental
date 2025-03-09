// app/Home/HeroSection.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[80vh] max-h-[850px] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-image.jpg"
          alt="Luminous Dental Care Clinic"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-primary/10 to-gray-900/90" />
      </div>

      {/* Glowing Accent Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tighter">
          Welcome to the Future of Dental Care
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium">
          Experience cutting-edge dental solutions with Luminous Dental Care.
          Your smile, our innovation.
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-white hover:bg-primary/80 border border-primary/50 shadow-[0_0_10px_rgba(0,209,255,0.5)] transition-all duration-300"
          >
            <Link href="/booking">Book Now</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-primary border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            <Link href="/services">Explore Services</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button aria-label="Scroll down to learn more" className="focus:outline-none">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
