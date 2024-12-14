"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import html from "../../../public/images/html.png";
import css from "../../../public/images/css.png";
import javascript from "../../../public/images/javascript.png";
import reactImage from "../../../public/images/react.png";
import nextjs from "../../../public/images/nextjs.png";
import graphql from "../../../public/images/graphql.png";
import github from "../../../public/images/github.png";
import tailwind from "../../../public/images/tailwind.png";
import frontEndLightIcon from "../../../public/svg/front-end-icon.svg";
import frontEndDarkIcon from "../../../public/svg/front-end-dark-icon.svg";
import { useSelector } from "react-redux";

interface Tech {
  id: number;
  src: StaticImageData;
  title: string;
  style: string;
  category: string; // Add a category property to each tech
}

const Experience = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  const techs: Tech[] = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500 bg-orange-300",
      category: "Frontend",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500 bg-blue-300",
      category: "Frontend",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500 bg-yellow-300",
      category: "Frontend",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600 bg-blue-300",
      category: "Frontend",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400 bg-sky-300",
      category: "Frontend",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white bg-white",
      category: "Frontend",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400 bg-pink-300",
      category: "Backend",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400 bg-gray-300",
      category: "Version Control",
    },
    // Add other categories and technologies as needed
  ];

  const categories = [
    {
      name: "Frontend",
      logoLight: frontEndLightIcon,
      logoDark: frontEndDarkIcon,
    },
    {
      name: "Backend",
      logoLight: "/images/backend-light.png",
      logoDark: "/images/backend-dark.png",
    },
    {
      name: "Machine Learning",
      logoLight: "/images/ml-light.png",
      logoDark: "/images/ml-dark.png",
    },
    {
      name: "Version Control",
      logoLight: "/images/version-control-light.png",
      logoDark: "/images/version-control-dark.png",
    },
  ];

  const isDarkMode = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme.isDarkMode
  );

  return (
    <section id="experience">
      <div className="bg-white dark:bg-black w-full h-screen pt-32 max-sm:pt-72">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col h-full text-black dark:text-white">
          <div>
            <p className="text-4xl font-bold border-b-4 border-black dark:border-white p-2 inline">
              Experience
            </p>
            <p className="py-6">
              Select a category to view the technologies I've worked with.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 w-full">
            {/* Left Column: Categories */}
            <div className="col-span-1">
              <h3 className="text-2xl font-bold">Categories</h3>
              <ul className="flex flex-col gap-4 mt-4">
                {categories.map(({ name, logoLight, logoDark }) => (
                  <li
                    key={name}
                    className={`cursor-pointer p-2 rounded-md flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ${
                      selectedCategory === name
                        ? "bg-gray-200 dark:bg-gray-700"
                        : ""
                    }`}
                    onClick={() => setSelectedCategory(name)}
                  >
                    <Image
                      src={isDarkMode ? logoDark : logoLight}
                      alt={`${name}-logo`}
                      width={60}
                      height={60}
                      className=""
                    />
                    {name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Technologies */}
            <div className="col-span-4 flex flex-wrap justify-start gap-8 text-center py-8 px-12 sm:px-0">
              <div className="flex p-6 w-full gap-8">
                {techs
                  .filter((tech) => tech.category === selectedCategory)
                  .map(({ id, src, title, style }) => (
                    <div key={id} className="">
                      <Image
                        src={src}
                        alt={title}
                        className="mx-auto"
                        width={40}
                        height={40}
                      />
                      <p className="mt-4">{title}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
