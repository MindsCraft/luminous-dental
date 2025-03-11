// src/components/PageHeaderWrapper.tsx
"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import PageHeader from "@/components/PageHeader";

const PageHeaderWrapper: React.FC = () => {
  const [headerData, setHeaderData] = useState<{
    title: string;
    breadcrumbs: { label: string; href: string; current?: boolean }[];
    backgroundImage?: string;
  } | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    // Skip rendering on home page
    if (pathname === "/") {
      setHeaderData(null);
      return;
    }

    // Set header data based on route
    const getPageHeaderData = () => {
      switch (pathname) {
        case "/about":
          return {
            title: "About Us",
            breadcrumbs: [
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about", current: true },
            ],
            backgroundImage: "/images/about-header.jpg",
          };
        case "/services":
          return {
            title: "Our Services",
            breadcrumbs: [
              { label: "Home", href: "/" },
              { label: "Our Services", href: "/services", current: true },
            ],
          };
        case "/contact":
          return {
            title: "Contact Us",
            breadcrumbs: [
              { label: "Home", href: "/" },
              { label: "Contact Us", href: "/contact", current: true },
            ],
          };
        default:
          return {
            title: "Page Not Found",
            breadcrumbs: [{ label: "Home", href: "/", current: true }],
          };
      }
    };

    setHeaderData(getPageHeaderData());
  }, [pathname]);

  // Render nothing until client-side logic runs
  if (!headerData) return null;

  return (
    <div className="mt-20">
      <PageHeader
        title={headerData.title}
        breadcrumbs={headerData.breadcrumbs}
        backgroundImage={headerData.backgroundImage}
      />
    </div>
  );
};

export default PageHeaderWrapper;
