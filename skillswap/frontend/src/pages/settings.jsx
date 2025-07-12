import React from "react";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import Button from "../components/ui/Button";

const Settings = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-gray-700 h-screen fixed top-0 left-0 z-30 rounded-tr-2xl rounded-br-2xl shadow-lg">
        <Sidebar />
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Navbar */}
        <header className="fixed top-0 left-64 right-0 h-16 bg-gray-900 border-b border-gray-700 shadow z-40 flex items-center px-6 rounded-bl-2xl">
          <Navbar />
        </header>

        <main className="pt-20 p-8 flex-1 overflow-y-auto max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-purple-400 mb-8">Settings</h1>

          <section className="mb-8 bg-gray-800 rounded-lg p-6 shadow-inner border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>

            <div className="space-y-4 max-w-md">
              <div>
                <label className="block mb-1 text-purple-300 font-medium">Username</label>
                <input
                  type="text"
                  className="w-full rounded px-3 py-2 bg-gray-900 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your username"
                />
              </div>

              <div>
                <label className="block mb-1 text-purple-300 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full rounded px-3 py-2 bg-gray-900 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block mb-1 text-purple-300 font-medium">Change Password</label>
                <input
                  type="password"
                  className="w-full rounded px-3 py-2 bg-gray-900 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="New password"
                />
              </div>

              <Button variant="default" className="w-full">
                Save Changes
              </Button>
            </div>
          </section>

          <section className="mb-8 bg-gray-800 rounded-lg p-6 shadow-inner border border-gray-700 max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Privacy</h2>

            <div className="flex items-center justify-between mb-4">
              <span className="text-purple-300">Make my profile public</span>
              <input type="checkbox" className="cursor-pointer" />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-purple-300">Show my availability</span>
              <input type="checkbox" className="cursor-pointer" />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Settings;
