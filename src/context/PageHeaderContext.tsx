// src/context/PageHeaderContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";

interface PageHeaderData {
  title: string;
  breadcrumbs: { label: string; href: string; current?: boolean }[];
  backgroundImage?: string;
}

interface PageHeaderContextType {
  pageHeaderData: PageHeaderData | null;
  setPageHeaderData: (data: PageHeaderData | null) => void;
}

const PageHeaderContext = createContext<PageHeaderContextType | undefined>(undefined);

export const PageHeaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const [pageHeaderData, setPageHeaderData] = useState<PageHeaderData | null>(null);

  // Default data based on pathname (fallback if not overridden)
  React.useEffect(() => {
    // Skip rendering PageHeader on homepage
    if (pathname === "/") {
      setPageHeaderData(null);
      return;
    }

    // Set default data if not overridden
    if (!pageHeaderData) {
      const defaultData = getDefaultPageHeaderData(pathname);
      setPageHeaderData(defaultData);
    }
  }, [pathname, pageHeaderData]);

  const getDefaultPageHeaderData = (path: string | null): PageHeaderData | null => {
    switch (path) {
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
      case "/booking":
        return {
          title: "Booking",
          breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Booking", href: "/booking", current: true },
          ],
        };
      default:
        return null; // Skip PageHeader for unknown routes
    }
  };

  return (
    <PageHeaderContext.Provider value={{ pageHeaderData, setPageHeaderData }}>
      {children}
    </PageHeaderContext.Provider>
  );
};

export const usePageHeader = () => {
  const context = useContext(PageHeaderContext);
  if (!context) {
    throw new Error("usePageHeader must be used within a PageHeaderProvider");
  }
  return context;
};
