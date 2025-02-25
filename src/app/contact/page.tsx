// /src/app/contact.tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";

export const metadata: Metadata = {
    title: "Contact Us | Luminous Dental Care",
    description: "Get in touch with our team for inquiries and appointments.",
};


const ContactPage = () => {
    return (
        <div>
            <Header />
            <div className="py-10 text-center">
                <h1 className="text-4xl font-bold mb-5">Contact Us</h1>
                <p>Reach out to us for any queries or to book an appointment.</p>
                <div className="max-w-screen-lg mx-auto">
                    <p className="text-xl mb-5">Location: House:3, Road:4, Block: C, Banasree, Rampura 1219 Dhaka, Bangladesh</p>
                    <div className="mb-5">
                        <p className="text-lg">Email: <a href="mailto:luminousdent21@gmail.com" className="text-blue-600">luminousdent21@gmail.com</a></p>
                        <p className="text-lg">Phone: <a href="tel:+880123456789" className="text-blue-600">+880 123 456 789</a></p>
                    </div>
                    <GoogleMap />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
