// src/app/components/Footer.tsx
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Contact Information */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p className="text-lg mb-2">Phone: 123-456-7890</p>
          <p className="text-lg mb-2">Email: info@luminousdental.com</p>
          <p className="text-lg">Address: 123 Dental St., Dhaka</p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/privacy-policy" className="text-lg hover:text-blue-500">Privacy Policy</a></li>
            <li><a href="/terms-and-conditions" className="text-lg hover:text-blue-500">Terms & Conditions</a></li>
            <li><a href="/accessibility" className="text-lg hover:text-blue-500">Accessibility</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-blue-600 transition">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-pink-600 transition">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-blue-400 transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-lg text-gray-400">
        <p>&copy; {new Date().getFullYear()} Luminous Dental Care. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
