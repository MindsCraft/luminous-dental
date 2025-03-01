// components/DoctorTimeSlotPicker.tsx
const doctors = [
  { name: "Dr. Alice", specialty: "General Dentistry" },
  { name: "Dr. Bob", specialty: "Orthodontics" },
];

const TimeSlotPicker = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Choose a Doctor & Time Slot</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Select Doctor</h3>
            <div className="space-y-4 mt-4">
              {doctors.map((doctor) => (
                <div key={doctor.name} className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition">
                  <h4 className="text-lg font-semibold text-gray-800">{doctor.name}</h4>
                  <p className="text-gray-600">{doctor.specialty}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Select Time</h3>
            <div className="mt-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Available Slots</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeSlotPicker;
