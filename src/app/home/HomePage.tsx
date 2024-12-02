/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ProfilePic from "../../../public/images/Profile-pic.jpg";
import HeroImage from "../../../public/images/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedBox from "@/components/AnimatedBox/AnimatedBox";
import Profile3D from "@/components/ThreeD/Profile3D";
import { Typed } from "react-typed";
import InteractiveShapes from "@/components/InteractiveShapes/InteractiveShapes";
import TypingEffect from "@/components/TypingEffect";
import { GrLocationPin } from "react-icons/gr";
import { FaMapLocationDot, FaLocationCrosshairs } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

  return (
    <section id="home"  className="relative overflow-hidden">
      {/* Background grid */}
      {/* <div className="mesh-grid-background">
        <div className="grid-cell"></div>
      </div> */}

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="relative h-screen w-full bg-transparent bg-white dark:bg-black box-border"
    >
      {/* <InteractiveShapes /> */}
      {/* main content */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center gap-12 h-full py-2 px-8 md:px-12 lg:px-16 md:flex-row">

        {/* left section */}
        <AnimatedBox
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col justify-start items-start h-full w-full max-md:pt-36">
            <p className="text-xl md:text-2xl font-medium text-black dark:text-white py-2">Hi, I'm Prathamesh,</p>
            <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white">
              A Software Developer
              {/* <TypingEffect /> */}
            </h2>
            <div className="flex items-center gap-2 py-4 max-w-md">
              <FaMapMarkerAlt
                className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                size={20}
              />
              <p
                className={`text-base md:text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Bangalore, India
              </p>
            </div>
            {/* <p className="text-gray-600 dark:text-gray-300 py-4 max-w-md text-base md:text-lg">
              I have 1 year of experience building and designing websites. I love to work on web applications using technologies like React, Tailwind, Next JS, and Backend.
            </p> */}
            <div className="group text-black dark:text-white w-fit px-6 py-3 my-2 flex items-center rounded-md border border-black dark:border-white cursor-pointer hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black">
              Portfolio
              <span className="group-hover:rotate-90 duration-500">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </div>
          </div>
        </AnimatedBox>

        <AnimatedBox
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative top-0 w-full md:w-1/4">
            <Image
              src={HeroImage}
              alt="my profile"
              className="my-4 max-w-[350px]"
            />
            {/* rounded-2xl border border-black dark:border-white */}
            {/* <Profile3D /> */}
          </div>
        </AnimatedBox>
      </div>
    </motion.div>
    </section>
  );
};

export default HomePage;
