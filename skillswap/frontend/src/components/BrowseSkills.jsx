import React, { useState, useEffect } from "react";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import Button from "./ui/Button";
import ProfileCard from "./profile/ProfileCard";
import axios from "axios";

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
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside
        className="fixed top-0 left-0 h-full w-64 bg-black border-r border-gray-700 rounded-tr-2xl rounded-br-2xl shadow-lg z-30"
      >
        <Sidebar />
      </aside>

      {/* Main content container */}
      <div className="flex flex-col flex-1 ml-64 min-h-screen">
        {/* Navbar */}
        <header
          className="fixed top-0 left-64 right-0 h-16 bg-black border-b border-gray-700 shadow z-40 flex items-center px-6"
        >
          <Navbar />
        </header>

        {/* Main scrollable content */}
        <main
          className="pt-20 px-6 md:px-10 flex-1 overflow-auto max-w-7xl mx-auto"
          style={{ minHeight: "calc(100vh - 64px)" }}
        >
          <h1 className="text-4xl font-bold text-purple-500 mb-2">Browse Skills</h1>
          <p className="text-purple-300 mb-8">
            Find people offering the skills you need and request a swap!
          </p>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search skills or users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-white placeholder-purple-400 bg-gray-800 rounded-full border border-purple-600 px-6 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {/* Filters - horizontal row */}
          <div className="bg-gray-900 rounded-lg shadow p-4 mb-8 flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
            {/* Skill Category */}
            <div className="flex flex-col md:flex-row md:items-center md:space-x-2 min-w-[160px]">
              <label className="text-purple-400 font-semibold mb-1 md:mb-0 md:whitespace-nowrap">
                Skill Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-800 text-white rounded-lg border border-purple-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              >
                <option value="">All Categories</option>
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Availability */}
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 min-w-[220px]">
              <span className="text-purple-400 font-semibold mb-1 md:mb-0 md:whitespace-nowrap">
                Availability
              </span>
              <div className="flex space-x-3 flex-wrap">
                {availabilityOptions.map((opt, idx) => (
                  <label
                    key={idx}
                    className="flex items-center cursor-pointer select-none space-x-2 text-sm text-gray-300 hover:text-purple-400 transition"
                  >
                    <input
                      type="checkbox"
                      checked={availabilityFilter.includes(opt)}
                      onChange={() => toggleAvailability(opt)}
                      className="cursor-pointer w-4 h-4 rounded border-gray-600 bg-gray-700 checked:bg-purple-600 checked:border-purple-600 focus:ring-purple-400"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Public Only Toggle */}
            <div className="flex items-center space-x-3 min-w-[110px]">
              <label
                htmlFor="publicOnlyToggle"
                className="text-purple-400 font-semibold cursor-pointer select-none whitespace-nowrap"
              >
                Public Only
              </label>
              <div
                className={`w-11 h-6 rounded-full cursor-pointer relative transition ${
                  showPublicOnly ? "bg-purple-600" : "bg-gray-700"
                }`}
                onClick={() => setShowPublicOnly(!showPublicOnly)}
              >
                <span
                  className={`block w-5 h-5 bg-white rounded-full shadow transform transition-transform absolute top-0.5 left-0.5 ${
                    showPublicOnly ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </div>
            </div>

            {/* Reset Button aligned right */}
            <div className="flex-shrink-0 ml-auto">
              <Button
                variant="outline"
                onClick={resetFilters}
                className="text-purple-400 border-purple-400 hover:bg-purple-700 transition whitespace-nowrap"
              >
                Reset Filters
              </Button>
            </div>
          </div>

          {/* User cards */}
          {filteredUsers.length === 0 ? (
            <p className="text-gray-500">No users found for selected filters.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredUsers.map((user) => (
                <ProfileCard key={user._id} user={user} />
              ))}
            </div>
          )}

          {/* Load more / Pagination placeholder */}
          <div className="flex justify-center mt-10">
            <Button variant="outline">Load More</Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BrowseSkills;
