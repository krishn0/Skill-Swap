import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/users/${id}`);
        setUser(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setLoading(false);
      }
    };
    fetchProfile();
  }, [id]);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r h-screen fixed top-0 left-0 z-30">
        <Sidebar />
      </aside>

      {/* Page Content */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Navbar */}
        <header className="fixed top-0 left-64 right-0 h-16 bg-white border-b shadow z-20 flex items-center px-6">
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="pt-20 p-6 md:p-10 overflow-y-auto bg-gradient-to-br from-blue-50 to-purple-100 flex-1">
          {loading ? (
            <p className="text-center text-gray-500">Loading user profile...</p>
          ) : user ? (
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4" />
                <h1 className="text-3xl font-bold text-purple-800 mb-1">{user.name}</h1>
                <p className="text-gray-600">{user.location}</p>
              </div>

              <section className="mb-6">
                <h2 className="text-xl font-semibold text-purple-700 mb-2">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill, i) => (
                    <Badge key={i}>{skill}</Badge>
                  ))}
                </div>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold text-purple-700 mb-2">Availability</h2>
                <p>{user.availability}</p>
              </section>

              <div className="text-center">
                <Button variant="outline">Request Swap</Button>
              </div>
            </div>
          ) : (
            <p className="text-center text-red-500">User not found.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Profile;
