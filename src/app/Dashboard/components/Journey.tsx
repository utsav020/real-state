import Image from "next/image";

const journey = [
  { id: 1, title: "Viewed", count: 1, icon: "👁️", image: "/images/Journy-1.png" },
  { id: 2, title: "Favorited", count: 1, icon: "❤️", image: "/images/Journey-2.png" },
  { id: 3, title: "Site Visits", count: 1, icon: "📍", image: "/images/Journey-3.png" },
  { id: 4, title: "Bookings", count: 1, icon: "💵", image: "/images/Journey-4.png" },
];

export default function Journey() {
  return (
    <div className="mt-6 w-full px-4">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-gray-800 text-center md:text-left">
        My Journey
      </h3>

      {/* ✅ Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 max-w-[980px] mx-auto">
        {journey.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-between hover:shadow-lg transition-shadow"
          >
            {/* ✅ Image */}
            <Image
              src={item.image}
              alt={item.title}
              width={160}
              height={100}
              className="object-contain mb-3"
            />

            {/* ✅ Title + Icon */}
            <div className="flex items-center gap-2 text-base sm:text-lg md:text-xl font-semibold text-gray-700">
              <span>{item.icon}</span> {item.title}
            </div>

            {/* ✅ Properties Count */}
            <p className="text-sm sm:text-base text-gray-500 mt-2 flex items-center gap-2">
              {item.count} Properties
              <span className="text-gray-400">➔</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
