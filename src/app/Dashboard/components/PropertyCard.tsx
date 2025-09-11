import Image from "next/image";
import { Heart } from "lucide-react";

interface PropertyCardProps {
  id: number;
  title: string;
  price: string;
  desc: string;
  image: string;
}

export default function PropertyCard({
  title,
  price,
  desc,
  image,
}: PropertyCardProps) {
  return (
    <div className="bg-[#F4F4F4] w-full rounded-lg shadow-sm p-4 flex flex-col sm:flex-row gap-4 items-start">
      {/* Property Image */}
      <div className="relative w-full sm:w-[160px] h-[200px] sm:h-[176px] flex-shrink-0">
        <Image
          src={"/images/Like-1.png"}
          alt={title}
          fill
          className="rounded-lg object-cover"
        />
        <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
        </button>
      </div>

      {/* Property Info */}
      <div className="flex-1 flex flex-col h-full justify-between">
        {/* Title + Price */}
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-base sm:text-lg">{title}</h3>
            <span className="font-semibold text-sm sm:text-base">{price}</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-3">
            {desc}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <button className="flex-1 bg-[#3E362E] text-white px-4 py-2 rounded-md text-sm hover:bg-black transition">
            BOOK A VISIT
          </button>
          <button className="flex-1 bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600 transition">
            CALL
          </button>
        </div>
      </div>
    </div>
  );
}
