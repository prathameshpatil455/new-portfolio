import React from "react";
import ProfilePic from "../../../public/images/Profile-pic.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedBox from "@/components/AnimatedBox/AnimatedBox";

const HomePage = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="h-screen w-full bg-white box-border"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center gap-5 h-full py-2 px-8 md:px-16 lg:px-18 md:flex-row">
        <AnimatedBox
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
        <div className="flex flex-col justify-center h-full max-sm:w-full md:w-2/3 max-md:pt-36">
          <h2 className="max-sm:text-4xl sm:text-5xl md:text-6xl font-bold text-black">
            I'm a Software Developer
          </h2>
          <p className="text-gray-600 py-4 max-w-md text-base md:text-lg">
            I have 1 year of experience building and designing websites.
            I love to work on web applications using technologies like
            React, Tailwind, Next JS, and Backend.
          </p>

          <div>
            <div
            //   to="portfolio"
            //   smooth
            //   duration={500}
              className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md border border-black cursor-pointer hover:bg-black hover:text-white"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-500">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </div>
          </div>
        </div>
        </AnimatedBox>

        <AnimatedBox
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
        >
        <div className="relative top-0 md:top-0 md:w-1/3">
          <Image
            src={ProfilePic}
            alt="my profile"
            className="rounded-2xl my-4 mx-auto border border-black"
            width={200}
            height={200}
          />
        </div>
        </AnimatedBox>
      </div>
    </motion.div>
  );
};

export default HomePage;
