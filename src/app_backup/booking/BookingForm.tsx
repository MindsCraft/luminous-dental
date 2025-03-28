"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState({ name: false, email: false, date: false, time: false });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, date, time }),
    });
    const data = await response.json();
    if (data.success) {
      setMessage("Appointment booked successfully! We’ll see you soon.");
      setName("");
      setEmail("");
      setDate("");
      setTime("");
      setIsFocused({ name: false, email: false, date: false, time: false });
    } else {
      setMessage(data.message || "Failed to book appointment.");
    }
  };

  const handleFocus = (field: string) => {
    setIsFocused({ ...isFocused, [field]: true });
  };

  const handleBlur = (field: string, value: string) => {
    if (!value) {
      setIsFocused({ ...isFocused, [field]: false });
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:shadow-2xl animate-fade-in">
      <div className="flex justify-center mb-6">
        <svg
          className="w-12 h-12 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h2 className="text-2xl font-light text-gray-900 mb-6">Let’s Schedule Your Visit</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-800">Tell Us About You</h3>
          <div>
            <Label htmlFor="name" className="text-gray-800 font-medium block mb-2">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => handleFocus("name")}
              onBlur={(e) => handleBlur("name", e.target.value)}
              required
              className={`w-full border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50/50 hover:bg-gray-50 ${
                name && isFocused.name ? "border-green-500" : ""
              }`}
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-800 font-medium block mb-2">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => handleFocus("email")}
              onBlur={(e) => handleBlur("email", e.target.value)}
              required
              className={`w-full border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50/50 hover:bg-gray-50 ${
                email && isFocused.email ? "border-green-500" : ""
              }`}
            />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-800">Choose Your Time</h3>
          <div>
            <Label htmlFor="date" className="text-gray-800 font-medium block mb-2">
              Date
            </Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              onFocus={() => handleFocus("date")}
              onBlur={(e) => handleBlur("date", e.target.value)}
              required
              className={`w-full border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50/50 hover:bg-gray-50 ${
                date && isFocused.date ? "border-green-500" : ""
              }`}
            />
          </div>
          <div>
            <Label htmlFor="time" className="text-gray-800 font-medium block mb-2">
              Time
            </Label>
            <Input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              onFocus={() => handleFocus("time")}
              onBlur={(e) => handleBlur("time", e.target.value)}
              required
              className={`w-full border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50/50 hover:bg-gray-50 ${
                time && isFocused.time ? "border-green-500" : ""
              }`}
            />
          </div>
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3 font-medium transition-all duration-300 hover:shadow-lg animate-fade-in"
        >
          Schedule My Appointment
        </Button>
        {message && (
          <p
            className={`text-center mt-4 ${
              message.includes("successfully") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
