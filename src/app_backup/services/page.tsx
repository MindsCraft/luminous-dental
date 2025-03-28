// src/app/services/page.tsx
import { services } from "./services";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "./components/ServiceCard";

export const metadata = {
  title: "Our Services - Luminous Dental",
  description: "Explore our comprehensive dental services at Luminous Dental.",
};

export default function ServicesPage() {
  const headerData = {
    title: "Our Services",
    breadcrumbs: [
      { label: "Home", href: "/", current: false },
      { label: "Our Services", href: "/services", current: true },
    ],
  };

  return (
    <>
      <PageHeader {...headerData} />
      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-white text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Discover Your Perfect Smile
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Explore our wide range of dental services designed to enhance your oral health and confidence.
          </p>
          <a
            href="/booking"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
          >
            Book a Consultation
          </a>
        </section>

        {/* Services Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-wide text-gray-700 mb-10 text-center">
              Our Dental Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
