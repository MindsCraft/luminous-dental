// src/app/services/[serviceId]/page.tsx
import { notFound } from "next/navigation";
import { services } from "../services";
import ServiceDetailsWrapper from "../components/ServiceDetailsWrapper"; // New client wrapper
import type { Metadata } from "next";

interface PageHeaderData {
  title: string;
  breadcrumbs: { label: string; href: string; current?: boolean }[];
  backgroundImage?: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  imageUrl: string;
}

// Type for Next.js 15 async route parameters
type Props = {
  params: Promise<{ serviceId: string }>;
};

// Generate metadata for SEO and social sharing
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceId } = await params;
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return {
      title: "Service Not Found - Luminous Dental",
      description: "The requested dental service could not be found.",
    };
  }

  return {
    title: `${service.title} - Luminous Dental`,
    description: service.description.length > 160 ? `${service.description.slice(0, 157)}...` : service.description,
    openGraph: {
      title: `${service.title} - Luminous Dental`,
      description: service.description,
      images: [service.imageUrl],
      url: `https://yourdomain.com/services/${serviceId}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} - Luminous Dental`,
      description: service.description,
      images: [service.imageUrl],
    },
  };
}

// Generate static paths for pre-rendering
export async function generateStaticParams() {
  return services.map((service) => ({
    serviceId: service.id,
  }));
}

// Dynamic route handler (server component)
export default async function ServicePage({ params }: Props) {
  const { serviceId } = await params;
  const service = services.find((s) => s.id === serviceId);

  if (!service) return notFound();

  // Pre-set the PageHeader data on the server
  const initialPageHeaderData: PageHeaderData = {
    title: service.title,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Our Services", href: "/services" },
      { label: service.title, href: `/services/${service.id}`, current: true },
    ],
  };

  // Pass data to the client component wrapper
  return <ServiceDetailsWrapper service={service} initialPageHeaderData={initialPageHeaderData} />;
}
