// app/contact/ContactForm.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("error");
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setTimeout(() => {
      setFormStatus("success");
      setErrorMessage("");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Contact Form */}
      <div className="bg-white p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:shadow-2xl animate-fade-in">
        {formStatus === "success" && (
          <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-lg text-center animate-fade-in">
            Message sent successfully! We’ll get back to you soon.
          </div>
        )}

        {formStatus === "error" && (
          <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-lg text-center animate-fade-in">
            {errorMessage}
          </div>
        )}

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
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-gray-800 font-medium block mb-2">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="How can we assist you today?"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50/50 hover:bg-gray-50 min-h-[120px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3 font-medium transition-all duration-300 hover:shadow-lg animate-fade-in"
          >
            Send Message
          </Button>
        </form>
      </div>

      {/* Emergency Contact Info */}
      <div className="text-center">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Emergency Contact</h3>
        <p className="text-gray-600 text-sm">
          For urgent needs, reach us 24/7 at{" "}
          <a href="tel:+1234567891" className="text-blue-600 hover:underline">
            (123) 456-7891
          </a>
          .
        </p>
      </div>
    </div>
  );
}
