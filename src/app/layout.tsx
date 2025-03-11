// app/layout.tsx
import '@/app/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/PageHeader';
import { ThemeProvider } from 'next-themes';
import { Suspense } from 'react';
import { PageHeaderProvider } from '@/context/PageHeaderContext';

export const metadata = {
  title: "Luminous Dental Care",
  description: "Your trusted dental clinic for high-quality care.",
  openGraph: {
    title: "Luminous Dental Care",
    description: "Your trusted dental clinic for high-quality care.",
    images: ["/images/og-image.jpg"],
    url: "https://yourdomain.com",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Luminous Dental Care - Your trusted dental clinic for high-quality care." />
      <meta property="og:title" content="Luminous Dental Care" />
      <meta property="og:description" content="Your trusted dental clinic for high-quality care." />
      <meta property="og:image" content="/images/og-image.jpg" />
      <meta property="og:url" content="" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
      <link rel="preload" href="/images/logo.svg" as="image" type="image/svg+xml" />
      <title>Luminous Dental Care</title>
    </head>
    <body className="bg-background text-foreground">
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <PageHeaderProvider>
        <Header />
        <PageHeader />
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <main className="min-h-[800px] mt-0 pb-20 md:pb-0" role="main">
            {children}
          </main>
        </Suspense>
        <Footer />
      </PageHeaderProvider>
    </ThemeProvider>
    </body>
    </html>
  );
}
