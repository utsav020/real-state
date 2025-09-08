"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Developer info (for left side only)
const developers = [
  {
    id: 1,
    name: "Architectural Builder",
    logo: "/images/Architectural Builder.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Fermentum non enim mi sapien. Tristique porta nibh nibh amet id. Malesuada sed suspendisse dapibus nam sed scelerisque. Lorem ipsum dolor sit amet consectetur. Fermentum non enim mi sapien. Tristique porta nibh nibh amet id.",
  },
  {
    id: 2,
    name: "Luxury Builder",
    logo: "/images/Luxury Builder.png",
    description:
      "Luxury Builder delivers premium living spaces with world-class design. Lorem ipsum dolor sit amet consectetur. Fermentum non enim mi sapien. Tristique porta nibh nibh amet id.",
  },
  {
    id: 3,
    name: "Kich Builder",
    logo: "/images/kich Builder.png",
    description:
      "Kich Builder combines innovative architecture and functionality. Lorem ipsum dolor sit amet consectetur. Fermentum non enim mi sapien. Tristique porta nibh nibh amet id.",
  },
  {
    id: 4,
    name: "Construction Builder",
    logo: "/images/Construction Builder.png",
    description:
      "Construction Builder specializes in residential and commercial projects. Lorem ipsum dolor sit amet consectetur. Fermentum non enim mi sapien. Tristique porta nibh nibh amet id.",
  },
];

// ✅ Images (auto slider on right side)
const developerImages = [
  { id: 1, image: "/images/Dev-1.png" },
  { id: 2, image: "/images/Dev-2.png" },
  { id: 3, image: "/images/Dev-3.jpg" },
  { id: 4, image: "/images/Dev2.png" },
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
    setInfoIndex((prev) =>
      prev === 0 ? developers.length - 1 : prev - 1
    );
  };

  const nextInfo = () => {
    setInfoIndex((prev) =>
      prev === developers.length - 1 ? 0 : prev + 1
    );
  };

  const developer = developers[infoIndex];

  return (
    <div className="min-h-screen max-w-[1920px]">
      <div className="bg-[#3a3531] 2xl:pl-[200px] h-[784px] rounded-xl w-full max-w-[1306px] shadow-xl p-8 md:p-12 2xl:p-0 2xl:pt-[20px]">
        <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10"></div>
        <img 
          src="/images/bg design.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
        {/* Title */}
        <h2 className="text-3xl md:text-[64px] font-bold text-white mb-10">
          Top Developers in Ahmedabad
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Section (manual navigation only) */}
          <div className="space-y-5">
            {/* Logo */}
            <div className="flex rounded-lg">
              <Image
                src={developer.logo}
                alt={`${developer.name} Logo`}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

            {/* Developer Name */}
            <h3 className="text-xl font-semibold text-white">
              {developer.name}
            </h3>

            {/* Description */}
            <p className="text-[#BEBEBE] 2xl:w-[620px] leading-relaxed text-sm md:text-base">
              {developer.description}
            </p>

            {/* Button */}
            <button className="px-6 py-2 bg-white text-[#3a3531] rounded-lg font-medium hover:bg-gray-200 transition">
              View Properties
            </button>

            {/* Navigation Arrows */}
            <div className="flex space-x-3 pt-4">
              <button
                onClick={prevInfo}
                className="p-3 w-[50.41px] h-[50.41px] rounded-[12px] border border-gray-400 text-white hover:bg-gray-700 transition"
              >
                <ChevronLeft className="w-5 h-5 text-center" />
              </button>
              <button
                onClick={nextInfo}
                className="p-3 w-[50.41px] h-[50.41px] rounded-[12px] border border-gray-400 text-white hover:bg-gray-700 transition"
              >
                <ChevronRight className="w-5 h-5 text-center" />
              </button>
            </div>
          </div>

          {/* Right Section - Auto Slider */}
          <div className="relative w-[800px] h-[500px] 2xl:ml-[100px] overflow-hidden rounded-lg shadow-lg">
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
    </div>
  );
}
