import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLeaf, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Track dropdown state

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Close dropdown when a link is clicked
  const handleLinkClick = () => {
    setDropdownOpen(false); // Close the dropdown
    setMobileMenuOpen(false); // Close mobile menu
  };

  return (
    <header className="bg-gradient-to-r from-[#3D2B1F] to-[#708238] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center justify-center">
            <Link to="/" className="flex items-center">
              <FaLeaf className="h-8 w-8 text-green-500 animate-pulse" />
              <span className="ml-2 text-2xl font-extrabold text-white tracking-wide">
                Green<span className="text-[#FFFFFF]">Future</span>
              </span>
              <FaLeaf className="h-8 ml-2 w-8 text-green-500 animate-pulse" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home is removed here */}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative">
                {/* User Icon and Name */}
                <button
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 text-white"
                >
                  <FaUserCircle className="h-8 w-8 text-white" />
                  <span className="text-white ml-2">{user.name}</span>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg py-2">
                    <Link
                      to="/profile"
                      onClick={handleLinkClick}
                      className="flex items-center space-x-2 px-4 py-2 w-full text-left hover:bg-gray-100"
                    >
                      <FaUserCircle className="text-blue-600" />
                      <span className="text-blue-600">Profile</span>
                    </Link>
                    <Link
                      to="/dashboard"
                      onClick={handleLinkClick}
                      className="flex items-center space-x-2 px-4 py-2 w-full text-left hover:bg-gray-100"
                    >
                      <FaLeaf className="text-green-600" />
                      <span className="text-green-600">Dashboard</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 px-4 py-2 w-full text-left hover:bg-gray-100"
                    >
                      <FaSignOutAlt className="text-red-600" />
                      <span className="text-red-600">Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/signup"
                className="bg-[#d3a95c] text-gray-900 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-[#c6893e] transition-colors duration-200 ease-in-out"
              >
                Sign Up
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-white"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#3D2B1F] py-4">
          <nav className="space-y-4 px-4">
            {/* Home link removed from mobile as well */}
            {user ? (
              <>
                <Link
                  to="/profile"
                  onClick={handleLinkClick}
                  className="block text-white text-lg font-medium hover:text-gray-300 transition-colors duration-200 ease-in-out"
                >
                  Profile
                </Link>
                <Link
                  to="/dashboard"
                  onClick={handleLinkClick}
                  className="block text-white text-lg font-medium hover:text-gray-300 transition-colors duration-200 ease-in-out"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="block bg-red-600 text-white text-center px-5 py-2 rounded-md font-semibold shadow-md hover:bg-red-700 transition-colors duration-200 ease-in-out"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/signup"
                className="block bg-[#d3a95c] text-gray-900 text-center px-5 py-2 rounded-full font-semibold shadow-md hover:bg-[#c6893e] transition-colors duration-200 ease-in-out"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
