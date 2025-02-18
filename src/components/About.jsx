import React from 'react';
import about from '../assets/about.png';

function About() {
  return (
    <div className="bg-[#F8F9FA] py-[48px]"> {/* Adjust py as needed */}
      <div className="w-[1440px] mx-auto"> {/* Or container with adjusted max-width */}
        <div className="bg-white rounded-lg p-[32px] shadow-md flex flex-col items-center">
          <h2 className="text-[32px] font-semibold mb-[16px] text-center">
            How Transforms{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9]">
              Businesses
            </span>
          </h2>
          <p className="text-[18px] text-[#27AAE2]  leading-relaxed text-center mb-[24px] font-font family/Font 1">
            We craft websites, apps, and marketing strategies to fuel your business growth.
          </p>
           <p className="text-[18px] leading-relaxed text-center mb-[32px]">
            PixelCraft empowers businesses with web, app, and marketing solutions that drive growth. We simplify digital transformation with seamless and scalable strategies.
          </p>
          <img src={about} alt="Business Illustration" className="max-w-full h-auto rounded-lg mb-[24px]" />
         
          <button className="bg-purple-200 text-purple-700 px-6 py-2 rounded-full shadow-md hover:bg-purple-300 transition-colors duration-300">
            Services
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;