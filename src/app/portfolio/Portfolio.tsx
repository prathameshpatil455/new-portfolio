"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import arrayDestruct from "../../../public/images/portfolio/arrayDestruct.jpg";
import installNode from "../../../public/images/portfolio/installNode.jpg";
import navbar from "../../../public/images/portfolio/navbar.jpg";
import reactParallax from "../../../public/images/portfolio/reactParallax.jpg";
import reactSmooth from "../../../public/images/portfolio/reactSmooth.jpg";
import reactWeather from "../../../public/images/portfolio/reactWeather.jpg";
import { useSelector } from "react-redux"; // Import useSelector to access the Redux state
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing React Icons
import AnimatedBox from "../../components/AnimatedBox/AnimatedBox";

interface PortfolioItem {
  id: number;
  src: StaticImageData;
  alt: string;
  title: string;
  content: string;
  tags: string[];
}

const Portfolio = () => {
  const portfolios: PortfolioItem[] = [
    {
      id: 1,
      src: arrayDestruct,
      alt: "Array Destructure and use Conditional Statements",
      title: "Project 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium est nobis facilis, accusantium illum ad quam sunt in illo?",
      tags: ["JavaScript", "React", "Conditional Rendering"],
    },
    {
      id: 2,
      src: reactParallax,
      alt: "React Parallax",
      title: "Project 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium est nobis facilis, accusantium illum ad quam sunt in illo?",
      tags: ["React", "CSS", "Parallax"],
    },
    {
      id: 3,
      src: navbar,
      alt: "Navbar",
      title: "Project 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium est nobis facilis, accusantium illum ad quam sunt in illo?",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 4,
      src: reactSmooth,
      alt: "React Smooth Scroll",
      title: "Project 4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium est nobis facilis, accusantium illum ad quam sunt in illo?",
      tags: ["React", "Scroll", "Animation"],
    },
    {
      id: 5,
      src: installNode,
      alt: "Install Node JS",
      title: "Project 5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium est nobis facilis, accusantium illum ad quam sunt in illo?",
      tags: ["Node.js", "Installation"],
    },
    {
      id: 6,
      src: reactWeather,
      alt: "React Weather App",
      title: "Project 6",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium est nobis facilis, accusantium illum ad quam sunt in illo?",
      tags: ["React", "API", "Weather"],
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Get the dark mode state from Redux
  const isDarkMode = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme.isDarkMode
  );

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % portfolios.length);
  };

  const handlePrev = () => {
    setCurrentProjectIndex(
      (prevIndex) => (prevIndex - 1 + portfolios.length) % portfolios.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const { title, content, tags } = portfolios[currentProjectIndex];

  return (
    <section id="portfolio">
    <div
      className={`w-full pt-28 md:pt-[100px] md:min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-screen-lg py-4 px-8 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 flex flex-col gap-1 justify-center items-start">
          <p className="text-4xl font-bold inline border-b-4 border-black dark:border-white">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <AnimatedBox
          key={currentProjectIndex} // Use the index as a key to trigger reanimation
          initial={{ opacity: 0, y: 20 }} // Start from below
          animate={{ opacity: 1, y: 0 }} // Animate to original position
          exit={{ opacity: 0, y: -20 }} // Exit upwards
          transition={{ duration: 0.5 }} // Duration of the transition
        >
          <div className="grid md:grid-cols-2 md:gap-x-14 gap-6 px-6 sm:px-0">
            {/* Left Column: Image Carousel */}
            <div className="flex items-center justify-between gap-1.5">
              <button
                className={`bg-gray-300 rounded-full p-2 hover:bg-gray-400 ${
                  isDarkMode ? "bg-gray-600" : "bg-gray-300"
                }`}
                onClick={handlePrev}
              >
                <FaChevronLeft
                  className={`text-base ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                />
              </button>

              {/* Animated Box for Image */}
              <AnimatedBox
  initial={{ opacity: 0, }} // Start from left, scaled down
  animate={{ opacity: 1 }} // Animate to original position and scale
  exit={{ opacity: 0, }} // Exit to right and scale down
  transition={{ duration: 0.5 }}
>
                <Image
                  src={portfolios[currentProjectIndex].src}
                  alt={portfolios[currentProjectIndex].alt}
                  className="rounded-md duration-200"
                  width={400}
                  height={300}
                  priority
                />
              </AnimatedBox>

              <button
                className={`bg-gray-300 rounded-full p-2 hover:bg-gray-400 ${
                  isDarkMode ? "bg-gray-600" : "bg-gray-300"
                }`}
                onClick={handleNext}
              >
                <FaChevronRight
                  className={`text-base ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                />
              </button>
            </div>

            {/* Right Column: Project Details */}
            <div className="flex flex-col justify-center">
            <AnimatedBox
  initial={{ opacity: 0, x: 50 }} // Start from right, 50px
  animate={{ opacity: 1, x: 0 }} // Animate to original position
  exit={{ opacity: 0, x: 50 }} // Exit to right
  transition={{ duration: 0.5 }}
>
                <h3 className="text-3xl font-semibold">{title}</h3>
                <p className="py-4">{content}</p>
                <div className="py-2">
                  <div className="flex flex-wrap gap-2 mt-1">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                          isDarkMode
                            ? "bg-gray-700 text-white"
                            : "bg-gray-200 text-black"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-start justify-start gap-4 max-w-md mt-4">
                  <button className="group text-black dark:text-white w-fit px-6 py-3 flex items-center rounded-md border border-black dark:border-white cursor-pointer hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black">
                    Demo
                  </button>
                  <button className="group text-black dark:text-white w-fit px-6 py-3 flex items-center rounded-md border border-black dark:border-white cursor-pointer hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black">
                    Code
                  </button>
                </div>
              </AnimatedBox>
            </div>
          </div>
        </AnimatedBox>
      </div>
    </div>
    </section>
  );
};

export default Portfolio;
