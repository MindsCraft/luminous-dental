// /src/components/TestimonialsSection.tsx
const TestimonialsSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">What Our Patients Say</h2>
        <div className="mt-6 space-y-6">
          <blockquote className="bg-white p-6 shadow-lg rounded-lg">
            <p className="text-lg">"Luminous Dental Care gave me back my smile! The team is incredibly friendly, and the treatments are top-notch."</p>
            <footer className="mt-4 text-sm">- Jane Doe</footer>
          </blockquote>
          <blockquote className="bg-white p-6 shadow-lg rounded-lg">
            <p className="text-lg">"Excellent service and attention to detail. I highly recommend them for any dental needs!"</p>
            <footer className="mt-4 text-sm">- John Smith</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
