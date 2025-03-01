// src/app/booking/page.tsx
import ServiceSelection from '@/components/ServiceSelection';

export default function BookingPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <ServiceSelection />
    </div>
  );
}
