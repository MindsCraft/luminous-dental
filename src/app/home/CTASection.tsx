// src/components/CtaSection.tsx
"use client";

import React from "react";
import Image from "next/image";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-lg">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Smile?</h2>
          <p className="text-lg mb-6">
            Contact us today to schedule your appointment and experience the future of dental care. Our team is here to assist you every step of the way!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors"
          >
            Get in Touch
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/contacts/contact-3.jpg"
            alt="Contact Image 1"
            width={300}
            height={200}
            className="rounded-lg object-cover"
          />
          <Image
            src="/images/contacts/contact-2.jpg"
            alt="Contact Image 2"
            width={300}
            height={200}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
