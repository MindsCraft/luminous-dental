"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook to access the current pathname
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger icon for mobile
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from '@/components/ui/navigation-menu';  // Import NavigationMenu components


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current page path

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Function to check if the current path matches the link path
  const isActive = (path: string) => pathname === path ? "text-blue-600" : "text-gray-900";

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-60 backdrop-blur-md shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition">
          Luminous Dental Care
        </Link>

        {/* Hamburger Menu (Mobile view) */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="text-2xl text-gray-900" />
            ) : (
              <FaBars className="text-2xl text-gray-900" />
            )}
          </button>
        </div>

        {/* Desktop Navigation Menu (Using ShadCN UI NavigationMenu) */}
        <nav className="hidden lg:flex lg:space-x-6 space-x-4 items-center">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              <NavigationMenuItem>
                <NavigationMenuLink className={`text-lg ${isActive("/")} hover:text-blue-600 transition`}>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={`text-lg ${isActive("/booking")} hover:text-blue-600 transition`}>
                  <Link href="/booking">Book Appointment</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={`text-lg ${isActive("/contact")} hover:text-blue-600 transition`}>
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={`text-lg ${isActive("/doctors")} hover:text-blue-600 transition`}>
                  <Link href="/doctors">Doctors</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden fixed inset-0 bg-white z-50 p-6 transition-all duration-300 transform ease-in-out`}
      >
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Luminous Dental Care
          </Link>
          <button onClick={toggleMenu}>
            <FaTimes className="text-2xl text-gray-900" />
          </button>
        </div>

        {/* Mobile Menu Items (Using ShadCN UI NavigationMenu) */}
        <div className="space-y-6 flex flex-wrap direction-alternate-reverse">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className={`text-3xl font-semibold block ${isActive("/")} text-gray-900 hover:text-blue-600 transition`}>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={`text-3xl font-semibold block ${isActive("/booking")} text-gray-900 hover:text-blue-600 transition`}>
                  <Link href="/booking">Book Appointment</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={`text-3xl font-semibold block ${isActive("/contact")} text-gray-900 hover:text-blue-600 transition`}>
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={`text-3xl font-semibold block ${isActive("/doctors")} text-gray-900 hover:text-blue-600 transition`}>
                  <Link href="/doctors">Doctors</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Background Overlay when the menu is open */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed inset-0 bg-black bg-opacity-40 z-40 transition-all duration-300`}
        style={{
          pointerEvents: "auto", // Ensure that background overlay is interactive
        }}
      />
    </header>
  );
};

export default Header;
