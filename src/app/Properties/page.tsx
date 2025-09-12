// "use client";

// import Image from "next/image";
// import { Search, SlidersHorizontal } from "lucide-react";
// import { useState } from "react";

// export default function HomePage() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const categories = ["All", "House", "Apartment", "Villa", "Penthouse"];
//   const sortOptions = [
//     "Newest",
//     "Oldest",
//     "Price (Low → High)",
//     "Price (High → Low)",
//   ];
//   const [sort, setSort] = useState("Newest");

//   return (
//     <div className="bg-white max-w-[1920px] mx-auto flex flex-col mt-[70px]">
//       {/* ✅ Main Layout */}
//       <main className="flex-1 max-w-[1520px] mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 py-6">
//         {/* Left Content */}
//         <div className="lg:col-span-2 flex flex-col gap-6">
//           {/* Banner */}
//           <div className="relative w-full h-40 lg:h-56 rounded-lg overflow-hidden shadow">
//             <Image
//               src="/images/banner.png"
//               alt="Business Banner"
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Map Section */}
//           <div className="relative w-full h-[682px] rounded-lg overflow-hidden shadow">
//             <Image
//               src="/images/Map.png"
//               alt="Map View"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>

//         {/* Sidebar */}
//         <aside className="flex flex-col gap-6">
//           {/* ✅ Search + Filters Panel */}
//           <div className="border border-[#E8E4E0] rounded-lg p-4 shadow-sm bg-white">
//             <div className="flex w-[447px] items-center justify-between">
//               {/* Search bar */}
//               <div className="flex items-center gap-2 w-[391px] h-[42px] border border-[#A3A3A34D] rounded-lg px-3 py-2">
//                 <Search className="h-5 w-5 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search by location, property name..."
//                   className="flex-1 outline-none text-sm"
//                 />
//               </div>
//               <div className="border-[#A3A3A34D] border rounded-lg shadow-sm bg-white">
//                 <button className="p-2 hover:bg-gray-100 rounded-lg">
//                   <SlidersHorizontal className="h-5 w-5 text-gray-500" />
//                 </button>
//               </div>
//             </div>

//             {/* Categories */}
//             <div className="flex gap-2 mt-4 flex-wrap">
//               {categories.map((cat) => (
//                 <button
//                   key={cat}
//                   onClick={() => setActiveCategory(cat)}
//                   className={`px-4 py-1.5 text-sm rounded-full ${
//                     activeCategory === cat
//                       ? "bg-[#3E362E] text-white"
//                       : "bg-[#EEE5D9] text-black"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>

//             {/* Property count + Sort */}
//             <div className="flex items-center justify-between mt-4">
//               <div className="flex items-center gap-2">
//                 <p className="font-semibold text-[#111827]">235</p>
//                 <p className="text-sm text-[#5C5C5C]">properties found</p>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-sm text-gray-500">Sort by:</span>
//                 <select
//                   value={sort}
//                   onChange={(e) => setSort(e.target.value)}
//                   className="bg-[#EEE5D9] rounded-lg w-[93px] h-[28px] px-3 py-1 text-sm focus:outline-none"
//                 >
//                   {sortOptions.map((option) => (
//                     <option key={option}>{option}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             <div className="border border-[#A3A3A34D] mt-[16px]"></div>

//             {/* Filters */}
//             <div className="mt-[12px]">
//               <h3 className="text-lg text-[#3E362E] font-bold mb-3">Filters</h3>
//               <div className="flex gap-4 scrollbar-hide overflow-x-auto pb-2">
//                 {[
//                   { label: "Bathrooms", value: "2+" },
//                   { label: "Bedrooms", value: "2+" },
//                   { label: "Price Range", value: "$500,000" },
//                   { label: "Property Type", value: "House" },
//                   { label: "Area", value: "1200 sqft" },
//                   { label: "Year Built", value: "2023" },
//                 ].map((filter, idx) => (
//                   <div
//                     key={idx}
//                     className="flex-shrink-0 w-[122px] pr-[20px] border-[#A3A3A333] border-r h-[100px] flex flex-col items-center justify-between p-2 text-center"
//                   >
//                     <p className="text-sm text-gray-700">
//                       {filter.label}
//                     </p>
//                     <button className="px-3 py-1 w-[80px] h-[36px] bg-[#EEE5D9] rounded-lg text-xs font-semibold hover:bg-[#e0d5c5]">
//                       {filter.value}
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* ✅ Property Cards */}
//           <div className="flex flex-col w-[479px] shadow-md pt-[20px] border border-[#A3A3A34D] rounded-2xl h-[582px] scrollbar-hide overflow-y-auto gap-4">
//             {[1, 2, 3].map((id) => (
//               <div
//                 key={id}
//                 className="border border-[#A3A3A34D] mb-[20px] rounded-lg w-[447px] mx-auto h-[1322px] shadow-md "
//               >
//                 <div className="relative w-full h-[220px]">
//                   <Image
//                     src={`/images/Property-1.png`}
//                     alt="Property"
//                     fill
//                     className="object-cover rounded-lg h-[220px]"
//                   />
//                 </div>
//                 <div className="p-4">
//                   <div className="flex justify-between items-center">
//                     <h3 className="text-lg font-semibold">
//                     $825,000
//                   </h3>
//                   <div className="bg-[#DCFCE7] flex items-center justify-center rounded-[8px] w-[63px] h-[24px]">
//                     <p className="w-[47px] text-xs text-[#166534]">For Sale</p>
//                   </div>
//                   </div>
//                   <p className="text-base">
//                     Modern Downtown Apartment
//                   </p>
//                   <div className="flex items-center gap-2 ">
//                     <img src={"/images/Location-1.png"} />
//                     <p>
//                       123 Park Avenue, New York
//                     </p>
//                   </div>
//                   <div className="flex text-[#4B5563] items-center gap-4">
//                     <div className="flex items-center gap-2">
//                       <img src={"/images/Bad-1.png"} />
//                       <p>3 Beds</p>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <img src={"/images/Bath.png"} />
//                       <p>2 Baths</p>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <img src={"/images/Sqft.png"} />
//                       <p>2,100 sqft</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </aside>
//       </main>
//     </div>
//   );
// }



import Hero from "./components/Hero";
import ApartmentPlans from "./components/Plans";
import RelatedProperties from "./components/RelatedProperties";
import PropertyPage from "./components/Penthouse";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <PropertyPage />
      <ApartmentPlans />
      <RelatedProperties />
    </div>
  );
}
