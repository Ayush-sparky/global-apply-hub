"use client";

import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiMenu3Fill } from "react-icons/ri";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`
        bg-indigo-700
        fixed top-0 left-0 w-full shadow-2xl z-50
        transition-transform duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center min-h-[64px]">
        {/* Fixed container for logo with explicit dimensions */}
        <div className="flex-shrink-0 w-[120px] h-[48px] relative">
          <Image
            src="/company_transparent_logo.png"
            fill
            alt="Company's Logo"
            className="object-cover"
            priority
            sizes="120px"
          />
        </div>

        <ul className="hidden lg:flex space-x-12 items-center justify-center">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="hover:text-blue-600 transition-colors"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Help
            </Link>
          </li>
        </ul>

        <Sheet>
          <SheetTrigger className="flex-shrink-0">
            <RiMenu3Fill className="lg:hidden block w-6 h-6" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Navigation Menu</SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>

            <ul className="flex flex-col p-4 space-y-4 mt-4">
              <li>
                <Link href="/" className="text-lg hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-lg hover:text-blue-600">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/" className="text-lg hover:text-blue-600">
                  Help
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default NavBar;
