"use client";

import Image from "next/image";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import FiltersPanel from "./components/FiltersPanel";

interface Property {
  id: number;
  title: string;
  price: string;
  image: string;
}

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "House", "Apartment", "Villa", "Penthouse"];
  const sortOptions = [
    "Newest",
    "Oldest",
    "Price (Low → High)",
    "Price (High → Low)",
  ];
  const [sort, setSort] = useState("Newest");

  const [visibleButtons, setVisibleButtons] = useState<number[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // ✅ New state for filter panel

  useEffect(() => {
    if (window.innerWidth < 640) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const id = Number(entry.target.getAttribute("data-id"));
            if (entry.isIntersecting) {
              setVisibleButtons((prev) =>
                prev.includes(id) ? prev : [...prev, id]
              );
            }
          });
        },
        { threshold: 0.4 }
      );

      document.querySelectorAll(".property-card").forEach((el) => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    }
  }, []);

  const toggleButtons = (id: number) => {
    if (window.innerWidth < 640) {
      setVisibleButtons((prev) =>
        prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
      );
    }
  };

  return (
    <div className="bg-white max-w-[1920px] mx-auto flex flex-col mt-[70px] relative">
      {/* ✅ Main Layout */}
      <main className="flex-1 max-w-[1520px] mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 py-6">
        {/* Left Content */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Banner */}
          <div className="relative w-full h-40 lg:h-56 rounded-lg overflow-hidden shadow">
            <Image
              src="/images/banner.png"
              alt="Business Banner"
              fill
              className="object-cover"
            />
          </div>

          {/* Map Section */}
          <div className="relative w-full h-[382px] 2xl:h-[682px] rounded-lg overflow-hidden shadow">
            <Image
              src="/images/Map.png"
              alt="Map View"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-6">
          {/* ✅ Search + Filters Panel */}
          <div className="border border-[#E8E4E0] rounded-lg p-4 shadow-sm bg-white">
            <div className="flex sm:w-[447px] lg:w-[277px] xl:w-full items-center justify-between">
              {/* Search bar */}
              <div className="flex items-center gap-2 w-[230px] xl:w-[301px] 2xl:w-[391px] sm:w-[391px] lg:w-[215px] h-[42px] border border-[#A3A3A34D] rounded-lg px-3 py-2">
                <div>
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by property name... "
                  className="flex outline-none text-sm"
                />
              </div>
              <div className="border-[#A3A3A34D] border rounded-lg shadow-sm bg-white">
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <SlidersHorizontal className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="flex gap-2 mt-4 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 text-sm rounded-full ${
                    activeCategory === cat
                      ? "bg-[#3E362E] text-white"
                      : "bg-[#EEE5D9] text-black"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Property count + Sort */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-[#111827]">235</p>
                <p className="text-sm text-[#5C5C5C]">properties found</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-[#EEE5D9] rounded-lg w-[93px] h-[28px] px-3 py-1 text-sm focus:outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="border border-[#A3A3A34D] mt-[16px]"></div>

            {/* Filters */}
            <div className="mt-[12px]">
              <h3 className="text-lg text-[#3E362E] font-bold mb-3">Filters</h3>
              <div className="flex gap-4 scrollbar-hide overflow-x-auto pb-2">
                {[
                  { label: "Bathrooms", value: "2+" },
                  { label: "Bedrooms", value: "2+" },
                  { label: "Price Range", value: "$500,000" },
                  { label: "Property Type", value: "House" },
                  { label: "Area", value: "1200 sqft" },
                  { label: "Year Built", value: "2023" },
                ].map((filter, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-[122px] pr-[20px] border-[#A3A3A333] border-r h-[100px] flex flex-col items-center justify-between p-2 text-center"
                  >
                    <p className="text-sm text-gray-700">{filter.label}</p>
                    <button className="px-3 py-1 w-[80px] h-[36px] bg-[#EEE5D9] rounded-lg text-xs font-semibold hover:bg-[#e0d5c5]">
                      {filter.value}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ✅ Property Cards */}
          <div className="flex flex-col sm:w-[479px] lg:w-[310px] xl:w-full shadow-md pt-[20px] border border-[#A3A3A34D] rounded-2xl h-[582px] scrollbar-hide overflow-y-auto gap-4">
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                data-id={id}
                className="border-2 property-card group relative border-[#A3A3A34D] mb-[10px] rounded-lg lg:w-[280px] w-[280px] xl:w-[360px] 2xl:w-[447px] sm:w-[447px] mx-auto h-[1322px] shadow-md"
              >
                {/* Property Image */}
                <div
                  className="relative h-[220px] cursor-pointer"
                  onClick={() => toggleButtons(id)}
                >
                  <Image
                    src={`/images/Property-1.png`}
                    alt="Property"
                    fill
                    className="object-cover rounded-lg h-[220px]"
                  />
                </div>

                {/* ✅ Buttons */}
                <div
                  className={`
                    absolute bottom-0 left-0 w-full px-4 pb-3 flex gap-3 sm:gap-4 justify-center
                    transition-all duration-500
                    sm:translate-y-full sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100
                    ${
                      visibleButtons.includes(id)
                        ? "translate-y-0 opacity-100 animate-slideUp"
                        : "translate-y-full opacity-0"
                    }
                  `}
                >
                  <Link
                    className="flex-1 items-center justify-center flex cursor-pointer bg-[#2C2C2C] text-white font-semibold rounded-lg shadow-md hover:bg-black transition"
                    href={"/Properties-Data"}
                  >
                    <button>BOOK A VISIT</button>
                  </Link>
                  <button className="flex-1 bg-green-500 text-white font-semibold py-2 sm:py-3 rounded-lg shadow-md hover:bg-green-600 transition">
                    CALL
                  </button>
                </div>

                {/* Info Block */}
                <div className="p-4 h-[250px] sm:h-[190px] lg:h-[250px] xl:h-[210px]">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">$825,000</h3>
                    <div className="bg-[#DCFCE7] flex items-center justify-center rounded-[8px] w-[63px] h-[24px]">
                      <p className="w-[47px] text-xs text-[#166534]">
                        For Sale
                      </p>
                    </div>
                  </div>
                  <p className="text-base">Modern Downtown Apartment</p>
                  <div className="flex items-center gap-2 ">
                    <img src={"/images/Location-1.png"} />
                    <p>123 Park Avenue, New York</p>
                  </div>
                  <div className="flex flex-col lg:flex-col xl:flex-row sm:flex-row text-[#4B5563] xl:items-center lg:items-start sm:items-center gap-4">
                    <div className="flex items-center gap-2">
                      <img src={"/images/Bad-1.png"} />
                      <p>3 Beds</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={"/images/Bath.png"} />
                      <p>2 Baths</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={"/images/Sqft.png"} />
                      <p>2,100 sqft</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </main>

      {/* Overlay + Filter Panel */}
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsFilterOpen(false)}
          ></div>
          <FiltersPanel onClose={() => setIsFilterOpen(false)} />
        </>
      )}

      {/* ✅ Animation CSS */}
      <style jsx>{`
        @keyframes slideUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
