import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-teal-600 text-center mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div className="mb-6">
            <label className="block text-teal-600 text-sm font-medium mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label className="block text-teal-600 text-sm font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-teal-600 text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6">
            <label className="block text-teal-600 text-sm font-medium mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700 focus:outline-none transition"
            >
              Sign Up
            </button>
          </div>

          {/* Links for Login */}
          <div className="flex justify-between items-center text-sm">
            <Link to="/login" className="text-teal-600 hover:text-teal-700">
              Already have an account? Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
