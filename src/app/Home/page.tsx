"use client";

import Hero from "./components/Hero";
import AssuredProperties from "./components/Assured Properties";
import TopProperties from "./components/Top Properties";
import TopProjects from "./components/Top Projects";
import Investment from "./components/Investment";
import TopBuilders from "./components/TopBuilders";

export default function HomePage() {
  return (
    <div className="bg-white">
      <Hero />
      <AssuredProperties />
      <TopProperties />
      <TopProjects />
      <Investment />
      <TopBuilders />
    </div>
  );
}
