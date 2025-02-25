import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
    title: "Book an Appointment | Luminous Dental Care",
    description: "Schedule your dental appointment with ease.",
};

export default function BookingPage() {
    return (
        <div>
            <Header />
            <main className="max-w-screen-lg mx-auto p-6">
                <h1 className="text-3xl font-semibold text-center mb-8">Book an Appointment</h1>
                <BookingForm />
            </main>
            <Footer />
        </div>
    );
}
