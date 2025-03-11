// src/app/contact/page.tsx
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Contact Us - Luminous Dental",
  description: "Get in touch with Luminous Dental for appointments or inquiries.",
};

const Contact = () => {
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
      <div className="container mx-auto py-12 px-2 sm:px-4 md:px-6">
        <h1 className="text-3xl font-light uppercase tracking-wide text-gray-700 mb-8 text-center">
          Contact Luminous Dental
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed text-center">
          {/* Add contact form or details here */}
          Phone: (123) 456-7890 | Email: info@luminousdental.com
        </p>
      </div>
    </>
  );
};

export default Contact;
