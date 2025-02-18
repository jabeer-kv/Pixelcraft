import React from "react";
import HeroImage from "../assets/hero.png"; 
const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-200 to-white py-16">
      <div className="container max-w-7xl mx-auto  rounded-lg shadow-lg p-12 bg-white">
        <section className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="flex-1">
            <h1 
              className="text-[68px] font-famly leading-[79.2px] tracking-tight text-gray-900 text-center md:text-left font-" 
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

          <div className="flex-1 mt-8 md:mt-0">
            <img
              src={HeroImage}
              alt="Illustration"
              className="max-w-md mx-auto md:ml-8"
            />
          </div>
        </section>

        
        
      </div>
    </div>
  );
};

export default Hero;