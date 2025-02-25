"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        alert("Appointment Booked!");
        // You can add API call logic here
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-center">Book an Appointment</h2>

            <div>
                <label className="block text-lg font-medium mb-1">Full Name</label>
                <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                />
            </div>

            <div>
                <label className="block text-lg font-medium mb-1">Email Address</label>
                <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                />
            </div>

            <div>
                <label className="block text-lg font-medium mb-1">Phone Number</label>
                <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                />
            </div>

            <div>
                <label className="block text-lg font-medium mb-1">Preferred Date</label>
                <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label className="block text-lg font-medium mb-1">Preferred Time</label>
                <Input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                />
            </div>

            <Button type="submit" className="w-full bg-primary text-white">
                {submitted ? "Appointment Booked!" : "Book Appointment"}
            </Button>
        </form>
    );
};

export default BookingForm;
