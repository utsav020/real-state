"use client";

import Image from "next/image";

export default function Investment() {
  const items = [
    {
      id: 1,
      title: "Commercial Properties",
      desc: ["Prime Locations", "High ROI", "Long-term Leases"],
      image: "/images/Investment-1.png",
    },
    {
      id: 2,
      title: "Residential Projects",
      desc: ["Luxury Apartments", "Premium Amenities", "Gated Communities"],
      image: "/images/Investment-2.png",
    },
    {
      id: 3,
      title: "Vacation Homes",
      desc: ["Beach Villas", "Mountain Retreats", "Seasonal Income"],
      image: "/images/Investment-3.png",
    },
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-20 mx-auto max-w-[1520px] w-full px-4 sm:px-6 lg:px-8">
      {/* ✅ Heading */}
      <h2 className="text-3xl sm:text-5xl lg:text-[64px] text-[#3E362E] font-bold text-center mb-8 sm:mb-12">
        Investment Opportunities
      </h2>

      {/* ✅ Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1232px] mx-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-[#EAE7DD] shadow-md rounded-xl flex flex-col p-6 sm:p-8 lg:p-10 hover:shadow-xl transition-all duration-300"
          >
            {/* ✅ Circle Icon */}
            <div className="relative bg-[#3E362E] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-6">
              <Image
                src={item.image}
                alt={item.title}
                width={32}
                height={32}
                className="object-contain w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>

            {/* ✅ Title */}
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
              {item.title}
            </h3>

            {/* ✅ Features List */}
            <ul className="space-y-2 mb-6 text-sm sm:text-base lg:text-lg flex-1">
              {item.desc.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <Image
                    src="/images/Right.png"
                    alt="check"
                    width={16}
                    height={16}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            {/* ✅ Button */}
            <button className="mt-auto px-5 sm:px-6 py-2 sm:py-3 bg-[#3E362E] text-white text-sm sm:text-base font-medium rounded-md hover:bg-[#2b2621] transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
