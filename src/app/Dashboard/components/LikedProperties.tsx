import Image from "next/image";
import { Heart } from "lucide-react";

const liked = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet consectetur. In nibh fames sollicitudin in placerat. Ut aliquet.",
    image: "/images/Like-1.png",
  },
];

export default function LikedProperties() {
  return (
    <div className="bg-[#f7f5f0] rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Liked properties</h3>
      <div className="space-y-4">
        {liked.map((l) => (
          <div
            key={l.id}
            className="flex gap-4 bg-white rounded-lg p-4 shadow-sm items-start"
          >
            <Image
              src={l.image}
              alt={l.title}
              width={80}
              height={80}
              className="rounded-md w-[100px] h-[100px] object-cover"
            />
            <div className="flex-1">
              <h4 className="font-semibold flex items-center justify-between">
                {l.title}
                <Heart className="text-red-500 fill-red-500 w-5 h-5" />
              </h4>
              <p className="text-sm text-gray-500">{l.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
