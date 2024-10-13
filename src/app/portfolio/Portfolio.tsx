"use client"; 

import React from "react";
import Image, { StaticImageData } from "next/image"; 
import arrayDestruct from "../../../public/images/portfolio/arrayDestruct.jpg";
import installNode from "../../../public/images/portfolio/installNode.jpg";
import navbar from "../../../public/images/portfolio/navbar.jpg";
import reactParallax from "../../../public/images/portfolio/reactParallax.jpg";
import reactSmooth from "../../../public/images/portfolio/reactSmooth.jpg";
import reactWeather from "../../../public/images/portfolio/reactWeather.jpg";



interface PortfolioItem {
  id: number;
  src: StaticImageData;
  alt: string;
  title: string;
  content: string;
}


const Portfolio = () => {
  const portfolios: PortfolioItem[] = [
    {
      id: 1,
      src: arrayDestruct,
      alt: "Array Destructure and use Conditional Statements",
      title: "Project 1",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium est nobis facilis, accusantium illum ad quam sunt in illo?",
    },
    {
      id: 2,
      src: reactParallax,
      alt: "React Parallax",
      title: "Project 2",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium est nobis facilis, accusantium illum ad quam sunt in illo?",
    },
    {
      id: 3,
      src: navbar,
      alt: "Navbar",
      title: "Project 3",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium est nobis facilis, accusantium illum ad quam sunt in illo?",
    },
    {
      id: 4,
      src: reactSmooth,
      alt: "React Smooth Scroll",
      title: "Project 4",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium est nobis facilis, accusantium illum ad quam sunt in illo?",
    },
    {
      id: 5,
      src: installNode,
      alt: "Install Node JS",
      title: "Project 5",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium est nobis facilis, accusantium illum ad quam sunt in illo?",
    },
    {
      id: 6,
      src: reactWeather,
      alt: "React Weather App",
      title: "Project 6",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium est nobis facilis, accusantium illum ad quam sunt in illo?",
    },
  ];

  return (
    <div className="bg-white w-full text-black pt-28 md:pt-[100px] md:min-h-screen">
      <div className="max-w-screen-lg py-4 px-8 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-0">
          {portfolios.map(({ id, src, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <Image
                src={src}
                alt={title}
                className="rounded-md duration-200 hover:scale-105"
                width={400} 
                height={300} 
                priority
              />
              <div className="flex items-center justify-center">
                <button className="w-full md:w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-white text-black rounded-md hover:bg-black hover:text-white">
                  Demo
                </button>
                <button className="w-full md:w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-white text-black rounded-md hover:bg-black hover:text-white">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
