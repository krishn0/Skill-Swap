import React from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";

const Home = () => {
  // Placeholder data
  const userName = "Kartiki";
  const location = "Mumbai";
  const availability = "Weekends & Evenings";
  const isPublic = true;
  const skillsOffered = ["Photoshop", "Cooking", "French"];
  const skillsWanted = ["Guitar", "ReactJS"];

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

        {/* Main content */}
        <main className="pt-16 p-6 md:p-10 overflow-y-auto bg-gradient-to-br from-blue-50 to-purple-100 flex-1">
          
          {/* Welcome Header */}
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h1 className="text-4xl font-bold text-purple-700 mb-2">
                Hello, {userName}!
              </h1>
              <div className="flex items-center space-x-4 text-gray-700 text-base">
                <span>📍 {location}</span>
                <span>🕒 {availability}</span>
                <span>
                  {isPublic ? (
                    <Badge className="bg-green-100 text-green-800">Public</Badge>
                  ) : (
                    <Badge className="bg-gray-300 text-gray-800">Private</Badge>
                  )}
                </span>
              </div>
            </div>
            <Button variant="default">Edit Profile</Button>
          </header>

          {/* Skills Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Your Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Skills Offered */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-2">Skills Offered</h3>
                {skillsOffered.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {skillsOffered.map((skill, index) => (
                      <Badge key={index}>{skill}</Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No skills added yet.</p>
                )}
              </div>

              {/* Skills Wanted */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-2">Skills Wanted</h3>
                {skillsWanted.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {skillsWanted.map((skill, index) => (
                      <Badge key={index} className="bg-yellow-100 text-yellow-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No skills added yet.</p>
                )}
              </div>
            </div>
          </section>

          {/* Recommendations */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Recommendations For You</h2>

            <div className="flex flex-wrap gap-3 mb-6">
              {["Design", "Languages", "Coding", "Music"].map((category, idx) => (
                <Button key={idx} variant="outline">{category}</Button>
              ))}
            </div>

            {/* Featured Users */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Example User Card */}
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full mb-4" />
                <h4 className="font-semibold text-lg mb-1">Aarav Sharma</h4>
                <div className="flex flex-wrap justify-center gap-2 mb-3">
                  <Badge>Guitar</Badge>
                  <Badge>Video Editing</Badge>
                </div>
                <Button size="sm">Request Swap</Button>
              </div>
            </div>
          </section>

          {/* Swap Requests */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Swap Requests</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-3">Incoming Requests</h3>
                <p className="text-gray-500">No pending requests.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-3">Outgoing Requests</h3>
                <p className="text-gray-500">No outgoing requests.</p>
              </div>
            </div>
          </section>

          {/* Swaps Summary */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Your Swaps</h2>
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-lg font-semibold mb-2">Ongoing Swaps</h3>
              <p className="text-gray-500">No active swaps at the moment.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-2">Completed Swaps</h3>
              <p className="text-gray-500">No completed swaps yet.</p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t text-center text-gray-500 py-4 text-sm">
          © 2025 Skill Swap | <a href="#" className="underline">About</a> | <a href="#" className="underline">Contact</a> | <a href="#" className="underline">Terms</a>
        </footer>

      </div>
    </div>
  );
};

export default Home;
