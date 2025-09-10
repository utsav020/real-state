"use client";

import { Mail, Phone, Clock, Facebook, Twitter, Linkedin } from "lucide-react";
import NavLinks from "./NavLinks";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-[url("/images/Menu-BG.png")] bg-cover bg-center h-[921px] max-w-[1920px] text-white transition-transform duration-500 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-2xl"
      >
        ✕
      </button>

      <div className="flex flex-col md:flex-row h-full">
        {/* Left Navigation */}
        <div className="flex-1 flex flex-col justify-center px-10 space-y-6">
          <h2 className="text-sm text-[#c2a77d] uppercase">Real estate</h2>
          <NavLinks />
        </div>

        {/* Right Info Section */}
        <div className="flex-1 flex flex-col justify-center px-10 space-y-8 text-sm">
          {/* Company */}
          <div>
            <h3 className="font-semibold">Company name</h3>
            <p className="text-gray-300 text-xs">
              Your trusted partner in luxury real estate since 1995.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-[#c2a77d]"><Facebook size={18} /></a>
              <a href="#" className="hover:text-[#c2a77d]"><Twitter size={18} /></a>
              <a href="#" className="hover:text-[#c2a77d]"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">Contact</h3>
            <p className="flex items-center gap-2"><Phone size={16}/> +1 (202) 588-0933</p>
            <p className="flex items-center gap-2"><Mail size={16}/> contact@luxuryproperties.com</p>
            <p className="flex items-center gap-2"><Clock size={16}/> Mon - Fri: 9:00 AM - 6:00 PM</p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold">Newsletter</h3>
            <form className="flex gap-2 mt-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-md text-black w-2/3"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#c2a77d] rounded-md text-white hover:bg-[#b08d61]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
