// app/services/components/ServiceDetails.tsx
import Image from "next/image";

interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  imageUrl: string;
}

export default function ServiceDetails({ service }: { service: Service }) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <Image src={service.imageUrl} alt={service.title} width={800} height={450} className="w-full h-auto mb-4" />
      <p className="text-gray-700 mb-4">{service.description}</p>
      <p className="text-gray-700">{service.details}</p>
    </div>
  );
}
