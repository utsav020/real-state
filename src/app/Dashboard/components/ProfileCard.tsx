import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="bg-[#3a3531] max-w-[980px] mx-auto text-white rounded-lg p-6">
      <div className="flex items-center gap-4">
        <Image
          src="/images/profile.jpg"
          alt="Profile"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div>
          <h2 className="text-2xl font-bold">Jane Cooper</h2>
          <p className="text-sm">JaneCooper@gmail.com</p>
        </div>
      </div>

      <div className="mt-6 text-[20px] max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/30 pt-4 text-sm">
        <div>
          <p className="font-semibold">Location:</p>
          <p className="text-[#D0D0D0]">Ahmadabad</p>
        </div>
        <div>
          <p className="font-semibold">Number:</p>
          <p className="text-[#D0D0D0] mt-[10px]">1234567890</p>
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
