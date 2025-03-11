// src/components/PageHeader.tsx
import Link from "next/link";
import React from 'react';

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs, backgroundImage }) => {
  // Don't render if title or breadcrumbs are missing
  if (!title || !breadcrumbs || breadcrumbs.length === 0) return null;

  return (
    <section
      className="relative w-full py-8 bg-white bg-cover bg-center text-gray-800 border-b border-gray-200 overflow-hidden md:mt-20"
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : { backgroundColor: "white" } // Fallback background color
      }
      aria-label={`${title} Page Header`}
    >
      {/* Subtle Gradient Overlay for Elegance */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/80"></div>

      {/* Content */}
      <div className="relative container mx-auto px-2 sm:px-4 md:px-6 h-full flex flex-col justify-center items-start gap-2">
        {/* Breadcrumbs with Elegant Styling */}
        <nav className="flex space-x-1 text-xs sm:text-sm font-medium" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, index) => (
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
          ))}
        </nav>

        {/* Title with Lighter Font */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-wide text-gray-900 animate-fade-in">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageHeader;
