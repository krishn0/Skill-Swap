import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // 👉 You can connect your login API here
    console.log("Logging in with", email, password);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen flex items-center justify-center text-gray-800">
      <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Welcome Back 👋</h2>
        <p className="text-center text-gray-500 mb-8">Login to your SkillSwap account</p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded font-semibold"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-purple-600 font-medium hover:underline">Create one</Link>
        </p>

        <Link to="/" className="block text-center text-sm text-gray-400 mt-4 hover:underline">← Back to Landing</Link>
      </div>
    </div>
  );
};

export default Login;
