"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Property {
  id: number;
  title: string;
  price: string;
  image: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: "New York, USA",
    price: "$5,200,00",
    image: "/images/Assured-1.png",
  },
  {
    id: 2,
    title: "New York, USA",
    price: "$5,200,00",
    image: "/images/Assured-1.png",
  },
  {
    id: 3,
    title: "New York, USA",
    price: "$5,200,00",
    image: "/images/Assured-1.png",
  },
  {
    id: 4,
    title: "New York, USA",
    price: "$5,200,00",
    image: "/images/Assured-1.png",
  },
];

export default function HomePage() {
  const [visibleButtons, setVisibleButtons] = useState<number[]>([]);

  useEffect(() => {
    // ✅ IntersectionObserver to trigger animation when card scrolls into view
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
  }, []);

  const toggleButtons = (id: number) => {
    setVisibleButtons((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  return (
    <main className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* ✅ Top Projects Section */}
      <section className="py-10 sm:py-14 lg:py-20">
        <h2 className="text-3xl sm:text-4xl lg:text-[64px] text-[#3E362E] text-center font-bold mb-10 sm:mb-12">
          Assured Properties
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {properties.map((p) => (
            <div
              key={p.id}
              data-id={p.id}
              className="property-card group relative h-[370px] md:h-[667px] bg-[#EAE7DD] shadow-md rounded-xl overflow-hidden w-full sm:w-auto transition-transform duration-500 hover:scale-105">
              {/* Property Image */}
              <div
                className="relative w-full h-[220px] sm:h-[250px] md:h-[500px] cursor-pointer"
                onClick={() => toggleButtons(p.id)}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* ✅ Buttons (Mobile → click/scroll reveal, Desktop → hover) */}
              <div
                className={`
                  absolute bottom-0 left-0 w-full px-4 pb-3 flex gap-3 sm:gap-4 justify-center
                  transition-all duration-500
                  sm:translate-y-full sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100
                  ${
                    visibleButtons.includes(p.id)
                      ? "translate-y-0 opacity-100 animate-slideUp"
                      : "translate-y-full opacity-0"
                  }
                `}
              >
                <button className="flex-1 bg-[#2C2C2C] text-white font-semibold py-2 sm:py-3 rounded-lg shadow-md hover:bg-black transition">
                  BOOK A VISIT
                </button>
                <button className="flex-1 bg-green-500 text-white font-semibold py-2 sm:py-3 rounded-lg shadow-md hover:bg-green-600 transition">
                  CALL
                </button>
              </div>

              {/* Info Block */}
              <div className="px-4 py-4 sm:py-5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src="/images/Location.png"
                      alt="location"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <h3 className="font-semibold text-[#000000] text-[16px] sm:text-[18px]">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-[#000000] text-[18px] sm:text-[20px] font-medium">
                    {p.price}
                  </p>
                </div>

                {/* Features */}
                <div className="flex justify-between mt-3 sm:mt-4 text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <img
                      src={"/images/Bad.png"}
                      alt="bed"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                    <p>8 Bed</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src={"/images/Size.png"}
                      alt="size"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                    <p>10*10</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src={"/images/Room.png"}
                      alt="room"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                    <p>6 Room</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

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
    </main>
  );
}
