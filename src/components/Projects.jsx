import React from 'react';
import bg from '../assets/container.png';

function OurLatestProject() {
  return (
    <>
     <section className="flex flex-col items-center py-12">
      <span className="bg-gray-100 text-purple-500 px-4 py-1 rounded-full text-sm font-famly mb-4">
        Project
      </span>
      <h2 className="text-3xl font-semibold text-center">
        Our Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9]">Project</span>
      </h2>

     
      <div className="mt-8 w-full max-w-3xl rounded-2xl border border-purple-300 p-6 flex flex-col md:flex-row">
      
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
          <img
            src={bg}
            alt="Project"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
          <span className="bg-gray-100 text-purple-500 px-4 py-1 rounded-full text-sm font-medium self-start mb-3">
            Digital Marketing
          </span>
          <p className="text-gray-700 text-lg">
            Lorem ipsum dolor sit amet consectetur. Odio quis pretium et eleifend adipiscing quis. Facilisi in feugiat cursus condimentum.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}

export default OurLatestProject;