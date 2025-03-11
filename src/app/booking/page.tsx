// app/booking/page.tsx
import PageHeader from "@/components/PageHeader";
import BookingSection from "./BookingSection";
import React from "react";

export const metadata = {
  title: "Book an Appointment - Luminous Dental",
  description: "Schedule your dental appointment with Luminous Dental today.",
};

export default function BookingPage() {
  const headerData = {
    title: "Book an Appointment",
    breadcrumbs: [
      { label: "Home", href: "/", current: false },
      { label: "Book an Appointment", href: "/booking", current: true },
    ],
  };

  return (
    <>
      <PageHeader {...headerData} />
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4 animate-fade-in">
              Book Your Dental Visit
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Schedule with ease, designed with the precision and care of an Apple experience.
            </p>
            <a
              href="#booking-section"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-medium text-lg hover:bg-blue-700 transition-all duration-300 animate-fade-in"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking-section" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <BookingSection />
          </div>
        </section>
      </div>
    </>
  );
}
