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
    <aside
      className="
        fixed top-24 left-4 w-64
        rounded-3xl
        bg-[rgba(255,255,255,0.05)]
        backdrop-blur-[16px]
        border border-[rgba(255,255,255,0.12)]
        shadow-[0_0_15px_rgba(0,0,0,0.3)]
        min-h-[calc(100vh-6rem)]
        p-6
        flex flex-col space-y-4
        text-white
        font-manrope
      "
      aria-label="Sidebar navigation"
    >
      <nav className="flex flex-col space-y-3">
        {links.map(({ name, to }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`
                flex items-center px-5 py-3 rounded-2xl
                font-semibold text-lg
                transition
                ${
                  isActive
                    ? "bg-[rgba(138,99,247,0.3)] text-white"
                    : "text-[#A0A3B1] hover:bg-[rgba(138,99,247,0.15)] hover:text-white"
                }
              `}
              aria-current={isActive ? "page" : undefined}
            >
              {name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
