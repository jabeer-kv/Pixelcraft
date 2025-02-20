import React from "react";
import about from "../assets/about.png"; // Replace with actual image path

const AboutUsSection = () => {
  return (

    <div className="bg-[#F8F9FA] py-[48px]"> {/* Background section */}
      <div className="max-w-[1440px] mx-auto px-4"> {/* Ensures responsiveness */}
        <div className="bg-white rounded-4xl p-[32px] shadow-md flex flex-col items-center">
          <span className="bg-gray-100 text-purple-500 px-4 py-1 rounded-full text-sm font-medium mb-4">
            About Us
          </span>
          <section className="">
          {/* Heading */}
          <h2 className="text-[32px] font-famly mb-[16px] text-center ">
            How Transforms{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9]">
              Businesses
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-[18px] text-[#27AAE2] leading-relaxed text-center mb-[24px]">
            We craft websites, apps, and marketing strategies to fuel your business growth.
          </p>

          {/* Description */}
          <p className="text-[18px] leading-relaxed text-center mb-[2px]">
            PixelCraft empowers businesses with web, app, and marketing solutions that drive
            </p>
            <p className="text-[18px] leading-relaxed text-center mb-[32px]">
            growth. We simplify digital transformation with seamless and scalable strategies.
            </p>
          
          </section>

          {/* Illustration */}
          <img
            src={about}
            alt="Business Illustration"
            className="max-w-full h-auto rounded-lg mb-[24px]"
          />



        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;