export default function DashboardPage() {
  return (
    <div className="bg-aws-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-light text-aws-navy mb-4">Clinic Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-aws-lightGray rounded-lg">
          <h3 className="text-lg font-medium text-aws-darkGray">Today’s Appointments</h3>
          <p className="text-2xl text-aws-navy">5</p>
        </div>
        <div className="p-4 bg-aws-lightGray rounded-lg">
          <h3 className="text-lg font-medium text-aws-darkGray">New Clients</h3>
          <p className="text-2xl text-aws-navy">2</p>
        </div>
        <div className="p-4 bg-aws-lightGray rounded-lg">
          <h3 className="text-lg font-medium text-aws-darkGray">No-Shows</h3>
          <p className="text-2xl text-aws-navy">0</p>
        </div>
      </div>
    </div>
  );
}
