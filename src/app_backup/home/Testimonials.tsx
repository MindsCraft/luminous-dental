// src/components/TestimonialsSection.tsx
"use client";

import React from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  text: string;
  image: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah M.",
      text: "The team at Luminous Dental transformed my smile! The care and expertise were unmatched.",
      image: "/images/contacts/contact-1.jpg",
    },
    {
      name: "John D.",
      text: "Quick, painless, and professional. I highly recommend their orthodontic services.",
      image: "/images/contacts/contact-2.jpg",
    },
    {
      name: "Emily R.",
      text: "A welcoming environment with top-notch technology. My whitening treatment was a success!",
      image: "/images/contacts/contact-3.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={testimonial.image}
                alt={`${testimonial.name}'s testimonial`}
                width={300}
                height={200}
                className="rounded-lg mb-4 object-cover w-full h-48"
              />
              <p className="text-gray-600 italic mb-4">{`"${testimonial.text}"`}</p>
              <p className="font-semibold text-gray-800">{`- ${testimonial.name}`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
