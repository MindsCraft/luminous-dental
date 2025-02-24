// /src/components/ContactInfoSection.tsx
const ContactInfoSection = () => {
  return (
    <div className="py-16">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Contact Information</h2>
        <p className="text-lg mb-4">Luminous Dental Care</p>
        <p className="text-lg mb-4">House:3, Road:4, Block: C, Banasree, Rampura 1219 Dhaka, Bangladesh</p>
        <p className="text-lg mb-4">Email: <a href="mailto:luminousdent21@gmail.com" className="text-blue-600 hover:underline">luminousdent21@gmail.com</a></p>
        <p className="text-lg">Phone: <a href="tel:+880123456789" className="text-blue-600 hover:underline">+880 123 456 789</a></p>
      </div>
    </div>
  );
};

export default ContactInfoSection;
