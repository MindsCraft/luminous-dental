// /src/components/ServicesSection.tsx
const ServicesSection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Teeth Whitening</h3>
            <p>Brighten your smile with professional teeth whitening services.</p>
          </div>
          <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Orthodontics</h3>
            <p>Align your teeth and achieve the smile you've always dreamed of.</p>
          </div>
          <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-4">General Dentistry</h3>
            <p>Comprehensive dental care to maintain your oral health.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
