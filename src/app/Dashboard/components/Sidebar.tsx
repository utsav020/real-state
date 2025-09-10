interface SidebarProps {
  active: string;
  setActive: (tab: string) => void;
}

const items = [
  { id: 1, title: "Viewed", icon: "👁️" },
  { id: 2, title: "Favorited", icon: "❤️" },
  { id: 3, title: "Site Visits", icon: "📍" },
  { id: 4, title: "Bookings", icon: "💵" },
];

export default function Sidebar({ active, setActive }: SidebarProps) {
  return (
    <div className="bg-[#3a3531] ml-[10px] text-white rounded-lg p-4 space-y-2 h-fit">
      {items.map((item, index) => (
        <div key={item.id}>
          <button
            onClick={() => setActive(item.title)}
            className={`flex items-center justify-center gap-3 w-full py-3 rounded-md font-medium transition ${
              active === item.title
                ? "bg-white text-black shadow"
                : "hover:bg-[#4a4541]"
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </button>
          {/* Divider except last */}
          {index !== items.length - 1 && (
            <hr className="border-gray-400/50 my-2" />
          )}
        </div>
      ))}
    </div>
  );
}
