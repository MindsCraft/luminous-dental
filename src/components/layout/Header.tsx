// src/app/components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@radix-ui/react-navigation-menu';
import { Menu, X, Home, ClipboardList, Calendar, Phone, ArrowRight } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname(); // Get current page path

  // Ensure this only runs on the client to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Disable scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const menuItems = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'Services', path: '/services', icon: <ClipboardList size={20} /> },
    { name: 'Booking', path: '/booking', icon: <Calendar size={20} /> },
    { name: 'Contact', path: '/contact', icon: <Phone size={20} /> },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 left-0 z-50 h-[80px]">
      <div className="container mx-auto flex justify-between items-center h-full">

        {/* Logo with Fixed Size */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.svg" alt="Luminous Dental Care Logo" width={40} height={40} />
        </Link>

        {/* Desktop Navigation using Radix UI */}
        {isClient && (
          <NavigationMenu className="hidden md:flex space-x-4 text-gray-500">
            <NavigationMenuList className="flex space-x-3">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.path}>
                  <Link
                    href={item.path}
                    className={`relative py-2 px-4 flex items-center space-x-2 transition-all duration-200 font-semibold rounded-sm ${
                      pathname === item.path
                        ? 'text-gray-900 bg-gray-100'
                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100 '
                    }`}
                  >
                    {item.icon}
                    <span className="tracking-wide">{item.name}</span>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        )}

        {/* CTA Button (Desktop) */}
        <Button variant="default" asChild className="hidden md:flex">
            <Link href="/booking">
              <span>Book Appointment</span>
              <ArrowRight size={18} />
            </Link>
          </Button>


          {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 text-xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="transition-transform duration-300 ease-out" /> : <Menu className="transition-transform duration-300 ease-out" />}
        </button>
      </div>

      {/* Fullscreen Mobile Menu - Redesigned Like Native Mobile Nav */}
      {isClient && (
        <div
          className={`fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-gray-50 border-t border-gray-50 shadow-md md:hidden flex flex-col items-start justify-center px-8 space-y-2 text-xl transition-all duration-500 ease-in-out transform ${
            menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          } z-40 shadow-lg`}
        >
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`w-full px-6 py-3 flex items-center space-x-3 text-gray-700 text-lg font-semibold border-b border-gray-100 transition-all duration-300 ${
                pathname === item.path ? 'bg-gray-100 text-gray-900 border-b border-gray-200' : 'hover:bg-gray-100'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.icon}
              <span className="tracking-wide">{item.name}</span>
            </Link>
          ))}
          <Button asChild className="flex w-full text-center items-center space-x-2 mt-6 p-3 text-lg py-6" variant="default" size="lg">
            <Link href="/booking">
              <span>Book Appointment</span>
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
