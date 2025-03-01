// app/services/components/ServiceCard.tsx
import Image from "next/image";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <Image src={service.imageUrl} alt={service.title} width={400} height={250} className="w-full h-auto" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
        <p className="text-gray-700 mb-4">{service.description}</p>
        <Link href={`/services/${service.id}`} className="text-blue-500 hover:underline">
          Read More
        </Link>
      </div>
    </div>
  );
}
