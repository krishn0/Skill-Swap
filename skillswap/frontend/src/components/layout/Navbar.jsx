import React, { useState } from "react";
import { Bell, Settings, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      className="
        fixed top-4 left-4 right-4 z-50
        rounded-3xl
        bg-[rgba(255,255,255,0.05)]
        backdrop-blur-[16px]
        border border-[rgba(255,255,255,0.12)]
        shadow-[0_0_15px_rgba(0,0,0,0.3)]
        flex items-center justify-between
        px-8 py-3
        text-white
        font-manrope
      "
      role="banner"
    >
      {/* Left side - Brand */}
      <div className="font-bold text-xl select-none cursor-default text-[#8A63F7]">
        Skill Swap
      </div>

      {/* Right side - Icons */}
      <div className="flex items-center space-x-6">
        <button
          className="hover:bg-[rgba(138,99,247,0.15)] rounded-lg p-1 transition"
          aria-label="Notifications"
          title="Notifications"
        >
          <Bell size={22} />
        </button>

        <button
          onClick={toggleTheme}
          className="hover:bg-[rgba(138,99,247,0.15)] rounded-lg p-1 transition"
          aria-label="Toggle theme"
          title="Toggle Theme"
          type="button"
        >
          {darkMode ? <Sun size={22} /> : <Moon size={22} />}
        </button>

        <button
          className="hover:bg-[rgba(138,99,247,0.15)] rounded-lg p-1 transition"
          aria-label="Settings"
          title="Settings"
        >
          <Settings size={22} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
