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
import Image from "next/image";
import ThemeToggle from "./ThemeToggleButton";
import { linkList } from "./sub_sections/navbar/linkListData";
import NavLink from "./sub_sections/navbar/NavLink";

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
      className={` text-white
        bg-nav_footer
        fixed top-0 left-0 w-full shadow-2xl z-50
        transition-transform duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <nav className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center min-h-[64px]">
        {/* Fixed container for logo with explicit dimensions */}
        <div className="flex-shrink-0 w-[150px] h-[60px] md:w-[180px] md:h-[80px] relative">
          <Image
            src="/company_transparent_logo.png"
            fill
            alt="Company's Logo"
            className="object-cover"
            priority
            sizes="120"
          />
        </div>

        <ul className="hidden lg:flex space-x-12 items-center justify-center">
          {linkList.map((link, index) => (
            <NavLink key={index} title={link.title} pageLink={link.pageLink} />
          ))}
        </ul>

        <div className=" flex justify-center items-center gap-4 md:gap-6">
          <ThemeToggle />

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger className="flex-shrink-0">
                <RiMenu3Fill className="lg:hidden block w-7 h-7 md:w-10 md:h-10" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Navigation Menu</SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>

                <ul className="flex flex-col p-4 space-y-4 mt-4">
                  {linkList.map((link, index) => (
                    <NavLink
                      key={index}
                      title={link.title}
                      pageLink={link.pageLink}
                    />
                  ))}
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
