"use client";

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Suspense } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isManagementSection = pathname.startsWith('/management');

  return (
    <>
      {!isManagementSection && <Header />}
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
        <main className="min-h-[800px] mt-0 pb-20 md:pb-0" role="main">
          {children}
        </main>
      </Suspense>
      {!isManagementSection && <Footer />}
    </>
  );
}
