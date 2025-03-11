// app/booking/page.tsx
import BookingForm from "./BookingForm"; // Client component for the form
import PageHeader from "@/components/PageHeader";

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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-xl">
            <h1 className="text-3xl md:text-4xl font-light text-gray-800 mb-6 text-center">
              Schedule Your Visit
            </h1>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Fill out the form below to book your appointment with Luminous Dental.
            </p>
            <BookingForm />
          </div>
        </section>
      </div>
    </>
  );
}
