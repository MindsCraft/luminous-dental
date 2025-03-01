// src/app/components/WhyChooseUs.tsx
'use client';

const benefits = [
  {
    title: "Experienced Doctors",
    icon: "fas fa-user-md",
    description: "Our team consists of highly trained professionals committed to providing exceptional dental care."
  },
  {
    title: "Modern Equipment",
    icon: "fas fa-tooth",
    description: "We utilize state-of-the-art dental technology for precise and effective treatments."
  },
  {
    title: "Painless Treatment",
    icon: "fas fa-heart",
    description: "Our gentle procedures ensure a comfortable and pain-free dental experience."
  },
  {
    title: "Personalized Care",
    icon: "fas fa-smile",
    description: "We tailor each treatment plan to meet your unique dental needs and preferences."
  },
  {
    title: "Affordable Pricing",
    icon: "fas fa-wallet",
    description: "We offer high-quality dental care at reasonable prices with flexible payment options."
  },
  {
    title: "Emergency Care",
    icon: "fas fa-ambulance",
    description: "Immediate assistance for urgent dental needs, ensuring fast relief and expert care."
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">
          Why Choose <span className="text-blue-600">Luminous Dental Care</span>?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:bg-blue-50"
            >
              <div className="flex justify-center items-center mb-6">
                <i className={`text-4xl text-blue-600 ${benefit.icon} animate-pulse`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
