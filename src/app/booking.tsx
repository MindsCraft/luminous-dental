// /src/app/booking.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";

const BookingPage = () => {
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
};

export default BookingPage;
