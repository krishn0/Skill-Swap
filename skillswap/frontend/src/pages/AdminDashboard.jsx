import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/ui/Button";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [reports, setReports] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingReports, setLoadingReports] = useState(true);
  const [errorUsers, setErrorUsers] = useState(null);
  const [errorReports, setErrorReports] = useState(null);

  // Fetch users
  const fetchUsers = async () => {
    try {
      setLoadingUsers(true);
      setErrorUsers(null);
      const res = await axios.get("http://localhost:5000/api/admin/users");
      setUsers(res.data);
    } catch (err) {
      setErrorUsers("Failed to load users.");
    } finally {
      setLoadingUsers(false);
    }
  };

  // Fetch reports
  const fetchReports = async () => {
    try {
      setLoadingReports(true);
      setErrorReports(null);
      const res = await axios.get("http://localhost:5000/api/admin/reports");
      setReports(res.data);
    } catch (err) {
      setErrorReports("Failed to load reports.");
    } finally {
      setLoadingReports(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchReports();
  }, []);

  // Promote to admin
  const promoteToAdmin = async (userId) => {
    try {
      await axios.post(`http://localhost:5000/api/admin/users/${userId}/role`, {
        role: "admin",
      });
      fetchUsers();
    } catch {
      alert("Failed to promote user.");
    }
  };

  // Block/unblock user
  const toggleBlockUser = async (userId, block) => {
    try {
      await axios.post(`http://localhost:5000/api/admin/users/${userId}/block`, {
        block,
      });
      fetchUsers();
    } catch {
      alert(`Failed to ${block ? "block" : "unblock"} user.`);
    }
  };

  // Delete user
  const deleteUser = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/admin/users/${userId}`);
      fetchUsers();
    } catch {
      alert("Failed to delete user.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 max-w-7xl mx-auto space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6 text-purple-400">Admin Dashboard</h1>

        <h2 className="text-2xl mb-4">Users</h2>
        {loadingUsers ? (
          <p>Loading users...</p>
        ) : errorUsers ? (
          <p className="text-red-500">{errorUsers}</p>
        ) : (
          <table className="w-full border-collapse border border-gray-700 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-800 text-left">
                <th className="p-3 border border-gray-700">Name</th>
                <th className="p-3 border border-gray-700">Email</th>
                <th className="p-3 border border-gray-700">Role</th>
                <th className="p-3 border border-gray-700">Status</th>
                <th className="p-3 border border-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user._id}
                  className={`${
                    user.blocked ? "bg-red-900" : "bg-gray-800"
                  } hover:bg-gray-700`}
                >
                  <td className="p-3 border border-gray-700">{user.name}</td>
                  <td className="p-3 border border-gray-700">{user.email}</td>
                  <td className="p-3 border border-gray-700">{user.role}</td>
                  <td className="p-3 border border-gray-700">
                    {user.blocked ? (
                      <span className="text-red-400 font-semibold">Blocked</span>
                    ) : (
                      <span className="text-green-400 font-semibold">Active</span>
                    )}
                  </td>
                  <td className="p-3 border border-gray-700 flex gap-2 flex-wrap">
                    {user.role !== "admin" && (
                      <Button
                        variant="outline"
                        onClick={() => promoteToAdmin(user._id)}
                        className="whitespace-nowrap"
                      >
                        Promote to Admin
                      </Button>
                    )}
                    {user.blocked ? (
                      <Button
                        variant="default"
                        onClick={() => toggleBlockUser(user._id, false)}
                        className="whitespace-nowrap"
                      >
                        Unblock
                      </Button>
                    ) : (
                      <Button
                        variant="danger"
                        onClick={() => toggleBlockUser(user._id, true)}
                        className="whitespace-nowrap"
                      >
                        Block
                      </Button>
                    )}
                    <Button
                      variant="danger"
                      onClick={() => deleteUser(user._id)}
                      className="whitespace-nowrap"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section>
        <h2 className="text-2xl mb-4">User Reports</h2>
        {loadingReports ? (
          <p>Loading reports...</p>
        ) : errorReports ? (
          <p className="text-red-500">{errorReports}</p>
        ) : reports.length === 0 ? (
          <p>No reports found.</p>
        ) : (
          <ul className="space-y-4">
            {reports.map(({ _id, reportedUser, reason, createdAt }) => (
              <li key={_id} className="p-4 bg-gray-800 rounded">
                <p>
                  <strong>Reported User:</strong> {reportedUser.name} (
                  {reportedUser.email})
                </p>
                <p>
                  <strong>Reason:</strong> {reason}
                </p>
                <p className="text-sm text-gray-400">
                  Reported on: {new Date(createdAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default AdminDashboard;
