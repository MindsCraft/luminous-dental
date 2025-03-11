// src/app/services/components/ServiceDetails.tsx
"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePageHeader } from "@/context/PageHeaderContext";

interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  imageUrl: string;
}

interface PageHeaderData {
  title: string;
  breadcrumbs: { label: string; href: string; current?: boolean }[];
  backgroundImage?: string;
}

export default function ServiceDetails({
                                         service,
                                         initialPageHeaderData,
                                       }: {
  service: Service;
  initialPageHeaderData: PageHeaderData;
}) {
  const { setPageHeaderData } = usePageHeader();

  // Set the PageHeader data immediately with the initial prop
  useEffect(() => {
    setPageHeaderData(initialPageHeaderData);

    // Cleanup to reset to default when unmounting
    return () => setPageHeaderData(null);
  }, [setPageHeaderData, initialPageHeaderData]);

  return (
    <div className="bg-gray-50">
      <section className="py-12 px-2 sm:px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="relative w-full h-64 sm:h-80 lg:h-96">
              <Image
                src={service.imageUrl}
                alt={service.title}
                fill
                className="object-cover rounded-xl shadow-md"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-light uppercase tracking-wide text-gray-700 mb-4">
                {service.title}
              </h1>
              <p className="text-md sm:text-lg text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <p className="text-md sm:text-lg text-gray-600 mb-6 leading-relaxed">{service.details}</p>
              <Link
                href="/booking"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
