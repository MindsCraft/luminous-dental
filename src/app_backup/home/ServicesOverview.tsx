// src/app/home/ServicesOverview.tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "General Dentistry",
    description: "Comprehensive checkups, cleanings, and oral health maintenance.",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Teeth whitening, veneers, and aesthetic dental enhancements.",
  },
  {
    title: "Orthodontics",
    description: "Braces and aligners for perfectly aligned teeth.",
  },
  {
    title: "Pediatric Dentistry",
    description: "Gentle and specialized dental care for children.",
  },
  {
    title: "Emergency Dental Care",
    description: "Immediate treatment for dental injuries and pain relief.",
  },
  {
    title: "Insurance & Payment Plans",
    description: "Flexible payment plans and insurance assistance.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-12 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Dental Services</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our wide range of dental treatments designed to give you the best smile.
        </p>

        {/* Services Grid Using ShadCN UI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Services Button (ShadCN UI Button) */}
        <div className="mt-8">
          <Button asChild variant="outline" className="text-lg font-semibold">
            <Link href="/services">
              View All Services <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
