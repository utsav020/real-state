"use client";

import { useState } from "react";
import { Bed, Bath, Square, CarFront, Phone } from "lucide-react";

const tabs = ["Overview", "Details", "Features", "Location"];

export default function PropertyPage() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <section className="max-w-[1520px] mx-auto px-4 sm:px-6 py-8">
      {/* Title + Price */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-start">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            Skyline Penthouse
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 text-gray-600 text-sm">
            <div className="flex items-center gap-1">
              <Bed size={16} /> 3 Bedrooms
            </div>
            <div className="flex items-center gap-1">
              <Bath size={16} /> 3.5 Bathrooms
            </div>
            <div className="flex items-center gap-1">
              <Square size={16} /> 2,800 sq ft
            </div>
            <div className="flex items-center gap-1">
              <CarFront size={16} /> 2 Parking
            </div>
          </div>
        </div>
        <p className="text-xl sm:text-2xl font-semibold text-[#B08C63]">
          $2,850,000
        </p>
      </div>

      {/* Tabs + Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 border-b pb-3 gap-4">
        {/* Tabs */}
        <div className="flex gap-4 sm:gap-6 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-sm font-medium ${
                activeTab === tab
                  ? "text-[#6B4D2E] border-b-2 border-[#6B4D2E]"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <button className="flex-1 sm:flex-none px-4 py-2 flex items-center gap-2 justify-center bg-[#3E362E] text-white text-sm rounded-md">
            <Phone size={16} /> CALL
          </button>
          <button className="flex-1 sm:flex-none px-4 py-2 flex items-center gap-2 justify-center bg-[#3E362E] text-white text-sm rounded-md">
            <img src={"/images/Visit.png"} alt="Visit" className="w-4 h-4" />
            BOOK A VISIT
          </button>
          <button className="flex-1 sm:flex-none px-4 py-2 flex items-center gap-2 justify-center bg-[#3E362E] text-white text-sm rounded-md">
            <img
              src={"/images/Compair.png"}
              alt="Compare"
              className="w-4 h-4"
            />
            Compare property
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-6 text-gray-600 leading-relaxed text-sm sm:text-base">
        {activeTab === "Overview" && (
          <>
            <p>
              Experience the epitome of luxury living in this stunning penthouse
              apartment, offering breathtaking panoramic views of the city skyline.
              This meticulously designed residence features premium finishes
              throughout, including Italian marble floors, custom millwork, and
              smart home technology.
            </p>
            <p className="mt-4">
              The open-concept living area seamlessly connects to a private
              terrace, perfect for outdoor entertaining. The gourmet kitchen is
              equipped with top-of-the-line Miele appliances and a wine storage.
              The master suite includes a spa-like bathroom and a generous walk-in
              closet.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Property Features
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-[#6B4D2E]">✔</span> Floor-to-ceiling
                    windows
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#6B4D2E]">✔</span> Smart home system
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#6B4D2E]">✔</span> Private elevator
                    access
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#6B4D2E]">✔</span> 24/7 concierge
                    service
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Building Amenities
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-[#6B4D2E]">✔</span> Fitness center
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#6B4D2E]">✔</span> Rooftop pool
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#6B4D2E]">✔</span> Wine cellar
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#6B4D2E]">✔</span> Valet parking
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}

        {activeTab === "Details" && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Property Details
            </h2>
            <ul className="space-y-2 text-sm">
              <li>Year Built: 2022</li>
              <li>Property Type: Penthouse</li>
              <li>Floor: 25th</li>
              <li>HOA Fees: $1,200/month</li>
            </ul>
          </div>
        )}

        {activeTab === "Features" && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Imported Italian marble flooring</li>
              <li>Smart lighting & climate control</li>
              <li>Panoramic skyline views</li>
              <li>Private rooftop garden</li>
            </ul>
          </div>
        )}

        {activeTab === "Location" && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Location</h2>
            <p>
              Located in the heart of downtown, this penthouse offers easy access
              to business districts, luxury shopping, fine dining, and
              entertainment venues.
            </p>
            <div className="mt-4">
              <div className="w-full h-48 sm:h-64 bg-gray-200 flex items-center justify-center rounded-md">
                📍 Google Map Here
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
