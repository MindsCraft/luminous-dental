// src/app/components/ServicesGrid.tsx
'use client';

const services = [
  {
    title: "Teeth Cleaning",
    description: "Routine checkups and preventive care",
    icon: "fas fa-tooth",
    link: "/services/teeth-cleaning",
  },
  {
    title: "Braces",
    description: "Braces and Invisalign treatments",
    icon: "fas fa-align-center",
    link: "/services/braces",
  },
  {
    title: "Fillings",
    description: "Fix cavities and improve teeth structure",
    icon: "fas fa-dental-floss",
    link: "/services/fillings",
  },
  {
    title: "Pediatric Dentistry",
    description: "Dental care for children",
    icon: "fas fa-baby",
    link: "/services/pediatric",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with veneers and whitening",
    icon: "fas fa-paint-brush",
    link: "/services/cosmetic-dentistry",
  },
  {
    title: "Emergency Care",
    description: "Immediate care for dental emergencies",
    icon: "fas fa-heartbeat",
    link: "/services/emergency-care",
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">Our Premium Dental Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-200 hover:to-indigo-200">
              <div className="flex justify-center items-center mb-6">
                <i className={`text-4xl text-blue-600 ${service.icon}`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href={service.link}
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md text-lg transition hover:bg-blue-700"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
