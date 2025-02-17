import React from "react";
import logo from "../assets/PixleCraft.pdf 2.svg";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center p-4 border-b border-gray-200">
    <div className="text-xl font-semibold text-blue-600 px-6">PIXLECRAFT</div>
    <div className="flex space-x-6">
      <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
      <a href="#" className="text-gray-700 hover:text-blue-600">About us</a>
      <a href="#" className="text-gray-700 hover:text-blue-600">Service</a>
      <a href="#" className="text-gray-700 hover:text-blue-600">Projects</a>
      <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded-full hover:bg-blue-100">
        Contact us
      </button>
    </div>
  </nav>
  );
};

export default Navbar;