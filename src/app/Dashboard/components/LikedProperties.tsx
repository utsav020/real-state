import Image from "next/image";
import { Heart } from "lucide-react";

const liked = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet consectetur. In nibh fames sollicitudin in placerat. Ut aliquet.",
    image: "/images/Like-1.png",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet consectetur. In nibh fames sollicitudin in placerat. Ut aliquet.",
    image: "/images/Like-1.png",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet consectetur. In nibh fames sollicitudin in placerat. Ut aliquet.",
    image: "/images/Like-1.png",
  },
];

export default function LikedProperties() {
  return (
    <div className="bg-[#f7f5f0] max-w-[960px] mx-auto mb-[30px]  rounded-lg p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-semibold mb-4">Liked properties</h3>
      <div className="space-y-4">
        {liked.map((l) => (
          <div
            key={l.id}
            className="flex flex-col sm:flex-row gap-4 bg-white rounded-lg p-4 shadow-sm items-start"
          >
            {/* Image */}
            <div className="flex w-full sm:w-[100px] md:w-[200px] h-[200px] relative">
              <Image
                src={l.image}
                alt={l.title}
                fill
                className="rounded-md object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h4 className="font-semibold text-base sm:text-lg">{l.title}</h4>
                <Heart className="text-red-500 fill-red-500 w-5 h-5 mt-1 sm:mt-0" />
              </div>
              <p className="text-sm sm:text-base text-gray-500 mt-1">{l.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
