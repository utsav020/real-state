"use client";

import { Mail, Phone, Clock } from "lucide-react";
import NavLinks from "./NavLinks";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-[url("/images/Menu-BG.png")] max-w-[1920px] bg-cover bg-center text-white transition-transform duration-500 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Header with close button */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 mt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl md:text-[50px] text-[#c2a77d] uppercase">
            Real estate
          </h2>
          <button onClick={onClose} className="text-2xl md:text-3xl">
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row mt-10 md:mt-[70px] justify-between">
          {/* ✅ Left Navigation (always visible) */}
          <div className="flex flex-col justify-center space-y-6">
            <NavLinks onClose={onClose} />
          </div>

          {/* ✅ Right Info Section (hidden on mobile) */}
          <div className="hidden md:flex flex-col w-[274px] h-[554px] space-y-8 text-sm">
            {/* Company */}
            <div>
              <h3 className="font-semibold text-[20px] text-[#AA8766]">
                Company name
              </h3>
              <p className="text-gray-300 mt-6 text-[16px]">
                Your trusted partner in luxury real estate since 1995.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:text-[#c2a77d]">
                  <img className="w-[25px] h-[32px]" src={"/images/Facebook.png"} />
                </a>
                <a href="#" className="hover:text-[#c2a77d]">
                  <img src={"/images/Twitter.png"} />
                </a>
                <a href="#" className="hover:text-[#c2a77d]">
                  <img src={"/images/Insta.png"} />
                </a>
                <a href="#" className="hover:text-[#c2a77d]">
                  <img src={"/images/Linkdin.png"} />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="pt-[50px]">
              <h3 className="font-semibold text-[20px] text-[#AA8766]">
                Contact
              </h3>
              <div className="mt-6 space-y-3">
                <p className="flex items-center gap-2">
                  <Phone size={16} /> +1 (202) 588-0933
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} /> contact@luxuryproperties.com
                </p>
                <p className="flex items-center gap-2">
                  <Clock size={16} /> Mon - Fri: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-[80px]">
              <p className="font-bold text-2xl text-white">Newsletter</p>
              <div className="mt-4 flex flex-col sm:flex-row items-center sm:items-stretch">
                <input
                  className="w-full sm:w-[180px] h-[44px] pl-4 text-sm text-[#454545] bg-white rounded-[8px] sm:rounded-l-[8px] sm:rounded-r-none focus:outline-none"
                  type="email"
                  placeholder="Your email"
                />
                <button className="w-full mt-3 sm:mt-0 sm:w-[104px] h-[44px] bg-[#BA945A] text-white text-sm rounded-[8px] sm:rounded-l-none sm:rounded-r-[8px] hover:bg-[#a87f4a] transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
