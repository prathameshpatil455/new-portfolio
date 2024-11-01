"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const InteractiveShapes = () => {
  const containerRef = useRef(null);
  const shapePositions = Array.from({ length: 5 }); // Define positions array for shapes

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const xOffsets = shapePositions.map(() => useMotionValue(0));
  const yOffsets = shapePositions.map(() => useMotionValue(0));

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      xOffsets.forEach((xOffset) => {
        xOffset.set((Math.random() - 0.5) * 100); // Random offset for each shape
      });
      yOffsets.forEach((yOffset) => {
        yOffset.set((Math.random() - 0.5) * 100);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, xOffsets, yOffsets]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapePositions.map((_, i) => (
        <motion.div
          key={i}
          style={{
            x: xOffsets[i],
            y: yOffsets[i],
            rotate: i * 20,
            background: `hsl(${i * 60}, 100%, 70%)`,
          }}
          className="w-16 h-16 bg-opacity-50 rounded-full"
          initial={{ opacity: 0.5, scale: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.5,
            yoyo: Infinity,
          }}
        />
      ))}
    </div>
  );
};

export default InteractiveShapes;
