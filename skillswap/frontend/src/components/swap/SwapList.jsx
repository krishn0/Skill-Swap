import React from "react";
import { CheckCircle, Clock, XCircle } from "lucide-react";

const SwapList = ({ swaps, type, onAccept, onReject, onCancel, onMarkComplete, onLeaveFeedback, emptyMessage }) => {
  if (!swaps.length) {
    return <p className="text-gray-400 italic">{emptyMessage}</p>;
  }

  return (
    <div className="space-y-4">
      {swaps.map((swap) => (
        <div
          key={swap.id}
          className="bg-gray-800 rounded-lg p-4 shadow-md flex flex-col md:flex-row justify-between items-start md:items-center"
        >
          <div>
            <p className="font-semibold text-purple-400">{swap.partnerName} ({swap.location})</p>
            <p className="text-gray-300">
              Offers <span className="text-white">{swap.skillOffered}</span> in exchange for <span className="text-white">{swap.skillRequested}</span>
            </p>
            <p className="text-sm text-gray-500">Availability: {swap.availability}</p>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* Status Icon */}
            {swap.status === "pending" && <Clock size={20} className="text-yellow-400" title="Pending" />}
            {swap.status === "accepted" && <CheckCircle size={20} className="text-green-400" title="Accepted" />}
            {swap.status === "completed" && <CheckCircle size={20} className="text-purple-500" title="Completed" />}
            {swap.status === "rejected" && <XCircle size={20} className="text-red-500" title="Rejected" />}

            {/* Action buttons */}
            {type === "incoming" && (
              <>
                <button
                  onClick={() => onAccept && onAccept(swap.id)}
                  className="bg-purple-600 hover:bg-purple-700 text-white rounded px-3 py-1 text-sm"
                >
                  Accept
                </button>
                <button
                  onClick={() => onReject && onReject(swap.id)}
                  className="bg-gray-600 hover:bg-gray-700 text-white rounded px-3 py-1 text-sm"
                >
                  Reject
                </button>
              </>
            )}

            {type === "outgoing" && (
              <button
                onClick={() => onCancel && onCancel(swap.id)}
                className="bg-red-600 hover:bg-red-700 text-white rounded px-3 py-1 text-sm"
              >
                Cancel
              </button>
            )}

            {type === "ongoing" && (
              <button
                onClick={() => onMarkComplete && onMarkComplete(swap.id)}
                className="bg-green-600 hover:bg-green-700 text-white rounded px-3 py-1 text-sm"
              >
                Mark Complete
              </button>
            )}

            {type === "completed" && (
              <button
                onClick={() => onLeaveFeedback && onLeaveFeedback(swap.id)}
                className="bg-purple-600 hover:bg-purple-700 text-white rounded px-3 py-1 text-sm"
              >
                Leave Feedback
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SwapList;
