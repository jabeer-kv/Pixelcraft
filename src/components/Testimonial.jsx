
import React from "react";
import userImage from "../assets/image.png"; 

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-16 flex flex-col items-center">
      
      <span className="bg-gray-100 text-purple-500 px-4 py-1 rounded-full text-sm font-medium mb-4">
        Testimonials
      </span>

      <h2 className="text-4xl font-semibold text-center">
        What our clients are <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9]">saying</span>
      </h2>

      <p className="text-xl text-blue-500 text-center mt-2">
        ipsum dolor sit amet consectetur. Sem dui viverra libero auctor
      </p>

     
      <div className="mt-6 text-center">
        <h3 className="text-3xl font-bold">2k+</h3>
        <p className="text-gray-500">Trusted by users</p>
      </div>

     
      <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-5xl w-full px-4">
       
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-4 mb-3">
            <img src={userImage} alt="Jane Cooper" className="w-12 h-12 rounded-full" />
            <div>
              <h4 className="font-semibold">Jane Cooper</h4>
              <div className="text-yellow-400 text-lg">★★★★★</div>
            </div>
          </div>
          <p className="text-gray-700">
            ipsum dolor sit amet consectetur. Sem dui viverra libero auctor
          </p>
          <p className="text-sm text-gray-500 mt-3">August 20, 2024</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-4 mb-3">
            <img src={userImage} alt="Jane Cooper" className="w-12 h-12 rounded-full" />
            <div>
              <h4 className="font-semibold">Jane Cooper</h4>
              <div className="text-yellow-400 text-lg">★★★★★</div>
            </div>
          </div>
          <p className="text-gray-700">
            ipsum dolor sit amet consectetur. Sem dui viverra libero auctor
          </p>
          <p className="text-sm text-gray-500 mt-3">August 20, 2024</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;