// app/services/components/ServiceCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative w-full h-48 sm:h-56">
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-medium text-gray-700 mb-2">{service.title}</h2>
        <p className="text-sm sm:text-md text-gray-600 mb-4 line-clamp-3">{service.description}</p>
        <Link
          href={`/services/${service.id}`}
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors duration-200"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
