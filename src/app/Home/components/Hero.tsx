"use client";

import { Search } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[900px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[900px] xl:min-h-[938px] w-full">
      {/* ✅ Background Image */}
      <Image
        src="/images/hero-bg.png"
        alt="Luxury Villa"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* ✅ Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

      {/* ✅ Content Overlay */}
      <div className="absolute inset-0 2xl:inset-16 flex flex-col items-center justify-end px-4 pb-8 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-20">
        {/* ✅ Search Bar */}
        <div className="w-full max-w-[1193px] bg-white/30 backdrop-blur-xs rounded-xl md:rounded-2xl shadow-sm p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full">
            {/* ✅ Dropdown: Buy / Rent */}
            <div className="flex-1 bg-white border border-white/60 px-4 py-2 rounded-md md:rounded-lg">
              <select
                className="h-[50px] w-full focus:outline-none text-sm sm:text-base text-gray-700"
                defaultValue="buy"
              >
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
                <option value="lease">Lease</option>
              </select>
            </div>

            {/* ✅ Dropdown: Property Type */}
            <div className="flex-1 bg-white border border-white/60 px-4 py-2 rounded-md md:rounded-lg md:w-[180px] lg:w-[200px] xl:w-[150px]">
              <select
                className="h-[50px] w-full focus:outline-none text-sm sm:text-base text-gray-700"
                defaultValue="apartments"
              >
                <option value="apartments">Apartments</option>
                <option value="villa">Villa</option>
                <option value="penthouse">Penthouse</option>
                <option value="studio">Studio</option>
              </select>
            </div>

            {/* ✅ Budget Input */}
            <div className="flex-1 md:flex bg-white border border-white/60 px-4 py-2 rounded-md md:rounded-lg md:w-[150px] lg:w-[180px]">
              <input
                type="text"
                placeholder="Budget"
                className="h-[50px] w-full focus:outline-none text-sm sm:text-base xl:w-[150px] placeholder-gray-500"
              />
            </div>

            {/* ✅ Search Button */}
            <div className="flex-1 md:flex items-center bg-[#3E362E] rounded-md md:rounded-lg hover:bg-[#2E2820] transition-colors duration-300">
              <button className="flex items-center justify-center gap-2 sm:gap-3 w-full h-[50px] text-white font-semibold px-4 md:px-6">
                <Search className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="text-sm sm:text-base md:text-lg">Search</span>
              </button>
            </div>

            {/* ✅ Dropdown: Advanced Search */}
            <div className="flex px-4 py-2 rounded-md md:rounded-lg md:w-[180px] lg:w-[220px] border-2 xl:w-[180px]">
              <select
                className="h-[50px] w-full focus:outline-none text-sm sm:text-base text-[#000000]"
                defaultValue="advanced"
              >
                <option value="advanced">Advanced Search</option>
                <option value="bedrooms">Bedrooms</option>
                <option value="bathrooms">Bathrooms</option>
                <option value="parking">Parking</option>
                <option value="year">Year Built</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
