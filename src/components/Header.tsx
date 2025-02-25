"use client";

import { useState, useEffect } from "react";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return <div className="h-16 bg-white/70 dark:bg-gray-900/70"></div>;

  return (
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 transition-colors duration-300">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo Linked to Home */}
            <Link href="/" className="text-2xl font-extrabold text-primary tracking-wide">
              Luminous Dental Care
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/booking">Book Appointment</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <NavLink href="/doctors">Doctors</NavLink>
              <ThemeSwitcher />
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen((prev) => !prev)}
                  aria-label="Toggle Menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md transition-all duration-300">
              <div className="container max-w-screen-xl mx-auto flex flex-col items-center space-y-4 py-6">
                <NavLink href="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                <NavLink href="/booking" onClick={() => setIsOpen(false)}>Book Appointment</NavLink>
                <NavLink href="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
                <NavLink href="/doctors" onClick={() => setIsOpen(false)}>Doctors</NavLink>
                <ThemeSwitcher />
              </div>
            </div>
        )}
      </header>
  );
};

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
    <Link href={href} onClick={onClick} className="text-gray-700 dark:text-gray-300 hover:text-primary transition text-lg font-medium">
      {children}
    </Link>
);

export default Header;
