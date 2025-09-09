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
    <div className="flex justify-between mt-[40px]">
      {/* Sidebar */}
      <aside className="w-64 shrink-0">
        <Sidebar
          active={""}
          setActive={function (tab: string): void {
            throw new Error("Function not implemented.");
          }}
        />
      </aside>

      {/* Property Cards */}
      <main className="w-[560px] bg-white shadow-md rounded-xl h-[728px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {properties.map((p) => (
            <PropertyCard key={p.id} {...p} />
          ))}
        </div>
      </main>
    </div>
  );
}
