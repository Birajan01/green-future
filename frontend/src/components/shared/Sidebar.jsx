import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaPlusCircle,
  FaChartBar,
  FaChevronDown, // Added ChevronDown icon for dropdown
} from "react-icons/fa"; // Importing react-icons

function Sidebar() {
  // State to toggle the dropdown
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Toggle function for dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white text-gray-900 shadow-md min-h-screen p-6">
      <nav className="space-y-6">
        {/* Sidebar header */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-black">My App</h2>
          <p className="text-sm text-gray-600">Dashboard and Analytics</p>
        </div>

        {/* Dashboard link with dropdown */}
        <div>
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out"
          >
            <div className="flex items-center space-x-3">
              <FaTachometerAlt className="w-5 h-5 text-gray-800" />
              <span className="text-lg font-medium text-gray-900">
                Dashboard
              </span>
            </div>
            <FaChevronDown className="w-5 h-5 text-gray-800" />{" "}
            {/* Dropdown arrow */}
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="pl-8 space-y-2 mt-2 bg-white rounded-lg shadow-sm py-2">
              <Link
                to="/submit-idea"
                className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200 ease-in-out"
              >
                <FaPlusCircle className="w-5 h-5 text-gray-800" />
                <span className="text-lg font-medium text-gray-900">
                  Submit Idea
                </span>
              </Link>
              <Link
                to="/reports"
                className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200 ease-in-out"
              >
                <FaChartBar className="w-5 h-5 text-gray-800" />
                <span className="text-lg font-medium text-gray-900">
                  Reports
                </span>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Footer section (optional) */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-500">
        <p>&copy; 2024 My App. All rights reserved.</p>
      </div>
    </aside>
  );
}

export default Sidebar;
