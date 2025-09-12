"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Properties Data
const topProperties = [
  { id: 1, image: "/images/Top-1.png" },
  { id: 2, image: "/images/Top-2.png" },
  { id: 3, image: "/images/Top-3.png" },
  { id: 4, image: "/images/Top-4.png" },
  { id: 5, image: "/images/Top-5.png" },
  { id: 6, image: "/images/Top-6.png" },
];

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Check screen size on mount and resize
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // ✅ Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % topProperties.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Handlers
  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? topProperties.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % topProperties.length);
  };

  return (
    <main className="w-full flex items-center mx-auto py-8">
      <div className="max-w-[1920px] w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40">
        {/* ✅ Top Properties Section */}
        <section className="w-full max-w-[1520px]">
          {/* Heading + Arrows */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 md:mb-10 lg:mb-12 gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] w-full sm:text-left text-[#3E362E] font-bold">
              Top Properties
            </h2>
            <div className="flex justify-center sm:justify-end gap-3 sm:gap-4">
              <button
                onClick={handlePrev}
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white shadow-md hover:bg-gray-100 transition"
                aria-label="Previous property"
              >
                <ChevronLeft className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white shadow-md hover:bg-gray-100 transition"
                aria-label="Next property"
              >
                <ChevronRight className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>

          {/* ✅ Mobile View → Slide Animation (unchanged as requested) */}
          <div className="md:hidden relative overflow-hidden w-full">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {topProperties.map((p) => (
                <div key={p.id} className="w-full flex-shrink-0 px-2">
                  <div className="relative w-full h-[320px] xs:h-[350px]">
                    <Image
                      src={p.image}
                      alt={`Property ${p.id}`}
                      fill
                      className="object-cover rounded-2xl"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Tablet & Desktop → Expand/Resize Animation */}
          <div className="hidden md:flex gap-4 lg:gap-5 xl:gap-6 2xl:gap-5 justify-center">
            {topProperties.map((p, index) => (
              <div
                key={p.id}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer rounded-2xl overflow-hidden relative transition-all duration-700 ease-in-out flex-shrink-0
                  ${
                    activeIndex === index
                      ? "w-[30%] md:w-[35%] lg:w-[40%] xl:w-[35%] 2xl:w-[410px]"
                      : "w-[15%] md:w-[12%] lg:w-[10%] xl:w-[12%] 2xl:w-[192px]"
                  }`}
              >
                <div className="relative w-full h-[300px] md:h-[350px] lg:h-[450px] xl:h-[550px] 2xl:h-[615px]">
                  <Image
                    src={p.image}
                    alt={`Property ${index + 1}`}
                    fill
                    className={`object-cover rounded-2xl transition-transform duration-700 ease-in-out ${
                      activeIndex === index ? "scale-105" : "scale-95 opacity-80"
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}