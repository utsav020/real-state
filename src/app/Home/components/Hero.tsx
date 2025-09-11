"use client";

import { Search } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[900px] xl:min-h-[938px] w-full">
      {/* ✅ Background Image */}
      <Image
        src="/images/hero-bg.png"
        alt="Luxury Villa"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* ✅ Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

      {/* ✅ Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end px-4 pb-8 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-20">
        {/* ✅ Search Bar */}
        <div className="w-full max-w-[1193px] bg-white/20 backdrop-blur-md rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full">
            {/* Location Input */}
            <div className="flex-1 bg-white border border-white/60 px-4 py-2 rounded-md md:rounded-lg">
              <input
                type="text"
                placeholder="Location"
                className="h-[50px] w-full focus:outline-none text-sm sm:text-base placeholder-gray-500"
              />
            </div>

            {/* Property Type Input */}
            <div className="flex-1 md:flex bg-white border border-white/60 px-4 py-2 rounded-md md:rounded-lg md:w-[180px] lg:w-[200px] xl:w-[150px]">
              <input
                type="text"
                placeholder="Property Type"
                className="h-[50px] w-full focus:outline-none text-sm sm:text-base placeholder-gray-500"
              />
            </div>

            {/* Budget Input */}
            <div className="flex-1 md:flex bg-white border border-white/60 px-4 py-2 rounded-md md:rounded-lg md:w-[150px] lg:w-[180px]">
              <input
                type="text"
                placeholder="Budget"
                className="h-[50px] w-full focus:outline-none text-sm sm:text-base xl:w-[150px] placeholder-gray-500"
              />
            </div>

            {/* Search Button */}
            <div className="flex-1 md:flex items-center bg-[#3E362E] rounded-md md:rounded-lg hover:bg-[#2E2820] transition-colors duration-300">
              <button className="flex items-center justify-center gap-2 sm:gap-3 w-full h-[50px] text-white font-semibold px-4 md:px-6">
                <Search className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="text-sm sm:text-base md:text-lg">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}