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
import { useSelector } from "react-redux";

interface Tech {
  id: number;
  src: StaticImageData;
  title: string;
}

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  feedback: string;
}

const ExperienceDraft = () => {
  const techs: Tech[] = [
    { id: 1, src: html, title: "HTML" },
    { id: 2, src: css, title: "CSS" },
    { id: 3, src: javascript, title: "JavaScript" },
    { id: 4, src: reactImage, title: "React" },
    { id: 5, src: tailwind, title: "Tailwind" },
    { id: 6, src: nextjs, title: "Next JS" },
    { id: 7, src: graphql, title: "GraphQL" },
    { id: 8, src: github, title: "GitHub" },
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      feedback:
        "This portfolio is amazing! The tech stack showcased is very impressive.",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      feedback: "I love the clean design and responsiveness. Great work!",
    },
  ];

  const isDarkMode = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme.isDarkMode
  );

  return (
    <section
      id="experience"
      className="bg-white dark:bg-black w-full h-screen pt-28 max-sm:pt-72"
    >
      <div className="max-w-screen-lg mx-auto p-4 text-black dark:text-white">
        {/* Header */}
        <div className="text-left">
          <p className="text-4xl font-bold border-b-4 border-black dark:border-white inline">
            Experience
          </p>
          <p className="py-6">Technologies I've worked with</p>
        </div>

        {/* Technology Grid */}
        <div className="flex flex-wrap gap-8 py-8">
          {techs.map(({ id, src, title }) => (
            <div key={id} className="flex flex-col items-center gap-4">
              <Image
                src={src}
                alt={`Icon of ${title}`}
                width={40}
                height={40}
                className="object-contain"
              />
              <p className="text-sm font-medium">{title}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mt-8">
          <h3 className="text-3xl font-bold text-left">Testimonials</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {testimonials.map(({ id, name, avatar, feedback }) => (
              <div
                key={id}
                className="flex items-start gap-4 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg"
              >
                {/* Avatar */}
                <Image
                  src={avatar}
                  alt={`${name}'s avatar`}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                  unoptimized
                />
                {/* Feedback */}
                <div>
                  <p className="text-sm italic text-gray-700 dark:text-gray-300">
                    {feedback}
                  </p>
                  <p className="mt-4 font-semibold text-right text-gray-900 dark:text-gray-100">
                    — {name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceDraft;
