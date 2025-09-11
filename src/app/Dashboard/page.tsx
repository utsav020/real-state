"use client";

import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import Tabs from "./components/Tabs";
import Journey from "./components/Journey";
import Properties from "./components/Properties";
import History from "./components/History";
import Visits from "./components/Visits";
import LikedProperties from "./components/LikedProperties";
import Contact from "./components/Contact";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const tabs = ["Dashboard", "My Properties", "My Visits", "Contact Detail"];

  return (
    <main className="pt-[100px] bg-white">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid max-w-[1520px] mx-auto grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-3 gap-6">
          {/* ✅ LEFT SIDE (Profile + Tabs Content) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile */}
            <ProfileCard />

            {/* Tabs & Content */}
            <div className="bg-[#f7f5f0] max-w-[960px] mx-auto rounded-lg p-4 sm:p-6">
              <Tabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              <div className="mt-6 max-w-[960px] mx-auto">
                {activeTab === "Dashboard" && <Journey />}
                {activeTab === "My Properties" && <Properties />}
                {activeTab === "My Visits" && <Visits />}
                {activeTab === "Contact Detail" && <Contact />}
              </div>
            </div>
          </div>

          {/* ✅ RIGHT SIDE (Sidebar widgets) */}
          <aside className="space-y-6">
            <History />
            <LikedProperties />
          </aside>
        </div>
      </div>
    </main>
  );
}
