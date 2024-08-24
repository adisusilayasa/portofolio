"use client";
import Link from "next/link";
import AppSidebarDesktop from "./sidebar-desktop";
import { ThemeToggle } from "@/components/molecules/theme-toggle";
import { Button } from "@/components/atoms/button";
import { Menu, X } from "lucide-react";
import AppSidebarMobile from "./sidebar-mobile";
import { useState } from "react";

export default function AppSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav 
        className="md:h-full md:max-w-[65px] w-full flex md:flex-col items-center justify-between bg-background border-b md:border-b-0 border-r py-3 md:py-10 px-5 md:px-0 md:overflow-y-auto"
        style={{ backgroundColor: '#bd666c' }}
      >
        <div className="md:min-h-[100px]">
          <Link href="/">
            <h1 className="font-semibold select-none text-xl">La.</h1>
          </Link>
        </div>

        <AppSidebarDesktop />
      </nav>

      <AppSidebarMobile isOpen={isOpen} toggleNavbar={toggleNavbar} />
    </>
  );
}
