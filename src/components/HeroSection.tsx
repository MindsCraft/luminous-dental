import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
      <section className="relative w-full h-screen flex items-center justify-center text-white">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
              src="/images/dental-hero.jpg" // ✅ Using your current image
              alt="Professional Dental Care"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
              className="brightness-80"
          />
        </div>

        {/* Frosted Glass Effect Card - Less Transparent */}
        <div className="relative z-10 max-w-3xl w-full bg-white/50 dark:bg-gray-900/60 backdrop-blur-md rounded-2xl shadow-lg p-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-gray-900 dark:text-white">
            Transform Your Smile with <span className="text-primary">Expert Care</span>
          </h1>
          <p className="text-lg md:text-xl mt-6 font-light text-gray-800 dark:text-gray-200">
            Discover top-notch dental treatments tailored to your needs at <b>Luminous Dental Care</b>.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/booking">
              <Button className="px-8 py-5 text-lg font-bold rounded-lg shadow-md bg-primary text-white hover:bg-primary/80 transition-transform transform hover:scale-105">
                Book Appointment
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                  variant="outline"
                  className="px-8 py-5 text-lg font-semibold rounded-lg shadow-md border-gray-300 dark:border-gray-500 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-transform transform hover:scale-105"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;
