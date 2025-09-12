"use client";

import PropertyCard from "./PropertyCard";
import Sidebar from "./Sidebar";

const properties = [
  {
    id: 1,
    title: "Lorem ipsum",
    price: "$5,200.00",
    desc: "Lorem ipsum dolor sit amet consectetur. In nibh fames sollicitudin in placerat. Ut aliquet.",
    image: "/images/property-1.png",
  },
  {
    id: 2,
    title: "Lorem ipsum",
    price: "$5,200.00",
    desc: "Lorem ipsum dolor sit amet consectetur. In nibh fames sollicitudin in placerat. Ut aliquet.",
    image: "/images/property-2.png",
  },
  {
    id: 3,
    title: "Lorem ipsum",
    price: "$5,200.00",
    desc: "Lorem ipsum dolor sit amet consectetur. In nibh fames sollicitudin in placerat. Ut aliquet.",
    image: "/images/property-3.png",
  },
];

export default function Properties() {
  return (
    <div className="flex flex-col xl:flex-row lg:flex-row w-full max-w-[1200px] mx-auto gap-6 mt-10 px-4">
      {/* Sidebar */}
      <aside className="w-full flex justify-center h-[250px] lg:w-[280px] lg:shrink-0">
        <Sidebar
          active={""}
          setActive={function (tab: string): void {
            throw new Error("Function not implemented.");
          }}
        />
      </aside>

      {/* Property Cards */}
      <main className="flex-1 bg-white shadow-md rounded-xl p-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
          {properties.map((p) => (
            <PropertyCard key={p.id} {...p} />
          ))}
        </div>
      </main>
    </div>
  );
}
