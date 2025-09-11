"use client";

import React, { JSX } from "react";
import Image from "next/image";
import { Mail, Phone, Clock } from "lucide-react";

interface LinkSection {
  title: string;
  items: string[];
}

interface InfoBlock {
  icon: React.ReactNode;
  value: string;
}

interface SocialIcon {
  src: string;
  alt: string;
}

export default function Footer(): JSX.Element {
  const linkSections: LinkSection[] = [
    {
      title: "Useful Links",
      items: ["Home", "Properties", "Builders", "About us", "Contact us"],
    },
  ];

  const socialIcons: SocialIcon[] = [
    { src: "/images/Facebook.png", alt: "Facebook" },
    { src: "/images/Insta.png", alt: "Instagram" },
    { src: "/images/Twitter.png", alt: "Twitter" },
    { src: "/images/Linkdin.png", alt: "Linkdin" },
  ];

  const infoBlocks: InfoBlock[] = [
    {
      icon: <Phone size={20} />,
      value: "+1 (212) 555-0123",
    },
    {
      icon: <Mail size={20} />,
      value: "contact@luxuryproperties.com",
    },
    {
      icon: <Clock size={20} />,
      value: "Mon - Fri: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className="w-full max-w-[1920px] mx-auto mt-0 mb-0">
      <footer className="w-full border border-[#CCCCCC] bg-[#3E362E]">
        {/* Top Section */}
        <div className="max-w-[1520px] mx-auto py-10 px-5 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo & Description */}
            <div className="text-center sm:text-left">
              <p className="font-bold text-[#FFFFFF] text-2xl">LOGO</p>
              <p className="text-base mt-6 leading-relaxed text-[#FFF] max-w-[280px] mx-auto sm:mx-0">
                Your trusted partner in luxury real estate since 1995.
              </p>
              {/* Social Icons */}
              <div className="mt-4 flex justify-center sm:justify-start gap-4 flex-wrap">
                {socialIcons.map((social, idx) => (
                  <div
                    key={idx}
                    className="h-10 w-10 rounded-full flex items-center justify-center hover:scale-105 transition cursor-pointer bg-white/10"
                  >
                    <Image
                      src={social.src}
                      alt={social.alt}
                      width={22}
                      height={22}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Useful Links */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold text-[#FFFFFF] mb-4">
                {linkSections[0].title}
              </h3>
              <ul className="space-y-2">
                {linkSections[0].items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-base text-[#FFFFFF] hover:text-[#BA945A] transition cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center sm:w-[240px] mx-auto sm:text-left">
              <h3 className="sr-only">Contact</h3>
              {infoBlocks.map((info, idx) => (
                <div
                  key={idx}
                  className="flex w-[300px] mx-auto items-center gap-3 py-2 justify-start sm:justify-start"
                >
                  <div className="h-10 w-10 text-white rounded-full flex items-center justify-center bg-white/10">
                    {info.icon}
                  </div>
                  <p className="text-sm text-[#FFFFFF]">{info.value}</p>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="text-center sm:text-left">
              <p className="font-bold text-2xl text-[#FFFFFF]">Newsletter</p>
              <div className="mt-4 flex flex-col sm:flex-row items-center sm:items-stretch">
                <input
                  className="w-full sm:w-[180px] h-[44px] pl-4 text-sm text-[#454545] bg-white rounded-[8px] sm:rounded-l-[8px] sm:rounded-r-none focus:outline-none"
                  type="email"
                  placeholder="Your email"
                />
                <button className="w-full mt-[10px] md:mt-[0] sm:w-[104px] h-[44px] bg-[#BA945A] text-[#FFFFFF] text-sm rounded-[8px] sm:rounded-l-none sm:rounded-r-[8px] hover:bg-[#a87f4a] transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#FFFFFF]/40 max-w-[1232px] mx-auto">
          <p className="text-center text-[#FFFFFF] text-sm py-4 px-3">
            © 2025 Luxury Property Visits. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
