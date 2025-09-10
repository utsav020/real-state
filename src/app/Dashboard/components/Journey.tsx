import Image from "next/image";

const journey = [
  { id: 1, title: "Viewed", count: 1, icon: "👁️", image: "/images/Journy-1.png" },
  { id: 2, title: "Favorited", count: 1, icon: "❤️", image: "/images/Journey-2.png" },
  { id: 3, title: "Site Visits", count: 1, icon: "📍", image: "/images/Journey-3.png" },
  { id: 4, title: "Bookings", count: 1, icon: "💵", image: "/images/Journey-4.png" },
];

export default function Journey() {
  return (
    <div className="mt-6 max-w-[980px] mx-auto">
      <h3 className="font-semibold mb-4">My journey</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-[900px] mx-auto">
        {journey.map((item) => (
          <div
            key={item.id}
            className="bg-white w-[200px] h-[215px] rounded-lg shadow-sm p-4 flex flex-col"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={160}
              height={100}
              className="object-contain mb-2"
            />
            <div className="flex text-[18px] mt-[20px] gap-2 font-semibold">
              {item.icon} {item.title}
            </div>
            <p className="text-base flex items-center justify-between text-gray-500 mt-1">
              {item.count} Properties
              <span className="mt-2 text-gray-400">➔</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
