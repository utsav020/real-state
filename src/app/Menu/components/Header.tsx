"use client";

import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed h-[70px] top-0 left-0 right-0 z-50 w-full bg-transparent shadow-md backdrop-blur-md">
      <div className="max-w-[1520px] w-full h-full mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* ✅ Logo */}
        <Link href={"/"}>
          <h1 className="text-lg sm:text-xl lg:text-3xl font-bold text-[#3E362E]">
            Real Estate
          </h1>
        </Link>

        {/* ✅ Profile + Menu */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Profile */}
          <Link href={"/Dashboard"}>
            <Image
              src="/images/Profile.png"
              alt="Profile"
              width={40}
              height={40}
              className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain"
            />
          </Link>

          {/* Hamburger Menu */}
          <button
            onClick={onMenuClick}
            className="text-2xl sm:text-3xl lg:text-4xl focus:outline-none text-[#3E362E]"
            aria-label="Menu"
          >
            &#9776;
          </button>
        </div>
      </div>
    </header>
  );
}
