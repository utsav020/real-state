// import React from 'react'

// export default function Menu() {
//   return (
//     <div className='bg-[url("/images/Menu-BG.png")] h-[921px] max-w-[1920px]'>
//       <p></p>
//     </div>
//   )
// }
// "use client";

// import { useState } from "react";
// import Header from "./components/Header";
// import MenuOverlay from "./components/MenuOverlay";

// export default function HomePage() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className='relative bg-[url("/images/Menu-BG.png")] h-[921px] max-w-[1920px] mt-[300px] min-h-screen bg-white'>
//       {/* ✅ Header with hamburger button */}
//       <Header onMenuClick={() => setMenuOpen(true)} />

//       {/* ✅ Full-page sliding menu overlay */}
//       <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

//       {/* ✅ Main content (example) */}
//       <main className="p-6">
//         <h2 className="text-2xl font-bold">Welcome to Real Estate</h2>
//         <p className="mt-4 text-gray-600">
//           This is your homepage content. Click the menu icon to open the
//           full-screen overlay menu.
//         </p>
//       </main>
//     </div>
//   );
// }

