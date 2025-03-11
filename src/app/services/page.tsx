// app/services/page.tsx
"use client";

import React from "react";
import { usePageHeader } from "@/context/PageHeaderContext";
import { services } from "./services";
import ServiceCard from "./components/ServiceCard";

export default function ServicesPage() {
  const { setPageHeaderData } = usePageHeader();

  React.useEffect(() => {
    setPageHeaderData({
      title: "Our Services",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Our Services", href: "/services", current: true },
      ],
    });

    return () => setPageHeaderData(null);
  }, [setPageHeaderData]);

  return (
    <div className="bg-gray-50">
      {/* Intro Section */}
      <section className="py-12 px-2 sm:px-4 md:px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Discover our range of dental treatments designed to enhance your smile and maintain optimal oral health.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-2 sm:px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-wide text-gray-700 text-center mb-8">
            Dental Treatments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
