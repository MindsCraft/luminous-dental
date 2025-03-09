// src/app/components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Home, ClipboardList, Calendar, Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Services", path: "/services", icon: ClipboardList },
    { name: "Booking", path: "/booking", icon: Calendar },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  return (
    <>
      {/* Desktop Header (Top Fixed) */}
      <header className="hidden md:flex fixed top-0 left-0 z-50 w-full h-20 bg-white dark:bg-gray-900 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 flex items-center justify-between h-full">
          <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-200">
            <Image
              src="/images/logo.svg"
              alt="Luminous Dental Care Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="flex gap-2">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.path}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.path}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "flex items-center gap-2 text-gray-600 dark:text-gray-300 font-semibold",
                        pathname === item.path
                          ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                      )}
                    >
                      <item.icon size={20} />
                      <span>{item.name}</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button
            variant="default"
            size="lg"
            asChild
            className="flex items-center gap-2 bg-primary text-white hover:bg-primary/90 dark:shadow-[0_0_10px_rgba(0,209,255,0.5)]"
          >
            <Link href="/booking">
              <span>Appointment</span>
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </header>

      {/* Mobile Header (Minimal Tab Bar, No 'More') */}
      <header
        className={cn(
          "md:hidden fixed bottom-0 left-0 z-50 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md border-t border-gray-200/50 dark:border-gray-700/50 py-2 px-4",
          "pb-[env(safe-area-inset-bottom)] transition-all duration-200"
        )}
      >
        <nav className="flex justify-around items-center max-w-screen-sm mx-auto">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "flex flex-col items-center justify-center w-16 h-14 text-gray-600 dark:text-gray-400 transition-all duration-150",
                pathname === item.path
                  ? "text-gray-900 dark:text-white"
                  : "hover:text-gray-900 dark:hover:text-white active:scale-95"
              )}
            >
              <item.icon size={20} fill={pathname === item.path ? "currentColor" : "none"} />
              <span className="text-xs font-medium mt-1">{item.name}</span>
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Header;
