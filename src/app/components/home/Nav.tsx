"use client";

import { useState } from "react";
import Header from "../../Menu/components/Header";
import MenuOverlay from "../../Menu/components/MenuOverlay";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='relative'>
      {/* ✅ Header with hamburger button */}
      <Header onMenuClick={() => setMenuOpen(true)} />

      {/* ✅ Full-page sliding menu overlay */}
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* ✅ Main content */}
      {/* <main className="p-6">
        <h2 className="text-2xl font-bold">Welcome to Real Estate</h2>
        <p className="mt-4 text-gray-600">
          This is your homepage content. Click the menu icon to open the
          full-screen overlay menu.
        </p>
      </main> */}
    </div>
  );
}
