import Image from "next/image";
import { Heart } from "lucide-react";

interface PropertyCardProps {
  id: number;
  title: string;
  price: string;
  desc: string;
  image: string;
}

export default function PropertyCard({ title, price, desc, image }: PropertyCardProps) {
  return (
    <div className="bg-[#F4F4F4] mx-auto w-[520px] h-[216px] rounded-lg shadow-sm p-4 flex gap-4 items-start">
      {/* Property Image */}
      <div className="relative">
        <Image
          src={"/images/Like-1.png"}
          alt={title}
          width={160}
          height={176}
          className="rounded-lg w-[160px] h-[176px] object-cover"
        />
        <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
        </button>
      </div>

      {/* Property Info */}
      <div className="flex-1 h-[176px] border-2">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg">{title}</h3>
          <span className="font-semibold">{price}</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">{"Lorem ipsum dolor sit amet consectetur. In nibh fames sollicitudin in placerat. Ut aliquet. In nibh fames sollicitudin in placerat. Ut aliquet."}</p>

        {/* Buttons */}
        <div className="flex gap-3 mt-10">
          <button className="bg-[#3E362E] w-[135.15px] text-white px-4 py-2 rounded-[5px] text-sm">
            BOOK A VISIT
          </button>
          <button className="bg-green-500 w-[135.15px] text-white px-4 py-2 rounded-md text-sm hover:bg-green-600">
            CALL
          </button>
        </div>
      </div>
    </div>
  );
}
