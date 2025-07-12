import React, { useEffect, useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import Button from "../components/ui/Button";
import axios from "axios";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch notifications from backend
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:5000/api/notifications");
        setNotifications(res.data);
      } catch (err) {
        setError("Failed to load notifications");
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  // Mark all notifications as read handler
  const markAllAsRead = async () => {
    try {
      await axios.post("http://localhost:5000/api/notifications/mark-all-read");
      // Update local state to mark all as read
      setNotifications((prev) =>
        prev.map((notif) => ({ ...notif, read: true }))
      );
    } catch (err) {
      setError("Failed to mark notifications as read");
    }
  };

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
          <h1 className="text-4xl font-bold text-purple-400 mb-8">Notifications</h1>

          {loading ? (
            <p className="text-gray-400">Loading notifications...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : notifications.length === 0 ? (
            <p className="text-gray-400">You have no notifications.</p>
          ) : (
            <ul className="space-y-4">
              {notifications.map(({ id, text, read, time }) => (
                <li
                  key={id}
                  className={`p-4 rounded-lg border ${
                    read ? "border-gray-700 bg-gray-800" : "border-purple-500 bg-gray-700"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <p className={`${read ? "text-gray-300" : "text-white"} font-medium`}>
                      {text}
                    </p>
                    <span className="text-sm text-purple-400">{time}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {notifications.length > 0 && !loading && (
            <div className="mt-8 flex justify-end">
              <Button variant="outline" onClick={markAllAsRead}>
                Mark all as read
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Notifications;
