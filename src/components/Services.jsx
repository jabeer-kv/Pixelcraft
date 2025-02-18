import React from 'react';
import uiux from '../assets/uiux&maintanace.svg'; 

function Services() {
  return (
    <div className="py-[50px] bg-[#F8F9FA]">
      <div className="w-[1728px] mx-auto"> 
        <div className="flex flex-col items-center"> 
        <span className="bg-gray-100 text-purple-500 px-4 py-1 rounded-full text-sm font-medium mb-4">
       Service
      </span>
          <h2 className="text-[48px]  mb-[75px] text-center font-famly"> 
            Empowering Businesses with Cutting-Edge
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9]">
              Digital Solutions
            </span>
          </h2>
          <p className="text-[18px] text-[#27AAE2] leading-relaxed text-center mb-[75px] w-[1100px]"> 
            PixelCraft delivers web, app, and marketing solutions that drive growth,
            <br />
            enhance engagement, and streamline your digital presence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[75px]"> 


            
            <div className="bg-white rounded-lg p-[30px] shadow-md w-[350px]"> 
              <img src={uiux} alt="Service 1" className="h-[100px] w-auto mx-auto mb-[20px]" /> 
              <h3 className="text-[24px] font-semibold mb-[10px] text-center">Web Design & Development</h3> 
              <p className="text-[16px] text-center"> 
                We create stunning and functional websites that drive results.
              </p>
            </div>

           
          </div>

          
          
        </div>
      </div>
    </div>
  );
}

export default Services;