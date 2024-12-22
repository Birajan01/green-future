import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#3D2B1F] to-[#708238] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-200 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-200 ease-in-out"
            >
              Dashboard
            </Link>
            <Link
              to="/submit-idea"
              className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-200 ease-in-out"
            >
              Submit Idea
            </Link>
          </div>

          {/* Logo Section */}
          <div className="flex items-center justify-center">
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-green-500 animate-pulse" />
              <span className="ml-2 text-2xl font-extrabold text-white tracking-wide">
                Green<span className="text-[#FFFFFF]">Future</span>
              </span>
              <Leaf className="h-8 ml-2 w-8 text-green-500 animate-pulse" />
            </Link>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-200 ease-in-out"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-[#d3a95c] text-gray-900 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-[#c6893e] transition-colors duration-200 ease-in-out"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-white"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#3D2B1F] py-4">
          <nav className="space-y-4 px-4">
            <Link
              to="/"
              className="block text-white text-lg font-medium hover:text-gray-300 transition-colors duration-200 ease-in-out"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="block text-white text-lg font-medium hover:text-gray-300 transition-colors duration-200 ease-in-out"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/submit-idea"
              className="block text-white text-lg font-medium hover:text-gray-300 transition-colors duration-200 ease-in-out"
              onClick={() => setMobileMenuOpen(false)}
            >
              Submit Idea
            </Link>
            <Link
              to="/login"
              className="block text-white text-lg font-medium hover:text-gray-300 transition-colors duration-200 ease-in-out"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block bg-[#d3a95c] text-gray-900 text-center px-5 py-2 rounded-full font-semibold shadow-md hover:bg-[#c6893e] transition-colors duration-200 ease-in-out"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
