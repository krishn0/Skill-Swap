import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
  };

  return (
    <div
      className="min-h-screen bg-[#0E0E1C] flex items-center justify-center px-6 py-12 font-inter text-white"
      style={{ fontFeatureSettings: "'liga' off" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-[16px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] rounded-3xl shadow-[0_0_30px_rgba(138,99,247,0.15)] max-w-md w-full p-10"
        style={{ boxShadow: "inset 0 0 15px rgba(255,255,255,0.1)" }} // soft inner glow
      >
        <h2
          className="text-4xl font-poppins font-bold text-white mb-4 tracking-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          Welcome Back 👋
        </h2>
        <p
          className="text-[#A0A3B1] mb-10 text-base"
          style={{ letterSpacing: "-0.01em" }}
        >
          Login to your SkillSwap account
        </p>

        <form onSubmit={handleLogin} className="space-y-7">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-semibold text-white"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-2xl bg-transparent border border-[rgba(255,255,255,0.12)] px-5 py-3 text-white placeholder-[#A0A3B1] focus:outline-none focus:ring-2 focus:ring-[#00D4FF] transition"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              spellCheck="false"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 font-semibold text-white"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full rounded-2xl bg-transparent border border-[rgba(255,255,255,0.12)] px-5 py-3 text-white placeholder-[#A0A3B1] focus:outline-none focus:ring-2 focus:ring-[#00D4FF] transition"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              spellCheck="false"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px #8A63F7" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full rounded-3xl bg-gradient-to-r from-[#8A63F7] via-[#FF4F81] to-[#FF4F81] py-3 text-white font-semibold tracking-wide shadow-lg"
            style={{ letterSpacing: "-0.01em" }}
          >
            Sign In
          </motion.button>
        </form>

        <p
          className="text-center text-[#A0A3B1] mt-8 text-sm"
          style={{ letterSpacing: "-0.01em" }}
        >
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#FF4F81] font-semibold hover:underline"
          >
            Create one
          </Link>
        </p>

        <Link
          to="/"
          className="block mt-5 text-center text-xs text-[#A0A3B1] hover:text-[#00D4FF] hover:underline transition"
        >
          ← Back to Landing
        </Link>
      </motion.div>
    </div>
  );
};

export default Login;
