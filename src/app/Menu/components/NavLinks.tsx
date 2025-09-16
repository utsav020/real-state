"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface NavLinksProps {
  onClose: () => void; // ✅ callback to close menu
}

export default function NavLinks({ onClose }: NavLinksProps) {
  const links = [
    { name: "HOME", path: "/Home" },
    { name: "Properties", path: "/Properties" },
    { name: "Builders", path: "/Devlopers" },
    { name: "About us", path: "/About" },
    { name: "Contact us", path: "/Contact" },
  ];

  return (
    <div className="flex justify-center md:justify-start h-full w-full px-4 sm:px-6 lg:px-10">
      <nav className="flex flex-col items-center md:items-start space-y-6 sm:space-y-8 font-medium text-[#AA8766]">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            onClick={onClose}
            className="group flex items-center gap-3 
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[64px] 
            transition-all duration-300 hover:text-[#EAE7DD] 
            transform hover:translate-x-2 hover:scale-105"
          >
            {/* Chevron Icon */}
            <span
              className="hidden sm:inline opacity-0 -translate-x-2 
              transition-all duration-300 
              group-hover:opacity-100 group-hover:translate-x-0"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14" />
            </span>

            {/* Link Name */}
            <span className="transition-all duration-300">{link.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
