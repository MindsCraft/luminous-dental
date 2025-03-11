// src/components/Footer.tsx
"use client";

import React from "react";
import { Facebook, Instagram, Twitter } from "react-feather";

// Data Definitions
const contactData = {
  title: "Contact",
  phone: "123-456-7890",
  email: "info@luminousdental.com",
  address: "123 Dental St., Dhaka",
};

const quickLinksData = {
  title: "Explore",
  links: [
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Imprint", href: "/imprint" },
    { label: "Help Center", href: "/help-center" },
    { label: "Accessibility", href: "/accessibility" },
  ],
};

const socialData = {
  title: "Connect",
  links: [
    { platform: "facebook", href: "https://facebook.com" },
    { platform: "instagram", href: "https://instagram.com" },
    { platform: "twitter", href: "https://twitter.com" },
  ],
};

const bottomLinksData = [
  { label: "Terms", href: "/terms-of-service" },
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Cookies", href: "/cookie-policy" },
];

// Internal Component Functions
const ContactSection = ({ title, phone, email, address }: typeof contactData) => (
  <div className="text-center md:text-left">
    <h3 className="text-4xl font-bold uppercase tracking-wide mb-8 text-gray-700 drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
      {title}
    </h3>
    <p className="text-lg text-gray-600 mb-4">{`Phone: ${phone}`}</p>
    <p className="text-lg text-gray-600 mb-4">{`Email: ${email}`}</p>
    <p className="text-lg text-gray-600">{`Address: ${address}`}</p>
  </div>
);

const LinksSection = ({ title, links }: typeof quickLinksData) => (
  <div className="text-center md:text-left">
    <h3 className="text-4xl font-bold uppercase tracking-wide mb-8 text-gray-700 drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
      {title}
    </h3>
    <ul className="space-y-6">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="text-lg text-gray-600 hover:text-gray-900 hover:underline hover:decoration-2 hover:decoration-gray-400 hover:scale-105 transition-all duration-300 ease-out"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialSection = ({ title, links }: typeof socialData) => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <Facebook />;
      case "instagram":
        return <Instagram />;
      case "twitter":
        return <Twitter />;
      default:
        return null;
    }
  };

  return (
    <div className="text-center md:text-left">
      <h3 className="text-4xl font-bold uppercase tracking-wide mb-8 text-gray-700 drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
        {title}
      </h3>
      <div className="flex justify-center md:justify-start space-x-6">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-2xl text-gray-600 hover:text-gray-800 hover:bg-white/30 transition-all duration-300 ease-out transform hover:scale-110 shadow-md hover:shadow-lg backdrop-blur-sm"
          >
            {getIcon(link.platform)}
          </a>
        ))}
      </div>
    </div>
  );
};

const FooterBottom = ({ links }: { links: { label: string; href: string }[] }) => (
  <div className="border-t border-gray-300/50 pt-6 text-center">
    <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
      © {new Date().getFullYear()} Luminous Dental. All rights reserved.
    </p>
    <div className="flex justify-center space-x-6">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-sm text-gray-500 hover:text-gray-700 hover:underline hover:decoration-1 hover:decoration-gray-400 transition-all duration-300 ease-out"
        >
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gray-100 backdrop-blur-sm text-gray-800 py-16 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <ContactSection {...contactData} />
          <LinksSection {...quickLinksData} />
          <SocialSection {...socialData} />
        </div>

        {/* Footer Bottom Bar */}
        <FooterBottom links={bottomLinksData} />
      </div>
    </footer>
  );
};

export default Footer;
