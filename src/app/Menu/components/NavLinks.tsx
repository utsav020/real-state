"use client";

export default function NavLinks() {
  return (
    <nav className="space-y-4 text-2xl font-medium">
      <a href="#" className="flex items-center gap-2 text-white">
        <span className="text-lg">›</span> HOME
      </a>
      <a href="#" className="hover:text-[#c2a77d]">Properties</a>
      <a href="#" className="hover:text-[#c2a77d]">Builders</a>
      <a href="#" className="hover:text-[#c2a77d]">About us</a>
      <a href="#" className="hover:text-[#c2a77d]">Contact us</a>
    </nav>
  );
}
