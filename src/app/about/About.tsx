"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import ProfilePic from "../../../public/images/Profile-pic.jpg";
import Info from "@/components/Info/Info";
import { useSelector } from "react-redux";
import useTimelineAnimation from "../../hooks/useTimelineAnimtion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // useTimelineAnimation();

  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

  const timelineData = [
    { title: "Started Learning Web Dev", description: "Year: 2020" },
    { title: "First Job at XYZ", description: "Year: 2021" },
    { title: "Completed 30+ Projects", description: "Year: 2023" },
  ];

  useEffect(() => {
    const timelineLine = document.querySelector(".timeline-line");
    const timelineCards = document.querySelectorAll(".timeline-card");

    // Scroll-triggered animation for timeline line
    gsap.fromTo(
      timelineLine,
      { height: "0%" },
      {
        height: "100%",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#timeline-container",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    // animate each timeline card as you scroll
    timelineCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    // Pin the right section until timeline ends
    ScrollTrigger.create({
      trigger: "#timeline-container",
      start: "top top", // Start when the timeline container hits the top of the viewport
      end: "bottom bottom", // End when the timeline reaches the bottom of the viewport
      pin: ".right-section", // Pin the right section while the timeline is visible
      pinSpacing: false, // Disable extra spacing after the pin
      onComplete: () => {
        // Unlock scrolling after the timeline ends
        document.body.style.overflow = "auto"; // Allow body to scroll
      },
    });
  }, []);

  return (
    <section
      id="about"
      className={`h-screen w-full pt-28 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } box-border`}
    >
      <div className="max-w-screen-lg mx-auto py-2 px-4 md:px-8 lg:px-10">
        {/* <div className="flex flex-col items-center justify-center mb-8 md:mb-10">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-2 inline border-b-4 ${
              isDarkMode ? "border-white" : "border-black"
            } md:mb-4`}
          >
            About Me
          </h2>
          <p
            className={`text-lg ${
              isDarkMode ? "border-white" : "border-black"
            }`}
          >
            Get to know me better
          </p>
        </div> */}

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mx-8">
          {/* left section */}
          <div className="left-section w-full md:w-1/3 flex flex-col justify-center items-center sticky top-28">
            <Image
              src={ProfilePic}
              alt="Profile"
              className={`rounded-2xl my-4 mx-auto md:min-w-60 max-md:w-52 h-auto border ${
                isDarkMode ? "border-white" : "border-black"
              }`}
              width={250} // Set appropriate width
              height={250} // Set appropriate height
              priority // Use priority for the main profile picture
            />
            <p className="mt-4 text-center text-lg font-semibold text-gray-800 dark:text-gray-300">
              Passionate Developer | Lifelong Learner
            </p>
          </div>

          {/* <Info /> */}

          <div
            className="right-section w-full md:w-2/3 relative overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 112px)" }}
          >
            <div
              id="timeline-container"
              className="timeline-container relative"
            >
              <div className="timeline-line absolute top-0 left-1/2 w-1 h-full bg-gray-400 dark:bg-gray-600"></div>

              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-card ${
                    index % 2 === 0 ? "left-card" : "right-card"
                  } absolute`}
                  // style={{ animationDelay: `${index * 0.2}s` }}
                  style={{
                    top: `${(index + 1) * 500}px`, // Adjust the position for scroll effect
                  }}
                >
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
