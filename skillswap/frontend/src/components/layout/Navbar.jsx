import React, { useState } from "react";
import { Bell, Settings, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="fixed top-4 left-4 right-4 z-50 rounded-full shadow-md bg-black text-white flex items-center justify-between px-8 py-3 border border-gray-800">
      {/* Left Side - Skill Swap with distinct color */}
      <div className="font-bold text-xl select-none cursor-default text-purple-500">
        Skill Swap
      </div>

      {/* Right Side - Icons */}
      <div className="flex items-center space-x-6">
        <button
          className="hover:text-purple-400 transition"
          aria-label="Notifications"
          title="Notifications"
        >
          <Bell size={22} />
        </button>

        <button
          onClick={toggleTheme}
          className="hover:text-purple-400 transition"
          aria-label="Toggle theme"
          title="Toggle Theme"
        >
          {darkMode ? <Sun size={22} /> : <Moon size={22} />}
        </button>

        <button
          className="hover:text-purple-400 transition"
          aria-label="Settings"
          title="Settings"
        >
          <Settings size={22} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
