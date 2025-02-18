import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="flex justify-center py-10 bg-white">
      <div className="relative w-3/4 p-6 rounded-xl bg-white overflow-hidden">
        {/* Gradient Border Fix */}
        <div className="absolute inset-0 rounded-xl border border-transparent bg-gradient-to-r from-blue-400 to-purple-500 p-1">
          <div className="h-full w-full rounded-xl bg-white"></div>
        </div>

        {/* Content */}
        <div className="relative grid grid-cols-3 gap-10 p-6">
          {/* Column 1 - Logo & Description */}
          <div className="flex flex-col items-start space-y-4">
            <img src={logo} alt="PixelCraft Logo" className="w-40" />
            <p className="text-gray-600">
              Streamline your brand’s digital presence with our innovative, scalable solutions.
              Designed for businesses of all sizes, PixelCraft simplifies web development, app
              creation, and result-driven digital marketing to maximize growth and engagement.
            </p>
          </div>

          {/* Column 2 - Navigation Links */}
          <div className="flex flex-col space-y-2 text-gray-700">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">About us</a>
            <a href="#" className="hover:text-blue-600">Services</a>
            <a href="#" className="hover:text-blue-600">Projects</a>
            <a href="#" className="hover:text-blue-600">Testimonial</a>
          </div>

          {/* Column 3 - Policies & Social Links */}
          <div className="flex flex-col space-y-2 text-gray-700">
            <a href="#" className="hover:text-blue-600">Terms & Conditions</a>
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Contact Us</a>

            {/* Social Icons */}
            <div className="flex space-x-4 text-black text-2xl mt-4">
              <a href="#" className="hover:text-blue-600"><FaWhatsapp /></a>
              <a href="#" className="hover:text-blue-600"><FaInstagram /></a>
              <a href="#" className="hover:text-blue-600"><FaFacebook /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}