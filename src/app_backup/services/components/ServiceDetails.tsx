// src/app/services/components/ServiceDetails.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  imageUrl: string;
}

export default function ServiceDetails({ service }: { service: Service }) {
  return (
    <div className="bg-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative w-full h-72 sm:h-96 rounded-lg overflow-hidden shadow-md">
              <Image
                src={service.imageUrl}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl font-light text-gray-800 mb-6">{service.title}</h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <div className="prose prose-lg text-gray-700 mb-8">
                {service.details.split("\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <Link
                href="/booking"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
              >
                Schedule Your Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
