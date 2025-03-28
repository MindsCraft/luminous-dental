// src/components/ServicesSection.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Stethoscope, Heart, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

// Define the Service interface for TypeScript
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Main content slide interface
interface Slide {
  heading: string;
  message1: string;
  message2: string;
  image: string;
}

const ServicesSection = () => {
  const services: Service[] = [
    {
      title: "General Dentistry",
      description: "Routine check-ups, cleanings, and preventive care.",
      icon: <Stethoscope className="w-16 h-16 text-gray-800" />,
    },
    {
      title: "Cosmetic Dentistry",
      description: "Teeth whitening, veneers, and smile makeovers.",
      icon: <Heart className="w-16 h-16 text-gray-800" />,
    },
    {
      title: "Orthodontics",
      description: "Braces and aligners for straighter teeth.",
      icon: <User className="w-16 h-16 text-gray-800" />,
    },
  ];

  const slides: Slide[] = [
    {
      heading: "Transform Your Smile with Confidence",
      message1: "Experience world-class dental care designed for your unique needs.",
      message2: "Our innovative techniques ensure a comfortable and lasting result.",
      image: "/images/clinic/clinic-1.jpg",
    },
    {
      heading: "Rediscover Your Radiant Smile",
      message1: "Advanced treatments tailored to enhance your natural beauty.",
      message2: "Trust our experts to guide you every step of the way.",
      image: "/images/clinic/clinic-2.jpg",
    },
    {
      heading: "Healthy Smiles, Happy Lives",
      message1: "Preventive care to keep your smile shining bright.",
      message2: "Join a community dedicated to your oral health journey.",
      image: "/images/clinic/clinic-3.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Part 1: Header and Description */}
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 text-left">
            Elevate Your Smile with Exceptional Dental Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl text-left">
            Unlock a world of personalized dental care where innovation meets compassion. Our expert team is committed to transforming your oral health and boosting your confidence with cutting-edge solutions tailored just for you.
          </p>
        </div>

        {/* Part 2: Main Content with Slider */}
        <div className="relative w-full h-[600px] mb-16 overflow-hidden rounded-xl">
          <AnimatePresence mode="wait">
            {slides.map((slide, index) => (
              index === currentSlide && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  {/* Dark Gradient Overlay Inspired by Devin.ai */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  {/* Text Overlay with Devin.ai Style */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white max-w-3xl px-4">
                    <h3 className="text-5xl font-bold mb-6 leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                      {slide.heading}
                    </h3>
                    <p className="text-xl leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
                      {slide.message1} <br /> {slide.message2}
                    </p>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
          {/* Slider Indicators Inspired by Devin.ai */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <Button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-white scale-125" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Part 3: Services Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/30 backdrop-blur-md border border-gray-200 rounded-xl p-8 h-72"
            >
              <div className="mb-8">{service.icon}</div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
