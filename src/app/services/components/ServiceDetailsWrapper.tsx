// src/app/services/components/ServiceDetailsWrapper.tsx
"use client";

import ServiceDetails from "./ServiceDetails";

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

export default function ServiceDetailsWrapper({
                                                service,
                                                initialPageHeaderData,
                                              }: {
  service: Service;
  initialPageHeaderData: PageHeaderData;
}) {
  return <ServiceDetails service={service} initialPageHeaderData={initialPageHeaderData} />;
}
