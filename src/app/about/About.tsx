"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import ProfilePic from "../../../public/images/Profile-pic.jpg";
import Info from "@/components/Info/Info";
import { useSelector } from "react-redux";
import useTimelineAnimation from "../../hooks/useTimelineAnimtion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import Timeline from "@/components/TimelineComponent/Timeline";
import { timelineData } from "@/Constants/TimelineData";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // useTimelineAnimation();

  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

  useEffect(() => {
    const timelineCards = document.querySelectorAll(".timeline-card");

    timelineCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 }, // Start state: invisible and slightly shifted down
        {
          opacity: 1,
          y: 0, // End state: visible and aligned
          duration: 0.8,
          ease: "power1.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // Start animation when the card is near the viewport
            toggleActions: "play none none reverse", // Only play forward and reverse on scroll
          },
        }
      );
    });

    // Timeline Line Animation
    const timelineLine = document.querySelector(".timeline-line");
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

        <div className="flex flex-col md:flex-row justify-between items-center gap-20 mx-8">
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

          {/* Right Section - Timeline */}
          {/* <div
            className="right-section w-full mx-auto relative overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 112px)" }}
          >
            <VerticalTimeline>
              {timelineData.map((item, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: isDarkMode ? "#2d3748" : "#f7fafc",
                    color: isDarkMode ? "#fff" : "#000",
                  }}
                  contentArrowStyle={{
                    borderRight: `7px solid ${
                      isDarkMode ? "#2d3748" : "#f7fafc"
                    }`,
                  }}
                  iconStyle={{
                    background: isDarkMode ? "#4a5568" : "#e2e8f0",
                    color: isDarkMode ? "#fff" : "#000",
                  }}
                  icon={<MdWork />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <p>{item.description}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div> */}
          {/* <Timeline timelineData={timelineData} isDarkMode={isDarkMode} /> */}
        </div>
      </div>
    </section>
  );
};

export default About;
