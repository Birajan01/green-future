import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white border-t mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            © 2024 Green Future. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
