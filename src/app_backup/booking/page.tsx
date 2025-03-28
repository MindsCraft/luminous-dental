import PageHeader from '@/components/PageHeader';
import BookingForm from './BookingForm';

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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 text-center">
          <div className="container mx-auto max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4 animate-fade-in">
              Your Perfect Smile Starts Here
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              We’re here to make your dental visit seamless and comfortable. Let’s find the perfect time for you.
            </p>
          </div>
        </section>
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-md">
            <BookingForm />
          </div>
        </section>
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white text-center">
          <div className="container mx-auto max-w-3xl">
            <p className="text-gray-600">
              We’re excited to welcome you to Luminous Dental. Your smile is our priority!
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
