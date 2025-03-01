// app/services/[serviceId]/page.tsx
import { notFound } from "next/navigation";
import { services } from "../services";
import ServiceDetails from "../components/ServiceDetails";

export default function ServicePage({ params }: { params: { serviceId: string } }) {
  const service = services.find((s) => s.id === params.serviceId);

  if (!service) return notFound();

  return <ServiceDetails service={service} />;
}
