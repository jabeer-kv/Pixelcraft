import React from "react";
import HeroImage from "../assets/hero.png"; 
import Navbar from "./navbar";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center bg-[#F8F9FA] min-h-[90vh]">
        {/* Navbar */}

        {/* Hero Section with increased size */}
        <div className="container max-w-[1440px] mx-auto px-4 rounded-2xl shadow-lg bg-gradient-to-b from-purple-200 to-white ">
          <section className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="flex-1">
              <h1 
                className="text-[68px] font-family leading-[79.2px] tracking-tight text-gray-900 text-center md:text-left" 
              >
                Elevate Your Brand with Digital{" "}
                <span 
                  className="bg-gradient-to-r from-[#82cdff] to-[#6060ea] px-6 border border-black text-white px-3 py-1 rounded-lg"
                >
                  Excellence
                </span>
              </h1>
              <p className="text-gray-600 mt-4 max-w-lg text-center md:text-left">
                Streamline your digital presence with our cutting-edge web, app, and marketing solutions.
                Designed for businesses of all sizes, our services drive growth and engagement.
              </p>
            </div>

            <div className="flex-1 mt-4 md:mt-0">
              <img
                src={HeroImage}
                alt="Illustration"
                className="max-w-md mx-auto md:ml-8"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Hero;