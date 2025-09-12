"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface NavLinksProps {
  onClose: () => void; // ✅ callback to close menu
}

export default function NavLinks({ onClose }: NavLinksProps) {
  const links = [
    { name: "HOME", path: "/Home" },
    { name: "Properties", path: "/Properties" },
    { name: "Devlopers", path: "/Devlopers" },
    { name: "About us", path: "/About" },
    { name: "Contact us", path: "/Contact" },
  ];

  return (
    <div className="flex justify-center md:justify-start h-full">
      <nav className="space-y-6 sm:space-y-8 text-[#AA8766] font-medium">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            onClick={onClose} // ✅ close menu on click
            className="group flex items-center gap-3 text-3xl sm:text-4xl md:text-5xl 2xl:text-[2 4px] transition-all duration-300 hover:text-[#EAE7DD] transform hover:translate-x-2 hover:scale-105"
          >
            <span className="hidden sm:inline opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              <ChevronRight size={50} className="xl:size-10" />
            </span>
            <span className="transition-all duration-300">{link.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}



// "use client";

// import { ChevronRight } from "lucide-react";
// import Link from "next/link";

// interface NavLinksProps {
//   onClose: () => void; // ✅ callback to close menu
// }

// export default function NavLinks({ onClose }: NavLinksProps) {
//   const links = [
//     { name: "HOME", path: "/Home" },
//     { name: "Properties", path: "/Properties" },
//     { name: "Builders", path: "/Builders" },
//     { name: "About us", path: "/About" },
//     { name: "Contact us", path: "/Contact" },
//   ];

//   return (
//     <div className="flex justify-center md:justify-start h-full">
//       <nav className="space-y-6 sm:space-y-8 text-[#AA8766] font-medium">
//         {links.map((link, index) => (
//           <Link
//             key={index}
//             href={link.path}
//             onClick={onClose} // ✅ close menu on click
//             className="group flex items-center gap-3 text-3xl sm:text-4xl md:text-5xl lg:text-[64px] transition-all duration-300 hover:text-[#EAE7DD] transform hover:translate-x-2 hover:scale-105"
//           >
//             {/* Arrow Icon (hidden on mobile, visible on hover for md+) */}
//             <span className="hidden sm:inline opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
//               <ChevronRight size={32} className="sm:size-40" />
//             </span>
//             <span className="transition-all duration-300">{link.name}</span>
//           </Link>
//         ))}
//       </nav>
//     </div>
//   );
// }

