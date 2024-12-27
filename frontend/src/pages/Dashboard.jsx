import React, { useState, useEffect } from "react";
import { FaChartBar, FaThumbsUp, FaComment, FaClock } from "react-icons/fa";
import axios from "axios";

function Dashboard() {
  const [ideas, setIdeas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [summaryData, setSummaryData] = useState({
    totalIdeas: 0,
    totalVotes: 0,
    totalComments: 0,
    pendingIdeas: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get("http://localhost:5000/api/ideas");

        if (response.data && Array.isArray(response.data.ideas)) {
          const ideasArray = response.data.ideas;
          setIdeas(ideasArray);

          const totalVotes = ideasArray.reduce(
            (sum, idea) => sum + (idea.votes ? idea.votes.length : 0),
            0
          );
          const totalComments = ideasArray.reduce((sum, idea) => {
            return sum + (idea.comments ? idea.comments.length : 0);
          }, 0);
          const pendingIdeas = ideasArray.filter(
            (idea) => idea.status !== "Approved"
          ).length;

          setSummaryData({
            totalIdeas: ideasArray.length,
            totalVotes,
            totalComments,
            pendingIdeas,
          });
        } else {
          console.error("Invalid API response format:", response.data);
          setError("Invalid data received from the server.");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data. Please check the API.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="text-center text-xl">Loading ideas...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-xl text-red-500">Error: {error}</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
      <h1 className="text-3xl font-extrabold text-white mb-6 text-center">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Total Ideas</h3>
            <FaChartBar className="w-6 h-6 text-indigo-500" />
          </div>
          <p className="text-4xl font-bold text-indigo-600">
            {summaryData.totalIdeas}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Total Votes</h3>
            <FaThumbsUp className="w-6 h-6 text-green-500" />
          </div>
          <p className="text-4xl font-bold text-green-600">
            {summaryData.totalVotes}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Comments</h3>
            <FaComment className="w-6 h-6 text-purple-500" />
          </div>
          <p className="text-4xl font-bold text-purple-600">
            {summaryData?.totalComments}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Pending</h3>
            <FaClock className="w-6 h-6 text-orange-500" />
          </div>
          <p className="text-4xl font-bold text-orange-600">
            {summaryData.pendingIdeas}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Recent Ideas
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-gray-700">Title</th>
                <th className="text-left py-3 px-4 text-gray-700">
                  Description
                </th>
                <th className="text-center py-3 px-4 text-gray-700">Votes</th>
                <th className="text-center py-3 px-4 text-gray-700">
                  Comments
                </th>
                <th className="text-center py-3 px-4 text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {ideas.map((idea) => (
                <tr
                  key={idea._id || idea.id}
                  className="border-b hover:bg-gray-50 transition-colors duration-200 ease-in-out"
                >
                  <td className="py-3 px-4 text-gray-800">{idea.title}</td>
                  <td className="py-3 px-4 text-gray-600">
                    {idea.description}
                  </td>
                  <td className="py-3 px-4 text-center text-gray-800">
                    {idea.votes?.length || 0}
                  </td>
                  <td className="text-center py-3 px-4 text-gray-800">
                    {idea.comments?.length || 0}
                  </td>
                  <td className="text-center py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        idea.status?.trim().toLowerCase() === "approved"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {idea.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
