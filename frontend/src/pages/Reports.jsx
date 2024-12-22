import React, { useState } from 'react';

function IdeaReport() {
  const [ideas, setIdeas] = useState([
    {
      title: 'AI-Powered Assistant',
      category: 'Technology',
      description: 'An AI assistant to automate customer support.',
      impact: 'Improves response time and reduces support costs.',
      resources: 'Development team, training data, and cloud resources.',
    },
    {
      title: 'Paperless Office Initiative',
      category: 'Process Improvement',
      description: 'Transition to a fully digital document system.',
      impact: 'Reduces paper waste and improves document accessibility.',
      resources: 'Document management software and staff training.',
    },
  ]);

  return (
    <div className="max-w-5xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Submitted Ideas Report</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {ideas.length === 0 ? (
          <p className="text-gray-700 text-center">No ideas submitted yet.</p>
        ) : (
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-4 py-2 text-left text-gray-800 font-bold">Title</th>
                <th className="px-4 py-2 text-left text-gray-800 font-bold">Category</th>
                <th className="px-4 py-2 text-left text-gray-800 font-bold">Description</th>
                <th className="px-4 py-2 text-left text-gray-800 font-bold">Impact</th>
                <th className="px-4 py-2 text-left text-gray-800 font-bold">Resources</th>
              </tr>
            </thead>
            <tbody>
              {ideas.map((idea, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                  } hover:bg-blue-50`}
                >
                  <td className="px-4 py-2 text-gray-700">{idea.title}</td>
                  <td className="px-4 py-2 text-gray-700">{idea.category}</td>
                  <td className="px-4 py-2 text-gray-700">{idea.description}</td>
                  <td className="px-4 py-2 text-gray-700">{idea.impact}</td>
                  <td className="px-4 py-2 text-gray-700">{idea.resources}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default IdeaReport;
