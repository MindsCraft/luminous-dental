// /src/components/BookingForm.tsx
import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Appointment Booked!");
    // Handle form submission logic
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-lg">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
      </div>
      <div>
        <label className="block text-lg">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
      </div>
      <div>
        <label className="block text-lg">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
      </div>
      <div>
        <label className="block text-lg">Preferred Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
      </div>
      <div>
        <label className="block text-lg">Preferred Time</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded">
        Book Appointment
      </button>
    </form>
  );
};

export default BookingForm;
