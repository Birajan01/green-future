import React from 'react';
import { BarChart2, ThumbsUp, MessageCircle, Clock } from 'lucide-react';

function Dashboard() {
  const ideas = [
    {
      id: 1,
      title: 'AI-Powered Customer Service',
      description: 'Implement AI chatbots for 24/7 customer support',
      votes: 42,
      comments: 15,
      status: 'In Review'
    },
    {
      id: 2,
      title: 'Green Energy Initiative',
      description: 'Solar panel installation for office buildings',
      votes: 38,
      comments: 12,
      status: 'Approved'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-xl shadow-lg text-white hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Total Ideas</h3>
            <BarChart2 className="w-6 h-6 text-white" />
          </div>
          <p className="text-4xl font-bold">24</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-xl shadow-lg text-white hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Total Votes</h3>
            <ThumbsUp className="w-6 h-6 text-white" />
          </div>
          <p className="text-4xl font-bold">156</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-xl shadow-lg text-white hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Comments</h3>
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <p className="text-4xl font-bold">89</p>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-6 rounded-xl shadow-lg text-white hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Pending</h3>
            <Clock className="w-6 h-6 text-white" />
          </div>
          <p className="text-4xl font-bold">7</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recent Ideas</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Title</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Description</th>
                <th className="py-3 px-4 text-center text-sm font-medium text-gray-600">Votes</th>
                <th className="py-3 px-4 text-center text-sm font-medium text-gray-600">Comments</th>
                <th className="py-3 px-4 text-center text-sm font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {ideas.map((idea) => (
                <tr key={idea.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 text-sm text-gray-800">{idea.title}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{idea.description}</td>
                  <td className="py-3 px-4 text-center text-sm text-gray-800">{idea.votes}</td>
                  <td className="py-3 px-4 text-center text-sm text-gray-800">{idea.comments}</td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        idea.status === 'Approved'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
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
