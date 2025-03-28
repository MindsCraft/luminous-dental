"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

export default function ManagementLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = async () => {
    if (confirm("Are you sure you want to logout?")) {
      await signOut({ callbackUrl: "/login" }); // Sign out and redirect to /login
    }
  };

  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-aws-darkModeBg text-aws-darkModeText" : "bg-aws-lightGray text-aws-navy"} font-sans`}>
      <header className={`shadow-md ${isDarkMode ? "bg-aws-darkModeBg" : "bg-aws-navy"} fixed top-0 left-0 w-full z-20`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSidebar}
              className="md:hidden text-aws-orange focus:outline-none"
              aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
            >
              {isSidebarOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            <Link href="/management/dashboard">
              <h1 className={`text-2xl font-light ${isDarkMode ? "text-aws-darkModeText" : "text-aws-white"} md:text-3xl transition-colors duration-200`}>
                Luminous Dental Admin
              </h1>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="px-4 py-1 rounded-full text-sm font-medium bg-aws-orange text-aws-navy hover:bg-orange-600 hover:text-aws-white transition-all duration-200"
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <button
              onClick={handleLogout}
              className="text-aws-orange hover:underline hover:text-orange-500 font-medium transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row pt-16">
        <aside
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block w-full md:w-64 ${isDarkMode ? "bg-aws-darkModeBg" : "bg-aws-navy"} min-h-screen md:fixed md:top-16 md:left-0 shadow-inner z-10 transition-all duration-300`}
        >
          <nav className="space-y-2 p-4">
            <Link
              href="/management/dashboard"
              className={`block px-4 py-2 rounded-lg ${
                isActive("/management/dashboard")
                  ? isDarkMode
                    ? "bg-gray-700 text-aws-darkModeText"
                    : "bg-aws-darkGray text-aws-white"
                  : isDarkMode
                    ? "text-aws-darkModeText hover:bg-gray-700"
                    : "text-aws-white hover:bg-aws-darkGray"
              } transition-colors duration-200`}
              onClick={() => setIsSidebarOpen(false)}
              aria-current={isActive("/management/dashboard") ? "page" : undefined}
            >
              Dashboard
            </Link>
            <Link
              href="/management/clients"
              className={`block px-4 py-2 rounded-lg ${
                isActive("/management/clients")
                  ? isDarkMode
                    ? "bg-gray-700 text-aws-darkModeText"
                    : "bg-aws-darkGray text-aws-white"
                  : isDarkMode
                    ? "text-aws-darkModeText hover:bg-gray-700"
                    : "text-aws-white hover:bg-aws-darkGray"
              } transition-colors duration-200`}
              onClick={() => setIsSidebarOpen(false)}
              aria-current={isActive("/management/clients") ? "page" : undefined}
            >
              Clients
            </Link>
            <Link
              href="/management/schedule"
              className={`block px-4 py-2 rounded-lg ${
                isActive("/management/schedule")
                  ? isDarkMode
                    ? "bg-gray-700 text-aws-darkModeText"
                    : "bg-aws-darkGray text-aws-white"
                  : isDarkMode
                    ? "text-aws-darkModeText hover:bg-gray-700"
                    : "text-aws-white hover:bg-aws-darkGray"
              } transition-colors duration-200`}
              onClick={() => setIsSidebarOpen(false)}
              aria-current={isActive("/management/schedule") ? "page" : undefined}
            >
              Schedule
            </Link>
            <Link
              href="/management/staff"
              className={`block px-4 py-2 rounded-lg ${
                isActive("/management/staff")
                  ? isDarkMode
                    ? "bg-gray-700 text-aws-darkModeText"
                    : "bg-aws-darkGray text-aws-white"
                  : isDarkMode
                    ? "text-aws-darkModeText hover:bg-gray-700"
                    : "text-aws-white hover:bg-aws-darkGray"
              } transition-colors duration-200`}
              onClick={() => setIsSidebarOpen(false)}
              aria-current={isActive("/management/staff") ? "page" : undefined}
            >
              Staff
            </Link>
          </nav>
        </aside>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-0 md:hidden"
            onClick={toggleSidebar}
            aria-hidden="true"
          />
        )}

        <main className="flex-1 p-6 md:ml-64">
          {children}
        </main>
      </div>
    </div>
  );
}
