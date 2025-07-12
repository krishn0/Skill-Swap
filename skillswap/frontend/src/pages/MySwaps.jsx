import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import SwapList from "../components/swap/SwapList";

const MySwaps = () => {
  const [tab, setTab] = useState("pending"); // pending | ongoing | completed
  const [swaps, setSwaps] = useState({
    incomingRequests: [],
    outgoingRequests: [],
    ongoingSwaps: [],
    completedSwaps: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE = "http://localhost:5000/api/swaps"; // Replace with your backend URL

  // Fetch swaps from backend
  const fetchSwaps = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_BASE);
      if (!res.ok) throw new Error("Failed to fetch swaps");
      const data = await res.json();
      setSwaps(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSwaps();
  }, []);

  // Helper to update swap state after backend actions
  const updateSwapsAfterAction = (updatedSwap) => {
    setSwaps((prev) => {
      const removeFrom = (arr) => arr.filter((s) => s.id !== updatedSwap.id);
      const incoming = removeFrom(prev.incomingRequests);
      const outgoing = removeFrom(prev.outgoingRequests);
      const ongoing = removeFrom(prev.ongoingSwaps);
      const completed = removeFrom(prev.completedSwaps);

      switch (updatedSwap.status) {
        case "pending":
          if (updatedSwap.isIncoming) {
            incoming.unshift(updatedSwap);
          } else {
            outgoing.unshift(updatedSwap);
          }
          break;
        case "accepted":
          ongoing.unshift(updatedSwap);
          break;
        case "completed":
          completed.unshift(updatedSwap);
          break;
        default:
          break;
      }

      return {
        incomingRequests: incoming,
        outgoingRequests: outgoing,
        ongoingSwaps: ongoing,
        completedSwaps: completed,
      };
    });
  };

  // Backend action calls + local update:
  const acceptRequest = async (id, isIncoming) => {
    try {
      const res = await fetch(`${API_BASE}/${id}/accept`, { method: "POST" });
      if (!res.ok) throw new Error("Accept failed");
      const updatedSwap = await res.json();
      updatedSwap.isIncoming = isIncoming;
      updateSwapsAfterAction(updatedSwap);
    } catch (err) {
      alert(err.message);
    }
  };

  const rejectRequest = async (id, isIncoming) => {
    try {
      const res = await fetch(`${API_BASE}/${id}/reject`, { method: "POST" });
      if (!res.ok) throw new Error("Reject failed");
      setSwaps((prev) => {
        const key = isIncoming ? "incomingRequests" : "outgoingRequests";
        return {
          ...prev,
          [key]: prev[key].filter((s) => s.id !== id),
        };
      });
    } catch (err) {
      alert(err.message);
    }
  };

  const cancelRequest = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/${id}/cancel`, { method: "POST" });
      if (!res.ok) throw new Error("Cancel failed");
      setSwaps((prev) => ({
        ...prev,
        outgoingRequests: prev.outgoingRequests.filter((s) => s.id !== id),
      }));
    } catch (err) {
      alert(err.message);
    }
  };

  const markCompleted = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/${id}/complete`, { method: "POST" });
      if (!res.ok) throw new Error("Mark complete failed");
      const updatedSwap = await res.json();
      updateSwapsAfterAction(updatedSwap);
    } catch (err) {
      alert(err.message);
    }
  };

  const leaveFeedback = async (id) => {
    const rating = prompt("Rate this swap (1-5):");
    const feedback = prompt("Leave your feedback:");

    if (!rating || !feedback) return;

    try {
      const res = await fetch(`${API_BASE}/${id}/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating, feedback }),
      });
      if (!res.ok) throw new Error("Feedback submission failed");
      const updatedSwap = await res.json();
      updateSwapsAfterAction(updatedSwap);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />

        <main
          className="flex-1 p-8 max-w-5xl mx-auto mt-28 ml-72 overflow-auto bg-gray-900 rounded-2xl shadow-inner"
          style={{ minHeight: "calc(100vh - 7rem)" }}
        >
          <h1 className="text-4xl font-bold mb-2 text-purple-500">My Swaps</h1>
          <p className="mb-8 text-purple-300">
            Manage your swap requests, ongoing swaps, and completed activities here.
          </p>

          {loading && <p>Loading swaps...</p>}
          {error && <p className="text-red-500">Error: {error}</p>}

          {!loading && !error && (
            <>
              {/* Tabs */}
              <div className="flex gap-6 mb-10 border-b border-gray-700">
                <button
                  className={`pb-3 font-semibold ${
                    tab === "pending"
                      ? "border-b-4 border-purple-500 text-purple-500"
                      : "text-purple-300 hover:text-purple-500"
                  }`}
                  onClick={() => setTab("pending")}
                >
                  📨 Pending Requests
                </button>
                <button
                  className={`pb-3 font-semibold ${
                    tab === "ongoing"
                      ? "border-b-4 border-purple-500 text-purple-500"
                      : "text-purple-300 hover:text-purple-500"
                  }`}
                  onClick={() => setTab("ongoing")}
                >
                  🔄 Ongoing Swaps
                </button>
                <button
                  className={`pb-3 font-semibold ${
                    tab === "completed"
                      ? "border-b-4 border-purple-500 text-purple-500"
                      : "text-purple-300 hover:text-purple-500"
                  }`}
                  onClick={() => setTab("completed")}
                >
                  📜 Completed Swaps
                </button>
              </div>

              {/* Tab Content */}
              {tab === "pending" && (
                <>
                  <h2 className="text-2xl font-semibold mb-4 text-purple-500">Incoming Requests</h2>
                  <SwapList
                    swaps={swaps.incomingRequests}
                    type="incoming"
                    onAccept={(id) => acceptRequest(id, true)}
                    onReject={(id) => rejectRequest(id, true)}
                    emptyMessage="You have no incoming swap requests. Browse skills to find partners!"
                  />

                  <h2 className="text-2xl font-semibold mt-10 mb-4 text-purple-500">Outgoing Requests</h2>
                  <SwapList
                    swaps={swaps.outgoingRequests}
                    type="outgoing"
                    onCancel={cancelRequest}
                    emptyMessage="You have no outgoing swap requests."
                  />
                </>
              )}

              {tab === "ongoing" && (
                <SwapList
                  swaps={swaps.ongoingSwaps}
                  type="ongoing"
                  onMarkComplete={markCompleted}
                  emptyMessage="No ongoing swaps at the moment. Accept or request swaps to get started!"
                />
              )}

              {tab === "completed" && (
                <SwapList
                  swaps={swaps.completedSwaps}
                  type="completed"
                  onLeaveFeedback={leaveFeedback}
                  emptyMessage="Your completed swaps will show up here."
                />
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default MySwaps;
