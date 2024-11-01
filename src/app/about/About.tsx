"use client"; 

import React from "react";
import Image from "next/image";
import ProfilePic from "../../../public/images/Profile-pic.jpg";
import Info from "@/components/Info/Info";

const About = () => {
  return (
    <section id="about">
    <div className="h-screen w-full bg-white text-black pt-28">
      <div className="max-w-screen-lg mx-auto py-2 px-4 md:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 inline border-b-4 border-black md:mb-4">
            About Me
          </h2>
          <p className="text-lg">Get to know me better</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mx-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src={ProfilePic}
              alt="Profile"
              className="rounded-2xl my-4 mx-auto md:min-w-60 max-md:w-52 h-auto border border-black"
              width={250} // Set appropriate width
              height={250} // Set appropriate height
              priority // Use priority for the main profile picture
            />
          </div>
          <Info />
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
