import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="bg-[#3a3531] w-full max-w-[980px] mx-auto text-white rounded-lg p-4 sm:p-6 lg:p-8">
      {/* ✅ Profile Info */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <Image
          src="/images/Profile-1.png"
          alt="Profile"
          width={80}
          height={80}
          className="rounded-full mx-auto sm:mx-0"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold">
            Jane Cooper
          </h2>
          <p className="text-base sm:text-lg lg:text-[24px] break-words">
            JaneCooper@gmail.com
          </p>
        </div>
      </div>

      {/* ✅ Details Grid */}
      <div className="mt-6 text-sm sm:text-base lg:text-[20px] grid grid-cols-2 xs:grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/30 pt-4">
        <div>
          <p className="font-semibold">Location:</p>
          <p className="text-[#D0D0D0]">Ahmadabad</p>
        </div>
        <div>
          <p className="font-semibold">Number:</p>
          <p className="text-[#D0D0D0]">1234567890</p>
        </div>
        <div>
          <p className="font-semibold">Status:</p>
          <p className="flex gap-2 items-center text-[#D0D0D0]">
            <span className="h-2 w-2 rounded-full bg-green-500 inline-block"></span>
            Active
          </p>
        </div>
        <div>
          <p className="font-semibold">Start Date:</p>
          <p className="text-[#D0D0D0]">1 May 2025</p>
        </div>
      </div>
    </div>
  );
}
