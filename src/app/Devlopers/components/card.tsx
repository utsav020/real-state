"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Project {
  image?: string;
  name: string;
  type: string;
  isMore?: boolean; // ✅ flag for "+X More" card
}

interface Developer {
  id: number;
  name: string;
  logo: string;
  image: string;
  description: string;
  projects: Project[];
}

// ✅ Developers Data with "+X More" logic baked in
const developers: Developer[] = [
  {
    id: 1,
    name: "Architectural Builder",
    logo: "/images/Logo-2.png",
    image: "/images/Img-1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Fermentum non enim mi sapien. Tristique porta nibh nibh amet id. Malesuada sed suspendisse dapibus nam sed scelerisque.Lorem ipsum dolor sit amet consectetur. Fermentum non enim mi sapien. Tristique porta nibh nibh amet id.",
    projects: [
      { image: "/images/3-BHK.png", name: "Builders", type: "3 BHK" },
      { image: "/images/3-BHK.png", name: "Builders", type: "3 BHK" },
      { name: "+4", type: "More", isMore: true },
    ],
  },
  {
    id: 2,
    name: "Architectural Builder",
    logo: "/images/Logo-3.png",
    image: "/images/Img-2.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Fermentum non enim mi sapien. Tristique porta nibh nibh amet id.",
    projects: [
      { image: "/images/3-BHK.png", name: "Builders", type: "3 BHK" },
      { name: "+4", type: "More", isMore: true },
    ],
  },
  {
    id: 3,
    name: "Architectural Builder",
    logo: "/images/Logo-4.png",
    image: "/images/Img-3.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Fermentum non enim mi sapien. Tristique porta nibh nibh amet id.",
    projects: [
      { image: "/images/3-BHK.png", name: "Builders", type: "3 BHK" },
      { name: "+2", type: "More", isMore: true },
    ],
  },
  {
    id: 4,
    name: "Architectural Builder",
    logo: "/images/Logo-2.png",
    image: "/images/Img-1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Fermentum non enim mi sapien. Tristique porta nibh nibh amet id.",
    projects: [
      { image: "/images/3-BHK.png", name: "Builders", type: "3 BHK" },
      { image: "/images/3-BHK.png", name: "Builders", type: "3 BHK" },
      { name: "+4", type: "More", isMore: true },
    ],
  },
  {
    id: 5,
    name: "Architectural Builder",
    logo: "/images/Logo-3.png",
    image: "/images/Img-2.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Fermentum non enim mi sapien. Tristique porta nibh nibh amet id.",
    projects: [
      { image: "/images/3-BHK.png", name: "Builders", type: "3 BHK" },
      { name: "+4", type: "More", isMore: true },
    ],
  },
  {
    id: 6,
    name: "Architectural Builder",
    logo: "/images/Logo-4.png",
    image: "/images/Img-3.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Fermentum non enim mi sapien. Tristique porta nibh nibh amet id.",
    projects: [
      { image: "/images/3-BHK.png", name: "Builders", type: "3 BHK" },
      { name: "+2", type: "More", isMore: true },
    ],
  },
];

export default function Card() {
  return (
    <div
      className="mx-auto w-full max-w-[1920px] bg-[#EAE7DD] px-4 sm:px-6 lg:px-8 py-10"
      style={{
        backgroundColor: "#EAE7DD",
        backgroundImage: "url('/images/BG-Design.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Title */}
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] text-[#3E362E] font-medium text-center">
        <p>1751 Developers in Ahmedabad</p>
      </div>

      {/* Grid */}
      <div className="max-w-[1520px] mt-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {developers.map((dev) => (
          <div
            key={dev.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition w-full"
          >
            {/* Top Section - Image with Logo */}
            <div className="relative w-full h-[220px] sm:h-[250px] lg:h-[275px]">
              <Image
                src={dev.image}
                alt={dev.name}
                fill
                className="object-cover rounded-t-2xl"
              />
              <div className="absolute top-2 left-2">
                <Image
                  src={dev.logo}
                  alt={`${dev.name} logo`}
                  width={80}
                  height={80}
                  className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {dev.name}
              </h2>
              <p className="text-sm h-[100px] text-gray-600 mb-4 line-clamp-4 sm:line-clamp-5">
                {dev.description}
              </p>

              <div className="border border-[#A3A3A3B2]"></div>

              {/* Projects Section */}
              <div>
                <h3 className="text-sm sm:text-md mt-4 font-semibold text-gray-700 mb-2">
                  Projects
                </h3>
                <div className="flex items-center gap-3 flex-wrap">
                  {dev.projects.map((proj, index) =>
                    proj.isMore ? (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center text-center w-[60px] h-[60px] sm:w-[62px] sm:h-[62px] border border-[#A3A3A380] rounded-lg text-xs sm:text-sm font-medium text-gray-700"
                      >
                        <div>{proj.name}</div>
                        <div>{proj.type}</div>
                      </div>
                    ) : (
                      <div
                        key={index}
                        className="flex items-center gap-2 sm:gap-3 w-full sm:w-[165px] h-[60px] sm:h-[62px] border border-[#A3A3A380] rounded-lg px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-700"
                      >
                        {proj.image && (
                          <Image
                            src={proj.image}
                            alt={proj.name}
                            width={40}
                            height={40}
                            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                          />
                        )}
                        <div>
                          <p className="truncate">{proj.name}</p>
                          <div className="flex items-center gap-1">
                            <p className="text-gray-500 text-[10px] sm:text-xs">
                              {proj.type}
                            </p>
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex items-center justify-center mt-12 sm:mt-16">
        <button className="bg-[#3E362E] w-[160px] sm:w-[200px] h-[48px] sm:h-[52px] rounded-2xl text-sm sm:text-base text-white">
          View more
        </button>
      </div>
    </div>
  );
}
