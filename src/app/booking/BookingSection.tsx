// app/booking/BookingSection.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { services } from "../services/services";
import React from "react";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    slot: "",
    dentist: "",
    date: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Simulated available slots and dentists
  const availableSlots = [
    "10:00 AM",
    "11:00 AM",
    "2:00 PM",
    "3:00 PM",
  ];
  const dentists = [
    { id: "dr-sarah", name: "Dr. Sarah Johnson" },
    { id: "dr-michael", name: "Dr. Michael Lee" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSelectChange = (field: string) => (value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.service || !formData.slot || !formData.date) {
      setFormStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setFormStatus("success");
    setErrorMessage("");
    setIsConfirmed(true);
  };

  return (
    <div className="space-y-12">
      {/* Online Appointment Form */}
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto transform transition-all duration-300 hover:shadow-2xl animate-fade-in">
        <h2 className="text-2xl font-light text-gray-900 mb-6">Online Appointment Form</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-gray-800 font-medium block mb-2">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50/50 hover:bg-gray-50"
              required
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-800 font-medium block mb-2">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50/50 hover:bg-gray-50"
              required
            />
          </div>
          <div>
            <Label htmlFor="service" className="text-gray-800 font-medium block mb-2">
              Service
            </Label>
            <Select onValueChange={handleSelectChange("service")} value={formData.service}>
              <SelectTrigger className="w-full border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50/50 hover:bg-gray-50">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.id} value={service.id} className="hover:bg-gray-100">
                    {service.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3 font-medium transition-all duration-300 hover:shadow-lg animate-fade-in"
          >
            Next
          </Button>
        </form>
      </div>

      {/* Available Slots & Dentist Selection */}
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto transform transition-all duration-300 hover:shadow-2xl animate-fade-in">
        <h2 className="text-2xl font-light text-gray-900 mb-6">Available Slots & Dentist Selection</h2>
        <div className="space-y-6">
          <div>
            <Label htmlFor="date" className="text-gray-800 font-medium block mb-2">
              Preferred Date
            </Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50/50 hover:bg-gray-50"
              required
            />
          </div>
          <div>
            <Label htmlFor="slot" className="text-gray-800 font-medium block mb-2">
              Select a Slot
            </Label>
            <div className="grid grid-cols-2 gap-4">
              {availableSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => handleSelectChange("slot")(slot)}
                  className={`p-3 rounded-lg border-2 ${
                    formData.slot === slot
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                  } transition-all duration-200`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
          <div>
            <Label htmlFor="dentist" className="text-gray-800 font-medium block mb-2">
              Select a Dentist
            </Label>
            <Select onValueChange={handleSelectChange("dentist")} value={formData.dentist}>
              <SelectTrigger className="w-full border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50/50 hover:bg-gray-50">
                <SelectValue placeholder="Select a dentist" />
              </SelectTrigger>
              <SelectContent>
                {dentists.map((dentist) => (
                  <SelectItem key={dentist.id} value={dentist.id} className="hover:bg-gray-100">
                    {dentist.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Confirmation & Reminders */}
      {formStatus === "success" && (
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto transform transition-all duration-300 hover:shadow-2xl animate-fade-in">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Confirmation & Reminders</h2>
          <div className="space-y-6">
            <p className="text-gray-600">
              Your appointment is booked for {formData.date} at {formData.slot} with {formData.dentist}.
            </p>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Set Reminders</h3>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-600">Email</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-600">SMS</span>
                </label>
              </div>
            </div>
            <Button
              onClick={() => {
                setFormStatus("idle");
                setIsConfirmed(false);
                setFormData({ name: "", email: "", service: "", slot: "", dentist: "", date: "" });
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3 font-medium transition-all duration-300 hover:shadow-lg"
            >
              Back to Booking
            </Button>
          </div>
        </div>
      )}

      {formStatus === "error" && (
        <div className="p-4 bg-red-50 text-red-800 rounded-lg text-center animate-fade-in">
          {errorMessage}
        </div>
      )}
    </div>
  );
}
