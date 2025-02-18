import React from 'react';
import logo from "../assets/logo.svg"

const Navbar = () => {
    return (
        <div className="container mx-auto m-0 p-0">
            {/* Gradient Border Wrapper */}
            <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9] overflow-hidden">
               { /* Inner Navbar with White Background */}
                        <nav className="relative w-full flex justify-between items-center p-4 rounded-lg bg-white">
                          <div className="flex items-center">
                            <img src={logo} alt="PixelCraft Logo" className="h-10 w-auto mr-2" />
                          </div>

                          {/* Navbar Links + Button Wrapper */}
                    <div className="flex items-center space-x-6">
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Home</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">About Us</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Service</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Projects</a>

                        {/* Contact Us Button with Gradient Border & Hover Effect */}
                        <div className="relative group">
                            <button className="relative px-6 py-2 rounded-lg font-medium border-2 border-transparent bg-white text-black transition-all duration-300 group-hover:text-white">
                                <span className="relative z-10">Contact Us</span>
                                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-[#6DDCFF] group-hover:border-gradient-to-r group-hover:from-[#6DDCFF] group-hover:to-[#7F60F9]"></span>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;