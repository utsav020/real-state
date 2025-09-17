"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";

// 🔹 FiltersPanel Component
function FiltersPanel({ onClose }: { onClose?: () => void }) {
  const [priceRange, setPriceRange] = useState([500000, 5000000]);
  const [location, setLocation] = useState("Beverly Hills");
  const [propertyType, setPropertyType] = useState("House");
  const [bedrooms, setBedrooms] = useState("Any");
  const [bathrooms, setBathrooms] = useState("Any");
  const [moreFilters, setMoreFilters] = useState<string[]>([]);

  const handleCheckbox = (value: string) => {
    setMoreFilters((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <div className="fixed right-10 top-20 h-[750px] w-[364px] rounded-2xl bg-white shadow-lg z-50 p-4 overflow-y-auto border-l border-gray-200">
      {/* Header with Close */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg text-[#3E362E] font-bold">Filters</h3>
        <button
          onClick={onClose}
          className="p-1 rounded-md hover:bg-gray-100 transition"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      {/* Price Range */}
      <div className="mb-4 text-[#5C5C5C]">
        <p className="font-medium mb-2">Price Range</p>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={`$${priceRange[0].toLocaleString()}`}
            readOnly
            className="w-1/2 border border-[#E5E7EB] rounded-md px-2 py-1 text-sm"
          />
          <span>-</span>
          <input
            type="text"
            value={`$${priceRange[1].toLocaleString()}`}
            readOnly
            className="w-1/2 border border-[#E5E7EB] rounded-md px-2 py-1 text-sm"
          />
        </div>
        <input
          type="range"
          min={500000}
          max={5000000}
          step={100000}
          value={priceRange[0]}
          onChange={(e) =>
            setPriceRange([parseInt(e.target.value), priceRange[1]])
          }
          className="w-full mt-2 text-[#D2B68A]"
        />
      </div>

      {/* Location */}
      <div className="mb-4">
        <p className="font-medium mb-2">Location</p>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border text-[#5C5C5C] border-[#E5E7EB] rounded-md px-2 py-2 text-sm"
        >
          <option>Beverly Hills</option>
          <option>Los Angeles</option>
          <option>New York</option>
          <option>Miami</option>
        </select>
      </div>

      {/* Property Type */}
      <div className="mb-4">
        <p className="font-medium mb-2">Property Type</p>
        <div className="grid grid-cols-2 gap-2">
          {["House", "Apartment", "Villa", "Penthouse"].map((type) => (
            <button
              key={type}
              onClick={() => setPropertyType(type)}
              className={`px-3 py-2 rounded-md text-sm ${
                propertyType === type
                  ? "bg-[#D6C1A3] text-[#3E362E]"
                  : "border border-[#EEE5D9] text-[#5C5C5C] bg-white"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Bedrooms */}
      <div className="mb-4">
        <p className="font-medium mb-2">Bedrooms</p>
        <div className="flex gap-2">
          {["Any", "2+", "3+", "4+"].map((num) => (
            <button
              key={num}
              onClick={() => setBedrooms(num)}
              className={`px-3 py-1 rounded-md text-sm ${
                bedrooms === num
                  ? "bg-[#D6C1A3] text-[#3E362E]"
                  : "border border-[#EEE5D9] text-[#5C5C5C] bg-white"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* Bathrooms */}
      <div className="mb-4">
        <p className="font-medium mb-2">Bathrooms</p>
        <div className="flex gap-2">
          {["Any", "2+", "3+", "4+"].map((num) => (
            <button
              key={num}
              onClick={() => setBathrooms(num)}
              className={`px-3 py-1 rounded-md text-sm ${
                bathrooms === num
                  ? "bg-[#D6C1A3] text-[#3E362E]"
                  : "border border-[#EEE5D9] text-[#5C5C5C] bg-white"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* More Filters */}
      <div className="mb-4">
        <p className="font-medium mb-2">More Filters</p>
        <div className="flex flex-col gap-2">
          {["Swimming Pool", "Garden", "Garage", "Smart Home"].map((filter) => (
            <label key={filter} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={moreFilters.includes(filter)}
                onChange={() => handleCheckbox(filter)}
              />
              {filter}
            </label>
          ))}
        </div>
      </div>

      <button className="w-full py-2 bg-[#D6C1A3] text-white font-medium rounded-md hover:bg-[#bfa17c] transition">
        Apply Filters
      </button>
    </div>
  );
}

export default FiltersPanel;