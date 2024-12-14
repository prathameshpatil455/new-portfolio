"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCircle } from "react-icons/fa"; // Icon library for the connection point

interface TimelineItem {
  title: string;
  description: string;
  date: string;
}

interface TimelineProps {
  timelineData: TimelineItem[];
  isDarkMode: boolean;
}

const Timeline: React.FC<TimelineProps> = ({ timelineData, isDarkMode }) => {
  return (
    <div
      className={`relative flex flex-col items-center w-full py-8 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Central Line */}
      <div
        className={`absolute w-1 ${
          isDarkMode ? "bg-gray-700" : "bg-gray-300"
        } h-full left-1/2 transform -translate-x-1/2`}
      ></div>

      {timelineData.map((item, index) => (
        <TimelineCard
          key={index}
          item={item}
          isLeft={index % 2 === 0} // Alternate sides
          isDarkMode={isDarkMode}
        />
      ))}
    </div>
  );
};

const TimelineCard: React.FC<{
  item: TimelineItem;
  isLeft: boolean;
  isDarkMode: boolean;
}> = ({ item, isLeft, isDarkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={`flex items-center w-full my-8 ${
        isLeft ? "justify-start" : "justify-end"
      }`}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Icon at Connection Point */}
      <div
        className={`absolute ${
          isLeft
            ? "left-1/2 -translate-x-1/2 -ml-2"
            : "right-1/2 translate-x-1/2 -mr-2"
        } top-1/2 transform -translate-y-1/2`}
      >
        <FaCircle
          className={`text-lg ${
            isDarkMode ? "text-blue-500" : "text-blue-700"
          }`}
        />
      </div>

      <div
        className={`relative p-4 rounded-lg shadow-md w-1/2 ${
          isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
        } ${isLeft ? "ml-12 text-left" : "mr-12 text-right"}`}
      >
        {/* Card Content */}
        <h3 className="text-lg font-bold">{item.title}</h3>
        <p className="text-sm mt-2">{item.description}</p>
        <span
          className={`text-xs font-medium mt-4 block ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {item.date}
        </span>
      </div>
    </motion.div>
  );
};

export default Timeline;
