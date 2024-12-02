import React from "react";
import { MdOutlineDescription } from "react-icons/md";
import { useSelector } from "react-redux";

const Info = () => {
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

  return (
    <div
      className={`flex flex-col justify-center items-center max-w-[600px] mt-4 box-border gap-4 ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <div className="flex flex-wrap gap-6 justify-start max-sm:justify-center items-center px-8">
        {[
          { title: "Experience", description: "2 Years working" },
          { title: "Completed", description: "30+ projects" },
          { title: "Support", description: "Online 24/7" },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-center flex-col min-w-[150px] p-6 rounded-xl border ${
              isDarkMode
                ? "bg-black text-white border-white hover:bg-white hover:text-black"
                : "bg-white text-black border-black hover:bg-black hover:text-white"
            } border-opacity-60 md:min-w-[150px] md:h-20 hover:scale-105 hover:duration-500`}
          >
            <p className="text-md md:text-lg font-bold">{item.title}</p>
            <span className="text-sm md:text-md">{item.description}</span>
          </div>
        ))}
      </div>

      <p className="md:p-5 p-3 w-full text-sm md:text-base">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores facere
        maxime sed. Nobis cupiditate voluptas non nulla. Quae, mollitia ipsum!
        Ab est vero culpa! Itaque iusto recusandae non rerum deleniti!
      </p>

      <div
        className={`group w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md border cursor-pointer hover:duration-300 ${
          isDarkMode
            ? "border-white text-white hover:bg-white hover:text-black"
            : "border-black text-black hover:bg-black hover:text-white"
        }`}
      >
        <a href="CV" download="">
          Download CV
        </a>
        <MdOutlineDescription size={25} />
      </div>
    </div>
  );
};

export default Info;
