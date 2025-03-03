// src/app/home/Testimonials.tsx
"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    review: "I had an amazing experience! The doctors are truly professional and made me feel at ease.",
    image: "/images/testimonials/person1.png",
  },
  {
    name: "Jane Smith",
    review: "The clinic is modern, the staff is friendly, and the treatments are painless! Highly recommended.",
    image: "/images/testimonials/person2.png"
  },
  {
    name: "Emily Johnson",
    review: "A fantastic dental clinic! My teeth have never felt better. Great service and affordable prices.",
    image: "/images/testimonials/person3.png"
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6">What Our Patients Say</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-md max-w-sm">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={80}
              height={80}
              className="rounded-full mx-auto"
            />
            <p className="mt-4 text-gray-700 italic">
              &ldquo;{testimonial.review}&rdquo;
            </p>
            <p className="mt-2 font-semibold">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}



