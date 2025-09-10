"use client";

import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full max-w-[900px] flex items-center justify-center">
      <div className="w-full p-8 rounded-lg">
        {/* Title */}
        <h2 className="text-center text-[20px] font-medium text-[#3E362E] mb-6">
          Contact Detail
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Row 1 */}
          <div className="flex justify-between">
            <div className="w-[380px] h-[75px]">
              <label className="block text-[18px] font-medium text-[#3E362E] mb-1.5">
                First Name
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-[#D1D5DB] bg-[#FFFFFF] px-3 py-2 focus:ring-none outline-none"
              />
            </div>
            <div className="w-[380px] h-[75px]">
              <label className="block text-[18px] font-medium text-[#3E362E] mb-1.5">
                Last Name
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-[#D1D5DB] bg-[#FFFFFF] px-3 py-2 focus:ring-none outline-none"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex justify-between">
            <div className="w-[380px] h-[75px]">
              <label className="block text-[18px] font-medium text-[#3E362E] mb-1.5">
                Number
              </label>
              <div className="flex items-center border bg-[#FFFFFF] border-gray-300 rounded-md px-3">
                <Phone size={18} className="text-gray-500 mr-2" />
                <input
                  type="text"
                  className="w-full py-2 outline-none"
                  placeholder="Enter number"
                />
              </div>
            </div>
            <div className="w-[380px] h-[75px]">
              <label className="block text-[18px] font-medium text-[#3E362E] mb-1.5">
                Email
              </label>
              <div className="flex items-center bg-[#FFFFFF] border border-gray-300 rounded-md px-3">
                <Mail size={18} className="text-gray-500 mr-2" />
                <input
                  type="email"
                  className="w-full py-2 outline-none"
                  placeholder="example@gmail.com"
                />
                <span className="text-green-600 font-bold">✔</span>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex justify-between">
            <div className="w-[380px] h-[75px]">
              <label className="block text-[18px] font-medium text-[#3E362E] mb-1.5">
                Pin code
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-[#D1D5DB] bg-[#FFFFFF] px-3 py-2 focus:ring-none outline-none"
              />
            </div>
            <div className="w-[380px] h-[75px]">
              <label className="block text-[18px] font-medium text-[#3E362E] mb-1.5">
                City
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-[#D1D5DB] bg-[#FFFFFF] px-3 py-2 focus:ring-none outline-none"
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex justify-between">
            <div className="w-[380px] h-[75px]">
              <label className="block text-[18px] font-medium text-[#3E362E] mb-1.5">
                State
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-[#D1D5DB] bg-[#FFFFFF] px-3 py-2 focus:ring-none outline-none"
              />
            </div>
            <div className="w-[380px] h-[75px]">
              <label className="block text-[18px] font-medium text-[#3E362E] mb-1.5">
                Country
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-[#D1D5DB] bg-[#FFFFFF] px-3 py-2 focus:ring-none outline-none"
              />
            </div>
          </div>

          {/* Address */}
          <div className="w-[840px] h-[119px]">
            <label className="block text-[18px] font-medium text-[#3E362E] mb-1.5">
              Address
            </label>
            <textarea
              rows={3}
              className="w-full rounded-md border border-[#D1D5DB] bg-[#FFFFFF] px-3 py-2 focus:ring-none outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#3E362E] text-white px-6 py-2 rounded-md shadow hover:bg-[#2c2a28]"
            >
              Save Detail
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
