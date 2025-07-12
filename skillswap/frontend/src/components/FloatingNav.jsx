import React from "react";
import { Heart, ShoppingCart, User, Search } from "lucide-react";
import { motion } from "framer-motion";

const FloatingNav = () => {
  return (
    <>
      {/* Logo top-left */}
      <motion.div
        className="fixed top-4 left-4 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="text-2xl font-extrabold tracking-wide select-none text-white font-['Outfit']">
          Virtual<span className="text-[#8A63F7]">Store</span>
        </div>
      </motion.div>

      {/* Search bar centered horizontally */}
      <motion.div
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[60%] max-w-xl backdrop-blur-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] rounded-full px-6 py-2 flex items-center shadow-[0_0_8px_rgba(138,99,247,0.4)]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Search className="w-5 h-5 text-[#A0A3B1] mr-3" />
        <input
          type="text"
          placeholder="Search products..."
          className="bg-transparent focus:outline-none w-full text-sm text-white placeholder-[#A0A3B1] font-['Manrope']"
        />
      </motion.div>

      {/* Icons top-right */}
      <motion.div
        className="fixed top-4 right-4 z-50 flex space-x-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
      >
        {/* Wishlist */}
        <button
          aria-label="Wishlist"
          className="w-10 h-10 backdrop-blur-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] rounded-full flex items-center justify-center shadow-md text-white hover:text-[#FF4F81] hover:shadow-[0_0_8px_#FF4F81] transition"
        >
          <Heart className="w-6 h-6" />
        </button>

        {/* Cart */}
        <button
          aria-label="Cart"
          className="relative w-10 h-10 backdrop-blur-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] rounded-full flex items-center justify-center shadow-md text-white hover:text-[#00D4FF] hover:shadow-[0_0_8px_#00D4FF] transition"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 font-semibold">
            3
          </span>
        </button>

        {/* Profile */}
        <button
          aria-label="Profile"
          className="w-10 h-10 backdrop-blur-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] rounded-full flex items-center justify-center shadow-md text-white hover:text-[#8A63F7] hover:shadow-[0_0_8px_#8A63F7] transition"
        >
          <User className="w-6 h-6" />
        </button>
      </motion.div>
    </>
  );
};

export default FloatingNav;
