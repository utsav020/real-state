import React from "react";

export default function Nav() {
  return (
    <div className="max-w-[1920px] h-[80px] shadow-md mx-auto">
      <div className="max-w-[1520px] pt-[18px] mx-auto  flex justify-between items-center">
        <div className="">
          <p className="text-[30px] text-[#000000]">Real estate</p>
        </div>
        <div className="flex w-[80px] flex-wrap justify-between items-center">
          <img src="/images/Profile.png" />
          <img src="/images/Menu.png" />
        </div>
      </div>
    </div>
  );
}
