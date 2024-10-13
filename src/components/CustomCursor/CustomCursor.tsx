"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [cursorColor, setCursorColor] = useState('gray');
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const springConfig = { damping: 25, stiffness: 500 };
    const outerCursorX = useSpring(cursorX, { damping: 20, stiffness: 300 });
    const outerCursorY = useSpring(cursorY, { damping: 20, stiffness: 300 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
          cursorX.set(e.clientX);
          cursorY.set(e.clientY);
        };
        
        window.addEventListener("mousemove", moveCursor);
        return () => {
          window.removeEventListener("mousemove", moveCursor);
        };
      }, [cursorX, cursorY]);

    useEffect(() => {
        document.body.style.cursor = "none";
        return () => {
            document.body.style.cursor = "default";
        } 
    }, []);

    const handleMouseEnter = (e: React.MouseEvent) => {
        const backgroundColor = getComputedStyle(e.currentTarget).backgroundColor;
        setCursorColor(backgroundColor === "rgba(0, 0, 0, 0)" ? "gray" : backgroundColor);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setCursorColor("gray");
    };

    const handleClick = () => {
        setCursorColor("blue");
        setTimeout(() => setCursorColor("gray"), 100);
    }

  return (
    <>
    <motion.div
        style={{
          x: outerCursorX,
          y: outerCursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className={`fixed pointer-events-none z-50 rounded-full w-[35px] h-[35px] border-2 border-gray-700 ${isHovered ? "scale-1.5" : ""}`}
        animate={{
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ duration: 0.2 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      />
      {/* Inner Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed pointer-events-none z-50 rounded-full w-[8px] h-[8px] bg-gray-700"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </>
  );
};

export default CustomCursor;
