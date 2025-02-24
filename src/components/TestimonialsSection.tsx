// /src/components/TestimonialsSection.tsx
const TestimonialsSection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">What Our Patients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="testimonial-card p-6 bg-white shadow-md rounded-lg">
            <p className="italic mb-4">"The staff is incredibly professional and kind. I felt at ease throughout the entire procedure."</p>
            <h3 className="font-semibold">John Doe</h3>
            <p className="text-gray-600">Patient</p>
          </div>
          <div className="testimonial-card p-6 bg-white shadow-md rounded-lg">
            <p className="italic mb-4">"I had a great experience. They made sure I was comfortable and explained everything in detail."</p>
            <h3 className="font-semibold">Jane Smith</h3>
            <p className="text-gray-600">Patient</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
