import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

const OwnProfile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      fetchOwnProfile();
    }
  }, [userId]);

  const fetchOwnProfile = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/users/${userId}`);
      setUser(res.data);
    } catch (error) {
      console.error("Failed to fetch own profile:", error);
    }
  };

  if (!userId) {
    return (
      <div className="flex min-h-screen bg-gray-900 text-white">
        <aside className="w-64 bg-gray-900 border-r border-gray-700 h-screen fixed top-0 left-0 z-30 rounded-tr-2xl rounded-br-2xl shadow-lg">
          <Sidebar />
        </aside>

        <div className="flex-1 flex flex-col ml-64">
          <header className="fixed top-0 left-64 right-0 h-16 bg-gray-900 border-b border-gray-700 shadow z-40 flex items-center px-6 rounded-bl-2xl">
            <Navbar />
          </header>

          <main className="pt-20 p-8 flex-1 bg-gray-800 flex items-center justify-center">
            <div className="max-w-lg text-center">
              <h2 className="text-2xl font-semibold mb-6 text-purple-400">
                Please log in to view your profile.
              </h2>
              <Button variant="default" onClick={() => navigate("/login")}>
                Go to Login
              </Button>
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen bg-gray-900 text-white">
        <aside className="w-64 bg-gray-900 border-r border-gray-700 h-screen fixed top-0 left-0 z-30 rounded-tr-2xl rounded-br-2xl shadow-lg">
          <Sidebar />
        </aside>

        <div className="flex-1 flex flex-col ml-64">
          <header className="fixed top-0 left-64 right-0 h-16 bg-gray-900 border-b border-gray-700 shadow z-40 flex items-center px-6 rounded-bl-2xl">
            <Navbar />
          </header>

          <main className="pt-20 p-8 flex-1 bg-gray-800 flex items-center justify-center">
            <div className="max-w-lg text-center">
              <h2 className="text-2xl font-semibold text-purple-400">Loading your profile...</h2>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <aside className="w-64 bg-gray-900 border-r border-gray-700 h-screen fixed top-0 left-0 z-30 rounded-tr-2xl rounded-br-2xl shadow-lg">
        <Sidebar />
      </aside>

      <div className="flex-1 flex flex-col ml-64">
        <header className="fixed top-0 left-64 right-0 h-16 bg-gray-900 border-b border-gray-700 shadow z-40 flex items-center px-6 rounded-bl-2xl">
          <Navbar />
        </header>

        <main className="pt-20 px-6 md:px-10 flex-1 overflow-y-auto bg-gray-800 flex items-center justify-center">
          <div className="max-w-lg w-full bg-gray-900 rounded-lg p-8 shadow-inner border border-gray-700">
            <h1 className="text-4xl font-bold text-purple-400 mb-8 text-center">My Profile</h1>

            <div className="flex items-center mb-6 space-x-6">
              <div className="w-28 h-28 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 text-5xl select-none">
                {user.name ? user.name.charAt(0).toUpperCase() : "U"}
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-white">{user.name}</h2>
                <p className="text-gray-400">{user.location || "Location not set"}</p>
              </div>
            </div>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-purple-300">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {user.skills && user.skills.length > 0 ? (
                  user.skills.map((skill, i) => <Badge key={i}>{skill}</Badge>)
                ) : (
                  <p className="text-gray-500">No skills added yet.</p>
                )}
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-purple-300">Availability</h3>
              <p>{user.availability || "Not specified"}</p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-purple-300">Profile Status</h3>
              <Badge
                className={
                  user.status === "Public"
                    ? "bg-green-700 text-green-200"
                    : "bg-gray-700 text-gray-400"
                }
              >
                {user.status || "Unknown"}
              </Badge>
            </section>

            <div className="flex justify-start gap-4 mt-6">
              <Button variant="outline" onClick={() => navigate("/edit-profile")}>
                Edit Profile
              </Button>
              <Button variant="default">Change Password</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OwnProfile;
