"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CalendarDays,
  CalendarCheck2,
  ArrowUpRight,
  Phone,
  Heart,
} from "lucide-react";

interface Visit {
  id: number;
  title: string;
  price: string;
  date: string;
  time: string;
  image: string;
}

const visits: Visit[] = [
  {
    id: 1,
    title: "Lorem ipsum",
    price: "$5,200.00",
    date: "16 May",
    time: "1:00pm",
    image: "/images/Like-1.png",
  },
  {
    id: 2,
    title: "Lorem ipsum",
    price: "$5,200.00",
    date: "16 May",
    time: "1:00pm",
    image: "/images/Like-1.png",
  },
  {
    id: 3,
    title: "Lorem ipsum",
    price: "$5,200.00",
    date: "16 May",
    time: "1:00pm",
    image: "/images/Like-1.png",
  },
];

export default function Visits() {
  const [activeTab, setActiveTab] = useState("Upcoming");

  return (
    <div className="flex flex-col mt-[20px]">
      <div className="flex flex-1 gap-6 p-6">
        {/* Sidebar */}
        <aside className="w-[300px] h-[192px] bg-[#3a3531] rounded-xl p-4 text-white space-y-6">
          <button
            className={`flex items-center w-[260px] justify-center gap-2 px-4 py-3 rounded-lg ${
              activeTab === "Upcoming"
                ? "bg-white w-[260px] text-black font-medium"
                : "text-white"
            }`}
            onClick={() => setActiveTab("Upcoming")}
          >
            <CalendarDays className="w-5 h-5" />
            Upcoming (3)
          </button>

          <div className="border border-[#FFFFFF]"></div>

          <button
            className={`flex items-center w-[260px] justify-center gap-2 px-4 py-3 rounded-lg ${
              activeTab === "Completed"
                ? "bg-white w-[260px] text-black font-medium"
                : "text-white"
            }`}
            onClick={() => setActiveTab("Completed")}
          >
            <CalendarCheck2 className="w-5 h-5" />
            Completed
          </button>
        </aside>

        {/* Main content */}
        <main className="flex-1 bg-white w-[560px] h-[708px] rounded-xl p-6 space-y-4">
          {visits.map((visit) => (
            <div key={visit.id}>
              <div
                
                className="flex gap-4 bg-[#F4F4F4] border border-gray-200 rounded-lg p-4"
              >
                {/* Property Image */}
                <div className="relative w-[160px] h-[176px] rounded-lg overflow-hidden">
                  <Image
                    src={visit.image}
                    alt={visit.title}
                    fill
                    className="object-cover"
                  />
                  <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
                    <Heart className="w-4 h-4 text-red-500" />
                  </button>
                </div>

                {/* Property Info */}
                <div className="">
                  <div className="flex justify-between w-[300px]">
                    <div className="">
                      <h3 className="font-semibold text-[18px] text-gray-800">
                        {visit.title}
                      </h3>
                      <p className="text-sm mt-[10px] text-gray-500">Virtual visit</p>
                    </div>
                    <div className="">
                      <p className="font-semibold text-[18px] text-gray-800">
                        {visit.price}
                      </p>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-[32px] font-bold text-gray-900">
                      {visit.date.split(" ")[0]}
                    </span>
                    <div className="text-sm text-gray-600 leading-tight">
                      <p>{visit.date.split(" ")[1]}</p>
                      <p>{visit.time}</p>
                    </div>
                  </div>
                  <div className="flex flex-col mt-[15px]">
                    <div className="flex justify-between">
                      <button className="flex w-[135px] h-[41px] justify-center items-center gap-3 bg-[#3E362E] text-white px-3 py-1 rounded-md text-sm">
                        <ArrowUpRight className="w-4 h-4" />
                        Reschedule
                      </button>
                      <button className="flex w-[135px] h-[41px] justify-center items-center gap-4 bg-[#35B850] text-white px-3 py-1 rounded-md text-sm">
                        <Phone className="w-4 h-4" />
                        Call
                      </button>
                    </div>
                  </div>
                </div>

                {/* Price + Actions */}
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
