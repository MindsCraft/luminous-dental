// app/booking/BookingForm.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { services } from "../services/services"; // Import services for dynamic dropdown

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.service || !formData.date) {
      setFormStatus("error");
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // Simulate form submission (replace with API call in production)
    setTimeout(() => {
      setFormStatus("success");
      setErrorMessage("");
      setFormData({ name: "", email: "", service: "", date: "" });
    }, 1000);
  };

  return (
    <>
      {formStatus === "success" && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg text-center">
          Appointment booked successfully! We’ll contact you soon to confirm.
        </div>
      )}

      {formStatus === "error" && (
        <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg text-center">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
        <div>
          <Label htmlFor="name" className="text-gray-700 font-medium">
            Full Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-gray-700 font-medium">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john.doe@example.com"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <Label htmlFor="service" className="text-gray-700 font-medium">
            Service
          </Label>
          <Select onValueChange={handleServiceChange} value={formData.service}>
            <SelectTrigger className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.id} value={service.id}>
                  {service.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="date" className="text-gray-700 font-medium">
            Preferred Date
          </Label>
          <Input
            id="date"
            type="date"
            value={formData.date}
            onChange={handleInputChange}
            className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 transition-colors duration-300"
        >
          Submit Appointment
        </Button>
      </form>
    </>
  );
}
