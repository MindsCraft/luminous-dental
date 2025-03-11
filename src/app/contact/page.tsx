// app/contact/page.tsx
import PageHeader from "@/components/PageHeader";
import ContactForm from "./ContactForm";
import React from "react";

export const metadata = {
  title: "Contact Us - Luminous Dental",
  description: "Get in touch with Luminous Dental for your dental care needs.",
};

export default function ContactPage() {
  const headerData = {
    title: "Contact Us",
    breadcrumbs: [
      { label: "Home", href: "/", current: false },
      { label: "Contact Us", href: "/contact", current: true },
    ],
  };

  return (
    <>
      <PageHeader {...headerData} />
      <div className="bg-gray-50 min-h-screen">
        {/* Main Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column: Contact Info */}
              <div className="space-y-8">
                <h2 className="text-3xl font-light text-gray-900 mb-6 animate-fade-in">
                  Visit or Contact Us
                </h2>
                <div className="space-y-6">
                  {/* Clinic Address */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Clinic Address</h3>
                    <p className="text-gray-600 text-sm">
                      123 Smile St, Seattle, WA 98101
                    </p>
                    <a
                      href="https://maps.google.com/?q=123+Smile+St,+Seattle,+WA+98101"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm mt-2 inline-block"
                    >
                      View on Google Maps
                    </a>
                  </div>

                  {/* Phone */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Phone</h3>
                    <p className="text-gray-600 text-sm">
                      <a href="tel:+1234567890" className="hover:text-blue-600 transition-colors">
                        (123) 456-7890
                      </a>
                    </p>
                  </div>

                  {/* Email */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Email</h3>
                    <p className="text-gray-600 text-sm">
                      <a
                        href="mailto:info@luminousdental.com"
                        className="hover:text-blue-600 transition-colors"
                      >
                        info@luminousdental.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="space-y-8">
                <h2 className="text-3xl font-light text-gray-900 mb-6 animate-fade-in">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-light text-gray-900 mb-6 text-center animate-fade-in">
              Find Us
            </h2>
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.504982677565!2d-122.33516748436747!3d47.60801317918421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab3e2c3f7b9%3A0x9a1237e5f7a12345!2s123%20Smile%20St%2C%20Seattle%2C%20WA%2098101!5e0!3m2!1sen!2sus!4v1696451234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto max-w-3xl text-center text-sm text-gray-500">
            <p className="mb-2">
              For emergencies, call our 24/7 line at{" "}
              <a href="tel:+1234567891" className="text-blue-600 hover:underline">
                (123) 456-7891
              </a>
              .
            </p>
            <p>
              We’re HIPAA-compliant and use Apple-secured technology to ensure your data’s safety.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
