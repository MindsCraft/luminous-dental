// src/components/CTASection.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="bg-white py-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Smile?</h2>
        <p className="text-lg md:text-xl mb-6">
          Book an appointment with our expert dentists today and experience world-class dental care.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button asChild className="bg-white text-blue-600 hover:bg-gray-200">
            <Link href="/booking">
              <span>Book Appointment</span>
            </Link>
          </Button>
        </div>

        <div className="mt-6">
          <Image
            src="/images/dental-care.jpg"
            alt="Dental Care"
            width={500}
            height={300}
            className="rounded-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
