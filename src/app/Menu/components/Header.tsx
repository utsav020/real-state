"use client";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed max-w-[1920px] h-[80px] top-0 left-0 right-0 z-50 w-full bg-white shadow">
      <div className="max-w-[1560px] mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Real estate</h1>
        <button onClick={onMenuClick} className="text-3xl focus:outline-none">
          &#9776; {/* Hamburger Icon */}
        </button>
      </div>
    </header>
  );
}
