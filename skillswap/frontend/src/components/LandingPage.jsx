import React from "react";
import { Link } from "react-router-dom";
import { Search, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div
      className="min-h-screen bg-[#0E0E1C] font-inter px-6 py-10 text-white"
      style={{ fontFeatureSettings: "'liga' off" }}
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-12">
        <h1 className="text-3xl font-poppins font-bold tracking-tight">SkillSwap</h1>
        <nav className="flex space-x-8 text-[#A0A3B1] font-semibold">
          <Link
            to="/browse-skills"
            className="px-4 py-2 rounded-2xl hover:text-white hover:shadow-[0_0_8px_#8A63F7] transition"
          >
            Browse Skills
          </Link>
          <a
            href="#how-it-works"
            className="px-4 py-2 rounded-2xl hover:text-white hover:shadow-[0_0_8px_#8A63F7] transition"
          >
            How It Works
          </a>
          <Link
            to="/login"
            className="px-4 py-2 rounded-2xl border border-white/12 hover:shadow-[0_0_8px_#8A63F7] transition"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 rounded-2xl bg-gradient-to-r from-[#8A63F7] to-[#FF4F81] font-semibold shadow-md hover:shadow-[0_0_20px_#FF4F81] transition"
          >
            Sign Up
          </Link>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-poppins font-bold mb-6 tracking-tight"
          >
            <span
              className="bg-gradient-to-r from-[#8A63F7] via-[#FF4F81] to-[#FF4F81] bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% auto",
                animation: "gradientShift 4s linear infinite",
              }}
            >
              Swap Skills, Grow Together.
            </span>
          </motion.h2>
          <p className="text-[#A0A3B1] text-lg mb-8 max-w-lg">
            Discover people to exchange knowledge, hobbies, and expertise with. No money — just skills.
          </p>
          <div className="space-x-6">
            <Link
              to="/home"
              className="inline-block px-8 py-3 rounded-3xl bg-gradient-to-r from-[#8A63F7] to-[#FF4F81] font-semibold shadow-lg hover:shadow-[0_0_25px_#8A63F7] transition transform hover:scale-[1.03]"
            >
              Join the Community
            </Link>
            <Link
              to="/browse-skills"
              className="inline-block px-8 py-3 rounded-3xl border border-white/12 text-[#A0A3B1] hover:text-white hover:shadow-[0_0_15px_#8A63F7] transition"
            >
              Browse Skills
            </Link>
          </div>
        </div>

       
      </div>

      {/* Search Skills - Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-3xl mx-auto mb-20 p-8 rounded-3xl"
        style={{
          backdropFilter: "blur(16px)",
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 0 30px rgba(138, 99, 247, 0.1)",
        }}
      >
        <h3 className="text-3xl font-poppins font-semibold mb-6">Search for a Skill</h3>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="e.g. Photoshop, Cooking, Guitar..."
            className="flex-1 rounded-2xl bg-transparent border border-white/12 px-5 py-3 text-white placeholder-[#A0A3B1] focus:outline-none focus:ring-2 focus:ring-[#00D4FF] transition"
          />
          <button
            className="rounded-2xl border border-white/12 px-5 py-3 flex items-center justify-center text-white hover:shadow-[0_0_15px_#00D4FF] transition"
            aria-label="Search"
          >
            <Search className="w-6 h-6" />
          </button>
        </div>
      </motion.div>

      {/* How It Works */}
      <div id="how-it-works" className="max-w-6xl mx-auto mb-24 grid md:grid-cols-3 gap-10">
        {[
          {
            icon: <Users className="w-14 h-14 text-[#FF4F81] mx-auto mb-6" />,
            title: "Create a Profile",
            desc: "List your skills, what you want to learn, and when you're available.",
          },
          {
            icon: <Search className="w-14 h-14 text-[#FF4F81] mx-auto mb-6" />,
            title: "Find Swaps",
            desc: "Browse or search skills and connect with members to exchange knowledge.",
          },
          {
            icon: <Star className="w-14 h-14 text-[#FF4F81] mx-auto mb-6" />,
            title: "Swap & Rate",
            desc: "Meet up, exchange skills, and leave feedback to help others too.",
          },
        ].map(({ icon, title, desc }, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #8A63F7" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-8 rounded-3xl text-center cursor-default"
            style={{
              backdropFilter: "blur(16px)",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: "0 0 30px rgba(138, 99, 247, 0.1)",
            }}
          >
            {icon}
            <h4 className="text-2xl font-poppins font-semibold mb-3">{title}</h4>
            <p className="text-[#A0A3B1] max-w-sm mx-auto">{desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-3xl mx-auto text-center p-12 rounded-3xl"
        style={{
          backdropFilter: "blur(16px)",
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 0 30px rgba(138, 99, 247, 0.15)",
        }}
      >
        <h3 className="text-4xl font-poppins font-bold mb-6">Ready to Share What You Know?</h3>
        <p className="text-[#A0A3B1] mb-8 max-w-lg mx-auto">
          Join thousands of learners swapping skills worldwide.
        </p>
        <Link
          to="/profile"
          className="inline-block px-10 py-4 rounded-3xl bg-gradient-to-r from-[#8A63F7] to-[#FF4F81] font-semibold shadow-md hover:shadow-[0_0_30px_#FF4F81] transition transform hover:scale-[1.05]"
        >
          Create Your Profile
        </Link>
      </motion.div>

      {/* Footer */}
      <footer className="text-center text-[#A0A3B1] text-sm mt-16 mb-6">
        © 2025 SkillSwap — Built by ELEEts
      </footer>

      {/* Gradient animation CSS */}
      <style>
        {`
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 200% 50%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;
