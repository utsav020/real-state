"use client";

import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import Tabs from "./components/Tabs";
import Journey from "./components/Journey";
import Properties from "./components/Properties";
import History from "./components/History";
import LikedProperties from "./components/LikedProperties";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const tabs = ["Dashboard", "My Properties", "My Visits", "Contact Detail"];

  return (
    <div className="min-h-screen mt-[100px] bg-white shadow-md p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto max-w-[1520px] gap-6">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile */}
          <ProfileCard />

          {/* Tabs */}
          <div className="bg-[#f7f5f0] max-w-[980px] mx-auto rounded-lg p-6">
            <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* My Journey */}
            {activeTab === "Dashboard" && <Journey />}

            {/* My Properties */}
            {activeTab === "My Properties" && <Properties />}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          <History />
          <LikedProperties />
        </div>
      </div>
    </div>
  );
}
