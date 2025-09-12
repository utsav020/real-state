"use client";

import { useRouter, usePathname } from "next/navigation";

const tabs = [
  { name: "Overview", path: "/property/overview" },
  { name: "Details", path: "/property/details" },
  { name: "Features", path: "/property/features" },
  { name: "Location", path: "/property/location" },
];

export default function PropertyTabs() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center mt-6 border-b">
      {/* Tabs */}
      <div className="flex gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => router.push(tab.path)}
            className={`pb-2 text-sm font-medium ${
              pathname === tab.path
                ? "text-[#6B4D2E] border-b-2 border-[#6B4D2E]"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="px-4 py-2 bg-[#3E362E] text-white text-sm rounded-md">
          CALL
        </button>
        <button className="px-4 py-2 bg-[#3E362E] text-white text-sm rounded-md">
          BOOK A VISIT
        </button>
        <button className="px-4 py-2 bg-[#3E362E] text-white text-sm rounded-md">
          Compare property
        </button>
      </div>
    </div>
  );
}
