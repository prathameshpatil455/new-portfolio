import React from "react";
import ProfilePic from "../../../public/images/Profile-pic.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedBox from "@/components/AnimatedBox/AnimatedBox";
import Profile3D from "@/components/ThreeD/Profile3D";
import {Typed} from 'react-typed';
import InteractiveShapes from "@/components/InteractiveShapes/InteractiveShapes";
import TypingEffect from "@/components/TypingEffect";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="h-screen w-full bg-white dark:bg-gray-900 box-border"
    >
      {/* <InteractiveShapes /> */}
      {/* main content */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center gap-5 h-full py-2 px-8 md:px-16 lg:px-18 md:flex-row">
        <AnimatedBox
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col justify-center h-full w-full md:w-3/4 max-md:pt-36">
            <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white">
              {/* I'm a Software Developer */}
              {/* <Typed 
                strings={[
                  "I'm a Software Developer",
                  "I'm a Frontend Developer",
                  "I'm a Full Stack Developer",
                  "I'm a Tech Enthusiast",
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              /> */}
              <TypingEffect />
            </h2>
            <p className="text-gray-600 dark:text-gray-300 py-4 max-w-md text-base md:text-lg">
              I have 1 year of experience building and designing websites. I love to work on web applications using technologies like React, Tailwind, Next JS, and Backend.
            </p>
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
          <div className="relative top-0 w-full md:w-1/3">
            <Image
              src={ProfilePic}
              alt="my profile"
              className="rounded-2xl my-4 max-w-[300px] border border-black dark:border-white"
            />
            {/* <Profile3D /> */}
          </div>
        </AnimatedBox>
      </div>
    </motion.div>
  );
};

export default HomePage;
