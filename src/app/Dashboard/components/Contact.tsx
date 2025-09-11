"use client";

import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-lg">
        {/* Title */}
        <h2 className="text-center text-xl sm:text-2xl font-medium text-[#3E362E] mb-6">
          Contact Detail
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Row 1: First Name + Last Name */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-base sm:text-lg font-medium text-[#3E362E] mb-1.5">
                First Name
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Enter first name"
              />
            </div>
            <div className="flex-1">
              <label className="block text-base sm:text-lg font-medium text-[#3E362E] mb-1.5">
                Last Name
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Enter last name"
              />
            </div>
          </div>

          {/* Row 2: Number + Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-base sm:text-lg font-medium text-[#3E362E] mb-1.5">
                Number
              </label>
              <div className="flex items-center border border-gray-300 rounded-md bg-white px-3 py-2">
                <Phone size={18} className="text-gray-500 mr-2" />
                <input
                  type="text"
                  className="w-full outline-none"
                  placeholder="Enter number"
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-base sm:text-lg font-medium text-[#3E362E] mb-1.5">
                Email
              </label>
              <div className="flex items-center border border-gray-300 rounded-md bg-white px-3 py-2">
                <Mail size={18} className="text-gray-500 mr-2" />
                <input
                  type="email"
                  className="w-full outline-none"
                  placeholder="example@gmail.com"
                />
                <span className="text-green-600 font-bold ml-2">✔</span>
              </div>
            </div>
          </div>

          {/* Row 3: Pin code + City */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-base sm:text-lg font-medium text-[#3E362E] mb-1.5">
                Pin code
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-base sm:text-lg font-medium text-[#3E362E] mb-1.5">
                City
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 outline-none"
              />
            </div>
          </div>

          {/* Row 4: State + Country */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-base sm:text-lg font-medium text-[#3E362E] mb-1.5">
                State
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-base sm:text-lg font-medium text-[#3E362E] mb-1.5">
                Country
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 outline-none"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-base sm:text-lg font-medium text-[#3E362E] mb-1.5">
              Address
            </label>
            <textarea
              rows={3}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 outline-none"
              placeholder="Enter your address"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#3E362E] text-white px-6 py-2 rounded-md shadow hover:bg-[#2c2a28] transition"
            >
              Save Detail
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
