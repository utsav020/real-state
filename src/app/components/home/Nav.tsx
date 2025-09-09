import { Import } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="fixed max-w-[1920px] top-0 left-0 right-0 z-50 w-full bg-white px-4 sm:px-6 md:px-8 shadow">
      <div className="max-w-[1520px] pt-[18px] mx-auto flex justify-between items-center">
        <div className="">
          <p className="text-[30px] text-[#000000]">Real estate</p>
        </div>
        <div className="flex w-[80px] flex-wrap justify-between items-center">
          <Link href={"/Dashboard"}>
            <img src="/images/Profile.png" />
          </Link>
          <img src="/images/Menu.png" />
        </div>
      </div>
    </div>
  );
}
