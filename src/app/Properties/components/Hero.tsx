"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  "Penthouse-1.png",
  "Panthouse-2.avif",
  "Panthouse-3.webp",
  "Penthouse-1.png",
  "Panthouse-5.webp",
];

export default function Hero() {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="max-w-[1520px] w-full mx-auto px-4">
      {/* Main Banner */}
      <div className="relative mt-[80px] w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px]">
        <Image
          src={`/images/${mainImage}`}
          alt="Penthouse view"
          fill
          className="rounded-lg object-cover"
          priority
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex gap-3 mt-4 overflow-x-auto scrollbar-hide pb-2 sm:justify-start">
        {images.slice(1).map((img, idx) => (
          <button
            key={idx}
            onClick={() => setMainImage(img)}
            className="relative min-w-[80px] sm:min-w-[100px] md:min-w-[120px] lg:min-w-[150px] h-[60px] sm:h-[80px] md:h-[96px] lg:h-[100px] rounded-md overflow-hidden border-2 border-transparent hover:border-[#c2a77d] transition"
          >
            <Image
              src={`/images/${img}`}
              alt={`Thumbnail ${idx + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
