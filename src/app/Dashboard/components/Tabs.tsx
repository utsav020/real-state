interface TabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Tabs({ tabs, activeTab, setActiveTab }: TabsProps) {
  return (
    <div className="w-full scrollbar-hide max-w-[900px] mx-auto overflow-x-auto">
      <div className="flex justify-between sm:justify-evenly border-b border-gray-300 pb-2 min-w-max sm:min-w-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-3 py-2 text-sm sm:text-base md:text-lg lg:text-[22px] font-medium transition-colors ${
              activeTab === tab
                ? "text-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
            {/* underline animation */}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black rounded transition-all duration-300"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
