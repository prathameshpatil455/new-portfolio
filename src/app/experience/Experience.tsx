"use client"; 

import React from "react";
import Image, { StaticImageData } from "next/image"; 
import html from "../../../public/images/html.png";
import css from "../../../public/images/css.png";
import javascript from "../../../public/images/javascript.png";
import reactImage from "../../../public/images/react.png";
import nextjs from "../../../public/images/nextjs.png";
import graphql from "../../../public/images/graphql.png";
import github from "../../../public/images/github.png";
import tailwind from "../../../public/images/tailwind.png";

interface Tech {
  id: number;
  src: StaticImageData;
  title: string;
  style: string;
}

const Experience = () => {
  const techs: Tech[] = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500 bg-orange-300",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500 bg-blue-300",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500 bg-yellow-300",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600 bg-blue-300",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400 bg-sky-300",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white bg-white",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400 bg-pink-300",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400 bg-gray-300",
    },
  ];

  return (
    <div className="bg-white w-full h-screen pt-32 max-sm:pt-72">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
        <div>
          <p className="text-4xl font-bold border-b-4 border-black p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <Image
                src={src}
                alt={title} 
                className="w-20 mx-auto"
                width={80} 
                height={80} 
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
