// src/app/components/HeroSection.tsx
'use client';

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/20 flex justify-center items-center">
        <div className="text-center text-white px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">Your Smile, Our Priority</h1>
          <p className="text-lg md:text-xl mb-8">High-quality dental care, experienced doctors, and compassionate service.</p>
          <a href="/book-appointment" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full text-lg transition duration-300">Book Appointment</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
