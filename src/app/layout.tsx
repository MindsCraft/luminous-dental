// src/app/layout.tsx
import '@/app/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Luminous Dental Care - Your trusted dental clinic for high-quality care." />
      <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
      <title>Luminous Dental Care</title>
    </head>
    <body className="font-sans bg-gray-50">
    <Header />
    <main className="min-h-screen">{children}</main>
    <Footer />
    </body>
    </html>
  );
}
