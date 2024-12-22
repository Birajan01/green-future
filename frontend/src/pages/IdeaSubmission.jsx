import React, { useState } from 'react';

function IdeaSubmission() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    impact: '',
    resources: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle idea submission logic here
    console.log('Idea submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Submit Your Idea</h1>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Idea Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select a category</option>
              <option value="technology">Technology</option>
              <option value="process">Process Improvement</option>
              <option value="product">Product Innovation</option>
              <option value="service">Service Enhancement</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="impact">
              Expected Impact
            </label>
            <textarea
              id="impact"
              name="impact"
              value={formData.impact}
              onChange={handleChange}
              rows="3"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resources">
              Required Resources
            </label>
            <textarea
              id="resources"
              name="resources"
              value={formData.resources}
              onChange={handleChange}
              rows="3"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
            >
              Submit Idea
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default IdeaSubmission;
