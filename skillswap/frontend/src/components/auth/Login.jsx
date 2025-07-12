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
    <div className="min-h-screen bg-gradient-to-br from-[#6C63FF] to-[#FF6584] flex items-center justify-center px-4 py-12 font-inter">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-[10px] bg-white/30 border border-[#E4E6F1] rounded-2xl shadow-lg max-w-md w-full p-10"
        style={{ boxShadow: "inset 0 0 10px #ffffff80" }} // soft inner shadow
      >
        <h2
          className="text-4xl font-poppins font-bold text-[#2E2E48] mb-4 tracking-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          Welcome Back 👋
        </h2>
        <p
          className="text-[#6B6B8F] mb-10 text-base"
          style={{ letterSpacing: "-0.01em" }}
        >
          Login to your SkillSwap account
        </p>

        <form onSubmit={handleLogin} className="space-y-7">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-semibold text-[#2E2E48]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-xl border border-[#E4E6F1] bg-white/70 px-5 py-3 text-[#2E2E48] placeholder-[#6B6B8F] focus:outline-none focus:ring-2 focus:ring-[#00C9A7] transition"
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
              className="block mb-2 font-semibold text-[#2E2E48]"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full rounded-xl border border-[#E4E6F1] bg-white/70 px-5 py-3 text-[#2E2E48] placeholder-[#6B6B8F] focus:outline-none focus:ring-2 focus:ring-[#00C9A7] transition"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              spellCheck="false"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px #6C63FF" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-[#6C63FF] via-[#FF6584] to-[#FF6584] py-3 text-white font-semibold tracking-wide shadow-lg"
            style={{ letterSpacing: "-0.01em" }}
          >
            Sign In
          </motion.button>
        </form>

        <p
          className="text-center text-[#6B6B8F] mt-8 text-sm"
          style={{ letterSpacing: "-0.01em" }}
        >
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#FF6584] font-semibold hover:underline"
          >
            Create one
          </Link>
        </p>

        <Link
          to="/"
          className="block mt-5 text-center text-xs text-[#6B6B8F] hover:text-[#00C9A7] hover:underline transition"
        >
          ← Back to Landing
        </Link>
      </motion.div>
    </div>
  );
};

export default Login;
