import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/user/profile");
        setUserData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load profile data");
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="flex min-h-screen bg-[#0E0E1C] text-white font-inter">
      {/* Sidebar */}
      <aside className="fixed top-4 left-4 h-[calc(100vh-2rem)] w-64 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] backdrop-blur-[16px] rounded-3xl p-2 z-30">
        <Sidebar />
      </aside>

      {/* Page Content */}
      <div className="flex flex-col flex-1 ml-72 min-h-screen">
        {/* Navbar */}
        <header className="fixed top-4 left-72 right-4 z-40">
          <Navbar />
        </header>

        {/* Main content */}
        <main className="pt-24 p-6 md:p-10 flex-1 overflow-y-auto max-w-5xl mx-auto">
          {loading && (
            <p className="text-center p-10 text-[#A0A3B1]">Loading profile...</p>
          )}
          {error && (
            <p className="text-center p-10 text-red-500">{error}</p>
          )}

          {!loading && !error && userData && (
            <>
              <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                  <h1 className="text-4xl font-bold text-[#8A63F7] mb-2">
                    Hello, {userData.name}!
                  </h1>
                  <div className="flex flex-wrap items-center space-x-4 text-[#A0A3B1] text-base">
                    <span>📍 {userData.location}</span>
                    <span>🕒 {userData.availability}</span>
                    <span>
                      {userData.isPublic ? (
                        <Badge className="bg-green-600/20 text-green-400 border border-green-500">
                          Public
                        </Badge>
                      ) : (
                        <Badge className="bg-gray-600/30 text-gray-300 border border-gray-400">
                          Private
                        </Badge>
                      )}
                    </span>
                  </div>
                </div>
                <Button variant="default">Edit Profile</Button>
              </header>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#8A63F7] mb-4">Your Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] backdrop-blur-[10px] rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-[#A0A3B1] mb-2">Skills Offered</h3>
                    {userData.skillsOffered.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {userData.skillsOffered.map((skill, index) => (
                          <Badge key={index}>{skill}</Badge>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[#6B7280]">No skills added yet.</p>
                    )}
                  </div>

                  <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] backdrop-blur-[10px] rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-[#A0A3B1] mb-2">Skills Wanted</h3>
                    {userData.skillsWanted.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {userData.skillsWanted.map((skill, index) => (
                          <Badge key={index} className="bg-yellow-600/20 text-yellow-400 border border-yellow-500">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[#6B7280]">No skills added yet.</p>
                    )}
                  </div>
                </div>
              </section>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Home;
