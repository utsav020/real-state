"use client";

import { useState } from "react";
import Header from "../../Menu/components/Header";
import MenuOverlay from "../../Menu/components/MenuOverlay";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='relative max-w-screen w-full'>
      {/* ✅ Header with hamburger button */}
      <Header onMenuClick={() => setMenuOpen(true)} />

      {/* ✅ Full-page sliding menu overlay */}
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
