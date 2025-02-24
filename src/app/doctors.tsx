// /src/app/doctors.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";

const DoctorsPage = () => {
  const doctors = [
    { name: "Dr. John Doe", specialty: "Orthodontist", experience: "10+ years" },
    { name: "Dr. Jane Smith", specialty: "General Dentist", experience: "5+ years" },
  ];

  return (
    <div>
      <Header />
      <div className="py-10 text-center">
        <h1 className="text-4xl font-bold mb-5">Our Doctors</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold">{doctor.name}</h2>
              <p className="text-lg">{doctor.specialty}</p>
              <p className="text-sm text-gray-600">{doctor.experience}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorsPage;
