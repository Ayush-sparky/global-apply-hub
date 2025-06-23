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
        fixed bg-[#0f172a] top-0 left-0 w-full shadow-2xl z-50
        transition-transform duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            TaskFlow Pro
          </span>
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
          <SheetTrigger>
            <RiMenu3Fill className="lg:hidden block w-6 h-6" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Navigation Menu</SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>

            {/* Move the nav list outside SheetDescription */}
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
