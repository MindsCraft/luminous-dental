import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
    title: "Luminous Dental Care | Your Trusted Dental Experts",
    description: "Providing top-tier dental care with expert professionals.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="bg-gray-50 text-gray-900">
        <ThemeProvider>
            <main className="min-h-screen">{children}</main>
        </ThemeProvider>
        </body>
        </html>
    );
}
