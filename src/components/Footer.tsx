// /src/components/Footer.tsx
import { Button } from "@/components/ui/button";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 mt-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Luminous Dental Care</h3>
            <p className="text-lg mb-4">
              Providing expert dental care in a friendly, comfortable environment. We’re committed to your smile and health.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" className="p-2 rounded-full hover:bg-gray-700">
                <FaFacebook />
              </Button>
              <Button variant="outline" className="p-2 rounded-full hover:bg-gray-700">
                <FaTwitter />
              </Button>
              <Button variant="outline" className="p-2 rounded-full hover:bg-gray-700">
                <FaInstagram />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-lg hover:text-blue-500 transition">Home</a>
              </li>
              <li>
                <a href="/booking" className="text-lg hover:text-blue-500 transition">Book Appointment</a>
              </li>
              <li>
                <a href="/contact" className="text-lg hover:text-blue-500 transition">Contact</a>
              </li>
              <li>
                <a href="/doctors" className="text-lg hover:text-blue-500 transition">Doctors</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="text-lg mb-2">House:3, Road:4, Block: C, Banasree, Rampura 1219 Dhaka, Bangladesh</p>
            <p className="text-lg mb-4">Email: <a href="mailto:luminousdent21@gmail.com" className="text-blue-400 hover:underline">luminousdent21@gmail.com</a></p>
            <p className="text-lg">Phone: <a href="tel:+880123456789" className="text-blue-400 hover:underline">+880 123 456 789</a></p>
          </div>
        </div>

        <div className="text-center text-sm mt-12">
          <p>&copy; 2025 Luminous Dental Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
