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
    <div className="flex max-w-[960px] mx-auto flex-col mt-6 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-col xl:flex-row gap-6">
        {/* Sidebar */}
        <aside className="flex-col flex lg:flex-col gap-2 h-[123px] w-[200px] overflow-x-auto lg:overflow-visible scrollbar-hide bg-[#3a3531] rounded-xl p-2 lg:p-4 text-white">
          <button
            className={`flex items-center justify-center lg:justify-start gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition ${
              activeTab === "Upcoming"
                ? "bg-white text-black font-medium"
                : "hover:bg-[#4a4541]"
            }`}
            onClick={() => setActiveTab("Upcoming")}
          >
            <CalendarDays className="w-5 h-5" />
            Upcoming ({visits.length})
          </button>
          <div className="border-1 mt-1"></div>
          <button
            className={`flex items-center justify-center lg:justify-start gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition ${
              activeTab === "Completed"
                ? "bg-white text-black font-medium"
                : "hover:bg-[#4a4541]"
            }`}
            onClick={() => setActiveTab("Completed")}
          >
            <CalendarCheck2 className="w-5 h-5" />
            Completed
          </button>
        </aside>

        {/* Main content */}
        <main className="flex-1 flex flex-col gap-4">
          {visits.map((visit) => (
            <div
              key={visit.id}
              className="flex flex-col sm:flex-row gap-4 bg-[#F4F4F4] rounded-xl p-4 shadow-md"
            >
              {/* Property Image */}
              <div className="relative w-full sm:w-[160px] h-[176px] rounded-lg overflow-hidden flex-shrink-0">
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
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {visit.title}
                    </h3>
                    <p className="text-sm mt-1 text-gray-500">Virtual visit</p>
                  </div>
                  <p className="font-semibold text-lg text-gray-800">
                    {visit.price}
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-3">
                  <span className="text-3xl font-bold text-gray-900">
                    {visit.date.split(" ")[0]}
                  </span>
                  <div className="text-sm text-gray-600 leading-tight">
                    <p>{visit.date.split(" ")[1]}</p>
                    <p>{visit.time}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <button className="flex-1 flex justify-center items-center gap-2 bg-[#3E362E] text-white px-4 py-2 rounded-md text-sm hover:bg-[#2C2C2C] transition">
                    <ArrowUpRight className="w-4 h-4" />
                    Reschedule
                  </button>
                  <button className="flex-1 flex justify-center items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600 transition">
                    <Phone className="w-4 h-4" />
                    Call
                  </button>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
