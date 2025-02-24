// /src/components/CTASection.tsx
const CTASection = () => {
  return (
    <div className="py-16 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-semibold mb-4">Ready to Take Care of Your Smile?</h2>
      <p className="text-xl mb-6">Our team of dental professionals is here to help. Book an appointment today!</p>
      <a href="/booking" className="bg-yellow-500 text-black py-2 px-6 rounded-lg inline-block text-lg font-semibold transition-transform transform hover:scale-105">
        Book Appointment
      </a>
    </div>
  );
};

export default CTASection;
