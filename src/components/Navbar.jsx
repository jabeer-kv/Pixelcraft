import React from "react";
import logo from "../assets/1.png"; 

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center p-4 border-b border-gray-200 bg-white"> 
      <div className="flex items-center"> 
        <img src={logo} alt="PixleCraft Logo" className="h-8 w-auto mr-2" /> 
      </div>
      <div className="flex space-x-6">
        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
          Home
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
          About Us
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
          Service
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
          Projects
        </a>
        <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded-full 
                           hover:bg-blue-100 transition-colors duration-300
                           hover:border-blue-700 hover:text-blue-700"> 
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;