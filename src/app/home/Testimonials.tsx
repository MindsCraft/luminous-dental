// src/app/components/Testimonials.tsx
'use client';

const testimonials = [
  {
    name: "John Doe",
    feedback: "I had an amazing experience! The doctors are truly professional and made me feel at ease.",
    image: "/images/testimonial1.jpg"
  },
  {
    name: "Jane Smith",
    feedback: "The clinic is modern, the staff is friendly, and the treatments are painless! Highly recommended.",
    image: "/images/testimonial2.jpg"
  },
  {
    name: "Emily Johnson",
    feedback: "A fantastic dental clinic! My teeth have never felt better. Great service and affordable prices.",
    image: "/images/testimonial3.jpg"
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">
          What Our <span className="text-blue-600">Patients Say</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-4 border-blue-500 shadow-md"
                />
              </div>
              <p className="text-lg text-gray-600 italic">"{testimonial.feedback}"</p>
              <p className="mt-4 text-xl font-semibold text-gray-800">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
