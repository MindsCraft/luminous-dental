import { Button } from '@/components/ui/button'; // ShadCN Button import
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Section - Content and CTA Button */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Make the Dream Come True
          </h2>
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Get a Beautiful Smile with Discreet Invisalign Treatments
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            If you are looking for a more discreet and comfortable way to straighten your teeth, then Invisalign may be the perfect solution for you.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Invisalign is an advanced technology that uses clear, removable plastic aligners to gradually align your teeth over time. These aligners are custom-made for your teeth and can be removed when you eat, brush your teeth, or for a special occasion.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Book an appointment online or contact us today if you have any questions or inquiries.
          </p>
          {/* ShadCN Button */}
          <Link href="/appointment">
            <Button className="bg-gray-800 text-white py-3 px-8 rounded-full text-xl font-semibold transition duration-300 hover:bg-gray-700 focus:ring-2 focus:ring-gray-600">
              Book Appointment
            </Button>
          </Link>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/cta-img.jpg" // Your image here
            alt="Invisalign Treatment"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
