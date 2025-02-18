import React from "react";
import HeroImage from "../assets/hero.png"


const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left p-12">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900">
            Elevate Your Brand with Digital <span className="bg-gradient-to-r from-[#82cdff] to-[#6060ea] text-white px-3 py-1 rounded-lg">Excellence</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl">
            Streamline your digital presence with our cutting-edge web, app, and marketing solutions.
            Designed for businesses of all sizes, our services drive growth and engagement.
          </p>
        </div>
        <div className="flex-1 mt-8 md:mt-0">
          <img
            src={HeroImage}
            alt="Illustration"
            className="max-w-md mx-auto md:ml-8"
          />
        </div>
      </section>

      {/* About Us Button */}
      <div className="mt-6 mb-12">
        <button className="bg-purple-200 text-purple-700 px-6 py-2 rounded-full shadow-md hover:bg-purple-300">
          About us
        </button>
      </div>
    </div>
  );
}


export default Hero;