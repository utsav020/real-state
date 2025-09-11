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
    <div
      className="
        bg-[#3a3531] items-center justify-center md:w-[300px] text-white rounded-lg
        p-2 sm:p-4
        flex flex-col sm:flex-col
        gap-2 sm:gap-3
        overflow-x-auto sm:overflow-visible
        scrollbar-hide
        w-full sm:w-auto
      "
    >
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => setActive(item.title)}
          className={`
            flex items-center sm:justify-start gap-2 sm:gap-3
            px-4 py-2 rounded-md font-medium whitespace-nowrap
            transition-all duration-300
            flex-shrink-0
            ${
              active === item.title
                ? "bg-white text-black shadow"
                : "hover:bg-[#4a4541] text-white"
            }
          `}
        >
          <span className="text-lg sm:text-xl">{item.icon}</span>
          <span className="text-sm sm:text-base">{item.title}</span>
        </button>
      ))}
    </div>
  );
}
