import React from "react";
import HeroImage from "../assets/hero.png"

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center p-12">
        <div className="bg-gradient-to-b from-purple-100 to-purple-200 rounded-2xl p-12 shadow-lg">
          <h1 className="text-4xl font-bold text-gray-900">
            Elevate Your Brand with Digital <span className="bg-gradient-to-r from-[#82cdff] from-[-9.41%] to-[#6060ea] to-[101.55%] text-white px-3 py-1 rounded-lg">Excellence</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl">
            Streamline your digital presence with our cutting-edge web, app, and marketing solutions.
            Designed for businesses of all sizes, our services drive growth and engagement.
          </p>
          {/* <div className="mt-8 flex justify-center"> */}
            <img
              src={HeroImage}
              alt="Illustration"
              className="max-w-md float-end"
            />
          {/* </div> */}
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