// src/app/services/components/ServiceDetailsWrapper.tsx
"use client";

import ServiceDetails from "./ServiceDetails";
import PageHeader from "@/components/PageHeader";

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface HeaderData {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  // Removed backgroundImage as per request
}

interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  imageUrl: string;
}

export default function ServiceDetailsWrapper({
                                                service,
                                                headerData,
                                              }: {
  service: Service;
  headerData: HeaderData;
}) {
  return (
    <>
      <PageHeader {...headerData} />
      <ServiceDetails service={service} />
    </>
  );
}
