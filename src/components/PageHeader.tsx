// src/components/PageHeader.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePageHeader } from "@/context/PageHeaderContext";

const PageHeader: React.FC = () => {
  const { pageHeaderData } = usePageHeader();

  // Don't render if no data (e.g., homepage)
  if (!pageHeaderData) return null;

  return (
    <section
      className="relative w-full py-8 bg-white bg-cover bg-center text-gray-800 border-b border-gray-200 overflow-hidden mt-20"
      aria-label={`${pageHeaderData.title} Page Header`}
    >
      {/* Subtle Gradient Overlay for Elegance */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/80"></div>

      {/* Content */}
      <div className="relative container mx-auto px-2 sm:px-4 md:px-6 h-full flex flex-col justify-center items-start gap-2">
        {/* Breadcrumbs with Elegant Styling */}
        <nav className="flex space-x-1 text-xs sm:text-sm font-medium" aria-label="Breadcrumb">
          {pageHeaderData.breadcrumbs && pageHeaderData.breadcrumbs.length > 0 ? (
            pageHeaderData.breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="text-gray-400 mx-1">/</span>}
                <Link
                  href={crumb.href}
                  className={`px-1 sm:px-2 py-1 rounded hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200 ease-in-out ${
                    crumb.current ? "bg-gray-100 text-gray-900" : "text-gray-600"
                  }`}
                  aria-current={crumb.current ? "page" : undefined}
                >
                  {crumb.label}
                </Link>
              </React.Fragment>
            ))
          ) : (
            <span className="text-gray-600">No breadcrumbs available</span>
          )}
        </nav>

        {/* Title with Lighter Font */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-wide text-gray-900 animate-fade-in">
          {pageHeaderData.title}
        </h1>
      </div>
    </section>
  );
};

// Animation Keyframes
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 0.5s ease-out;
  }
`;

const styleSheet = new CSSStyleSheet();
styleSheet.replaceSync(styles);
document.adoptedStyleSheets = [styleSheet];

export default PageHeader;
