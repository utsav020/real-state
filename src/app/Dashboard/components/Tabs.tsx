interface TabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Tabs({ tabs, activeTab, setActiveTab }: TabsProps) {
  return (
    <div className="flex w-[900px] justify-evenly border-b border-gray-300 pb-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`text-[22px] cursor-pointer text-[#3E362E] mt-[10px] font-medium ${
            activeTab === tab
              ? "border-b-2 border-black text-black"
              : "text-gray-500"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
