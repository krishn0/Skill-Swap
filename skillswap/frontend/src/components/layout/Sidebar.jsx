import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { name: "Home", to: "/home" },
    { name: "Browse Skills", to: "/browse-skills" },
    { name: "My Swaps", to: "/my-swaps" },
    
    { name: "Profile", to: "/profile" },
  ];

  return (
    <aside className="fixed top-24 left-4 w-64 bg-black dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-4 min-h-[calc(100vh-6rem)]">
      <nav className="flex flex-col space-y-2">
        {links.map(({ name, to }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center px-4 py-2 rounded-lg font-medium transition ${
              location.pathname === to
                ? "bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-800"
            }`}
          >
            <span>{name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

