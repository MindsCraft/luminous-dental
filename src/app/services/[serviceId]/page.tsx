// src/app/services/[serviceId]/page.tsx
import { notFound } from "next/navigation";
import { services } from "../services";
import ServiceDetails from "../components/ServiceDetails";
import type { Metadata } from "next";

// ✅ Correct type for Next.js 15 async route parameters
type Props = {
  params: Promise<{ serviceId: string }>;
};

// ✅ Fix metadata function to correctly infer the params
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceId } = await params; // ✅ Await params before using
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.title} - Luminous Dental`,
    description: service.description,
  };
}

// ✅ Ensure params are properly awaited inside the component
export default async function ServicePage({ params }: Props) {
  const { serviceId } = await params; // ✅ Await params before using
  const service = services.find((s) => s.id === serviceId);

  if (!service) return notFound(); // Handle invalid service IDs

  return <ServiceDetails service={service} />;
}
