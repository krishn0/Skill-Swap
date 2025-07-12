import React, { useState, useEffect } from "react";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import Button from "./ui/Button";
import ProfileCard from "./profile/ProfileCard";
import axios from "axios";
import { motion } from "framer-motion";

const categories = ["Design", "Music", "Coding", "Languages"];
const availabilityOptions = ["Weekends", "Evenings", "Mornings"];

const BrowseSkills = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState([]);
  const [showPublicOnly, setShowPublicOnly] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  const toggleAvailability = (option) => {
    setAvailabilityFilter((prev) =>
      prev.includes(option) ? prev.filter((a) => a !== option) : [...prev, option]
    );
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setAvailabilityFilter([]);
    setShowPublicOnly(false);
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      searchTerm === "" ||
      user.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
      user.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || user.skills.some((skill) => skill === selectedCategory);

    const matchesAvailability =
      availabilityFilter.length === 0 ||
      availabilityFilter.some((a) => user.availability.includes(a));

    const matchesStatus = !showPublicOnly || user.status === "Public";

    return matchesSearch && matchesCategory && matchesAvailability && matchesStatus;
  });

  return (
    <motion.div
      className="flex min-h-screen bg-[#0E0E1C] text-white font-['Inter']"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border-r border-[rgba(255,255,255,0.12)] rounded-tr-3xl rounded-br-3xl shadow-[0_0_30px_rgba(138,99,247,0.1)] z-30">
        <Sidebar />
      </aside>

      {/* Main content container */}
      <div className="flex flex-col flex-1 ml-64 min-h-screen">
        {/* Navbar */}
        <header className="fixed top-0 left-64 right-0 h-16 bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.12)] shadow z-40 flex items-center px-6">
          <Navbar />
        </header>

        {/* Main scrollable content */}
        <main
          className="pt-20 px-6 md:px-10 flex-1 overflow-auto max-w-7xl mx-auto"
          style={{ minHeight: "calc(100vh - 64px)" }}
        >
          <motion.h1
            className="text-4xl font-bold text-[#8A63F7] mb-2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Browse Skills
          </motion.h1>
          <p className="text-[#A0A3B1] mb-8">
            Find people offering the skills you need and request a swap!
          </p>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search skills or users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-white placeholder-[#A0A3B1] bg-[rgba(255,255,255,0.05)] backdrop-blur-lg border border-[rgba(255,255,255,0.12)] rounded-2xl px-6 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#8A63F7] transition"
            />
          </div>

          {/* Filters */}
          <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-lg rounded-2xl border border-[rgba(255,255,255,0.12)] shadow-[0_0_30px_rgba(138,99,247,0.1)] p-4 mb-8 flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
            {/* Filter sections remain unchanged */}
            {/* ... */}
          </div>

          {/* User Cards */}
          {filteredUsers.length === 0 ? (
            <p className="text-gray-500">No users found for selected filters.</p>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {filteredUsers.map((user) => (
                <motion.div
                  key={user._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProfileCard user={user} />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Load More Button */}
          <div className="flex justify-center mt-10">
            <Button variant="outline">Load More</Button>
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default BrowseSkills;
