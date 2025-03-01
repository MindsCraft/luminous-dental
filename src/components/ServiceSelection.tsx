// src/app/components/ServiceSelection.tsx
'use client';

import { useState } from 'react';

const ServiceSelection = () => {
  const [selectedService, setSelectedService] = useState('');
  const [doctor, setDoctor] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const handleSubmit = async () => {
    const appointmentData = {
      service: selectedService,
      doctor,
      timeSlot,
    };

    try {
      const response = await fetch('/api/book-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });

      const result = await response.json();
      alert(result.message || 'Appointment booked successfully!');
    } catch (error) {
      alert('Failed to book appointment. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Book Your Appointment</h2>

      <div className="mb-6">
        <h3 className="text-xl font-medium text-gray-800 mb-2">Select Service</h3>
        <select
          onChange={(e) => setSelectedService(e.target.value)}
          value={selectedService}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Service</option>
          <option value="Teeth Cleaning">Teeth Cleaning</option>
          <option value="Braces">Braces</option>
          <option value="Fillings">Fillings</option>
        </select>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-medium text-gray-800 mb-2">Select Doctor</h3>
        <select
          onChange={(e) => setDoctor(e.target.value)}
          value={doctor}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Doctor</option>
          <option value="Dr. Alice">Dr. Alice (General Dentistry)</option>
          <option value="Dr. Bob">Dr. Bob (Orthodontics)</option>
        </select>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-medium text-gray-800 mb-2">Select Time Slot</h3>
        <input
          type="datetime-local"
          onChange={(e) => setTimeSlot(e.target.value)}
          value={timeSlot}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default ServiceSelection;
