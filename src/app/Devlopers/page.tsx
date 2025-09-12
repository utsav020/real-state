"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./components/card";

// ✅ Developer info (for left side only)
const developers = [
  {
    id: 1,
    name: "Architectural Builder",
    logo: "/images/Logo-1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Fermentum non enim mi sapien. Tristique porta nibh nibh amet id. Malesuada sed suspendisse dapibus nam sed scelerisque. Lorem ipsum dolor sit amet consectetur. Fermentum non enim mi sapien. Tristique porta nibh nibh amet id.",
  },
  {
    id: 2,
    name: "Luxury Builder",
    logo: "/images/Logo-2.png",
    description:
      "Luxury Builder delivers premium living spaces with world-class design. Lorem ipsum dolor sit amet consectetur. Fermentum non enim mi sapien. Tristique porta nibh nibh amet id.",
  },
  {
    id: 3,
    name: "Kich Builder",
    logo: "/images/Logo-3.png",
    description:
      "Kich Builder combines innovative architecture and functionality. Lorem ipsum dolor sit amet consectetur. Fermentum non enim mi sapien. Tristique porta nibh nibh amet id.",
  },
  {
    id: 4,
    name: "Construction Builder",
    logo: "/images/Logo-4.png",
    description:
      "Construction Builder specializes in residential and commercial projects. Lorem ipsum dolor sit amet consectetur. Fermentum non enim mi sapien. Tristique porta nibh nibh amet id.",
  },
];

// ✅ Images (auto slider on right side)
const developerImages = [
  { id: 1, image: "/images/Dev-1.png" },
  { id: 2, image: "/images/Dev-2.png" },
  { id: 3, image: "/images/Dev-3.jpg" },
  { id: 4, image: "/images/Dev-2.png" },
];

export default function DevelopersPage() {
  const [infoIndex, setInfoIndex] = useState(0); // left section (manual)
  const [imageIndex, setImageIndex] = useState(0); // right section (auto)

  // ✅ Auto slide for right section only
  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) =>
        prev === developerImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Navigation for left section
  const prevInfo = () => {
    setInfoIndex((prev) => (prev === 0 ? developers.length - 1 : prev - 1));
  };

  const nextInfo = () => {
    setInfoIndex((prev) => (prev === developers.length - 1 ? 0 : prev + 1));
  };

  const developer = developers[infoIndex];

  return (
    <div className="mt-[73px] mx-auto max-w-[1920px]">
      <div
        className="relative max-w-[1320px] h-[765px] 2xl:pl-[174px] rounded-r-xl shadow-xl p-6 md:p-10 lg:p-12 xl:p-16 2xl:p-0 2xl:pt-[30px]"
        style={{
          backgroundColor: "#3a3531", // ✅ dark solid base
          backgroundImage: "url('/images/bg design.png')", // ✅ overlay design
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay", // ✅ blend color + image
        }}
      >
        {/* Title */}
        <h2 className="text-xl mt-[10px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-white mb-6 md:mb-10 relative z-10">
          Top Developers in Ahmedabad
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
          {/* Left Section (manual navigation only) */}
          <div className="space-y-5 text-center md:text-left">
            {/* Logo */}
            <div className="flex justify-center md:justify-start">
              <Image
                src={developer.logo}
                alt={`${developer.name} Logo`}
                width={180}
                height={180}
                className="object-contain max-h-[120px] sm:max-h-[150px] md:max-h-[180px]"
              />
            </div>

            {/* Developer Name */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              {developer.name}
            </h3>

            {/* Description */}
            <p className="text-[#BEBEBE] leading-relaxed text-sm sm:text-base max-w-full md:max-w-[620px] mx-auto md:mx-0">
              {developer.description}
            </p>

            {/* Button */}
            <button className="px-5 sm:px-6 py-2 bg-white text-[#3a3531] rounded-lg font-medium hover:bg-gray-200 transition">
              View Properties
            </button>

            {/* Navigation Arrows */}
            <div className="flex justify-center md:justify-start space-x-3 pt-4">
              <button
                onClick={prevInfo}
                className="p-3 w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] rounded-[12px] border border-gray-400 text-white hover:bg-gray-700 transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextInfo}
                className="p-3 w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] rounded-[12px] border border-gray-400 text-white hover:bg-gray-700 transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Section - Auto Slider */}
          <div className="relative 2xl:ml-[100px] w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] lg:w-[800px] rounded-lg shadow-lg">
            {developerImages.map((dev, index) => (
              <Image
                key={dev.id}
                src={dev.image}
                alt={`Developer Project ${dev.id}`}
                fill
                className={`absolute top-0 left-0 w-full h-full object-cover rounded-lg transition-opacity duration-700 ${
                  index === imageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28">
        <Card />
      </div>
    </div>
  );
}
