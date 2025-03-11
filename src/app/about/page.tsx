// src/app/about/page.tsx
"use client";

import React from "react";
import { usePageHeader } from "@/context/PageHeaderContext";

const About = () => {
  const { setPageHeaderData } = usePageHeader();

  // Optionally override the default PageHeader data for this page
  React.useEffect(() => {
    setPageHeaderData({
      title: "About Us",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about", current: true },
      ],
      backgroundImage: "/images/about-header.jpg",
    });

    // Cleanup to reset to default when unmounting
    return () => setPageHeaderData(null);
  }, [setPageHeaderData]);

  // Sample Data for Team Section
  const teamData = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Dentist",
      bio: "With over 15 years of experience, Dr. Johnson specializes in cosmetic dentistry and patient care.",
      image: "/images/contacts/contact-1.jpg",
    },
    {
      name: "Dr. Michael Lee",
      role: "Orthodontist",
      bio: "Dr. Lee brings expertise in braces and aligners, ensuring perfect smiles for all ages.",
      image: "/images/contacts/contact-2.jpg",
    },
    {
      name: "Emily Carter",
      role: "Dental Hygienist",
      bio: "Emily focuses on preventive care and patient education with a warm approach.",
      image: "/images/contacts/contact-3.jpg",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Mission Section */}
      <section className="py-12 px-2 sm:px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-wide text-gray-700 mb-6">
            Our Mission
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            At Luminous Dental, we are dedicated to providing exceptional dental care with a focus on innovation, comfort, and patient satisfaction. Our mission is to create radiant smiles that last a lifetime through personalized treatment and advanced technology.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-2 sm:px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-wide text-gray-700 text-center mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamData.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-xl mx-auto mb-4 shadow-md"
                />
                <h3 className="text-xl sm:text-2xl font-medium text-gray-700">{member.name}</h3>
                <p className="text-md sm:text-lg text-gray-600">{member.role}</p>
                <p className="text-sm sm:text-md text-gray-500 mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
