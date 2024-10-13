import React from "react";
import { MdOutlineDescription } from 'react-icons/md';



// add boxicons for all the boxes

const Info = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[600px] mt-4 text-black box-border gap-2">
      <div className="flex flex-wrap gap-6 justify-start max-sm:justify-center items-center px-8">
        <div className="bg-white text-black flex items-center justify-center flex-col min-w-[150px] p-6 rounded-xl border border-black border-opacity-60 md:min-w-[150px] md:h-20 hover:scale-105 hover:bg-black hover:duration-500 hover:text-white">
          <p className="text-md md:text-lg font-bold">Experience</p>
          <span className="text-sm md:text-md">2 Years working</span>
        </div>

        <div className="bg-white text-black flex items-center justify-center flex-col min-w-[150px] p-6 rounded-xl border border-black border-opacity-60 md:min-w-[150px] md:h-20 hover:scale-105 hover:bg-black hover:duration-500 hover:text-white">
          <p className="text-md md:text-lg font-bold">Completed</p>
          <span className="text-sm md:text-md">30+ projects</span>
        </div>

        <div className="bg-white text-black flex items-center justify-center flex-col min-w-[150px] p-6 rounded-xl border border-black border-opacity-60 md:min-w-[150px] md:h-20 hover:scale-105 hover:bg-black hover:duration-500 hover:text-white">
          <p className="text-md md:text-lg font-bold">Support</p>
          <span className="text-sm md:text-md">Online 24/7</span>
        </div>
      </div>

      <p className="md:p-5 p-3 w-full text-sm md:text-base">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores facere
        maxime sed. Nobis cupiditate voluptas non nulla. Quae, mollitia ipsum!
        Ab est vero culpa! Itaque iusto recusandae non rerum deleniti!
      </p>

      <div className="group text-black w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md border border-black cursor-pointer hover:bg-black hover:text-white hover:duration-300">
        <a
          href="CV"
          download="">
            Download CV
        </a>
        <MdOutlineDescription size={25} />
      </div>
    </div>
  );
};

export default Info;


