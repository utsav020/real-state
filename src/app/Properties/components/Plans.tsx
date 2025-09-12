"use client";

import { useState } from "react";

const tabs = [
  "Penthouse",
  "Studio",
  "Double Height Duplex",
  "Double Height",
  "Simplex",
];

export default function ApartmentPlans() {
  const [activeTab, setActiveTab] = useState("Penthouse");

  return (
    <section
      className="w-full bg-white max-w-[1920px] mx-auto bg-cover bg-center"
      style={{ backgroundImage: "url('/images/floor-1.png')" }}
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 py-12 lg:py-20">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900">
          APARTMENTS PLANS
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-md transition ${
                activeTab === tab
                  ? "bg-[#3E362E] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 w-full">
            <p className="text-gray-600 mb-6 max-w-lg">
              Lorem ipsum dolor sit amet consectetur. Nisl quis id mollis
              ullamcorper a augue eleifend eu. Sed mus aliquam non ipsum
              faucibus nisl. Ultrices suscipit tortor sagittis.
            </p>

            {/* Property Details */}
            <ul className="space-y-3 text-[#9EA0A6] text-sm mb-8 w-full max-w-md">
              <li className="flex items-center justify-between border-b pb-2">
                <span>Floor No</span> <span>80</span>
              </li>
              <li className="flex items-center justify-between border-b pb-2">
                <span>ROOMS</span> <span>4</span>
              </li>
              <li className="flex items-center justify-between border-b pb-2">
                <span>TOTAL AREA, SQ.M.</span> <span>298.50</span>
              </li>
              <li className="flex items-center justify-between border-b pb-2">
                <span>PARKING</span> <span>50</span>
              </li>
              <li className="flex items-center justify-between border-b pb-2">
                <span>PRICE</span> <span>$3200/m2</span>
              </li>
            </ul>

            {/* Button */}
            <button className="max-w-md lg:w-[450px] sm:w-auto px-6 py-3 border text-[#454545] border-[#222D52] rounded-md text-base font-bold hover:bg-black hover:text-white transition">
              Schedule a Visit
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full flex justify-center">
            <img
              src={"/images/Plan-11.png"}
              alt="Apartment Plan"
              className="rounded-md w-full max-w-md sm:max-w-lg lg:max-w-xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
