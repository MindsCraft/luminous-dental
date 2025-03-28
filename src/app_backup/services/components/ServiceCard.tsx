// src/app/services/components/ServiceCard.tsx
import Link from "next/link";
import Image from "next/image";

interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  imageUrl: string;
}

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative w-full h-48">
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium text-gray-800 mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{service.description}</p>
        <Link
          href={`/services/${service.id}`}
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
