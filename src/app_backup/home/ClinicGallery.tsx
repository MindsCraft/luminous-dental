"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ 12 slides for infinite looping effect
const images = [
  { src: "/images/gallery/clinic1.png", alt: "Clinic 1", text: "Welcome to Luminous Dental" },
  { src: "/images/gallery/clinic1.png", alt: "Clinic 2", text: "State-of-the-Art Facilities" },
  { src: "/images/gallery/clinic1.png", alt: "Clinic 3", text: "Caring Dentists for Every Patient" },
  { src: "/images/gallery/clinic1.png", alt: "Clinic 4", text: "Advanced Dental Treatments" },
  { src: "/images/gallery/clinic1.png", alt: "Clinic 5", text: "Comfortable Environment" },
  { src: "/images/gallery/clinic1.png", alt: "Clinic 6", text: "Cutting-Edge Equipment" },
  { src: "/images/gallery/clinic1.png", alt: "Clinic 7", text: "Painless Procedures" },
  { src: "/images/gallery/clinic1.png", alt: "Clinic 8", text: "Patient-Centric Approach" },
  { src: "/images/gallery/clinic1.png", alt: "Clinic 9", text: "Dental Implants & More" },
  { src: "/images/gallery/clinic1.png", alt: "Clinic 10", text: "Experienced Dentists" },
  { src: "/images/gallery/clinic1.png", alt: "Clinic 11", text: "Oral Health Specialists" },
  { src: "/images/gallery/clinic1.png", alt: "Clinic 12", text: "Modern Dental Studio" },
];

export default function ClinicGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Function to shift slides infinitely
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // ✅ Auto-slide effect every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-12">
      {/* ✅ Container for header (NOT full width) */}
      <div className="container mx-auto flex justify-between items-center mb-6">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Discover Our Clinic</h2>
          <p className="text-lg text-gray-600 mt-2">
            Explore our modern clinic with state-of-the-art facilities and a caring team of experts.
          </p>
        </div>
        {/* Navigation Buttons (Top-Right) */}
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition"
          >
            <ChevronLeft size={30} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      </div>

      {/* ✅ Full-width Infinite Slider */}
      <div className="relative flex w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex % images.length) * (100 / 4)}%)`,
            width: `${(images.length / 4) * 100}%`, // Ensures smooth looping
          }}
        >
          {images.concat(images).map((image, index) => (
            <div key={index} className="w-auto flex-shrink-0 relative mx-2 rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={400}
                className="w-full h-auto object-cover "
              />
              {/* ✅ Overlay with Text */}
              <div className="absolute top-0 left-0 w-full h-full bg-black/25 flex justify-center items-center text-white text-2xl font-semibold p-4">
                {image.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Slide Counter (Centered at Bottom) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold">
        {currentIndex % images.length + 1} / {images.length}
      </div>
    </section>
  );
}
