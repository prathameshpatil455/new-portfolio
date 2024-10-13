"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const NeonCursor: React.FC = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const [trail, setTrail] = useState<{ x: number; y: number; opacity: number }[]>([]);
    const trailLength = 100;
    const trailFadeDuration = 500;

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setTrail((prev) => [{ x: e.clientX, y: e.clientY, opacity: 1 }, ...prev].slice(0, trailLength));
        };

        window.addEventListener("mousemove", moveCursor);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [cursorX, cursorY]);

    useEffect(() => {
        // Hide the default cursor
        document.body.style.cursor = "none";
        return () => {
            document.body.style.cursor = "default";
        };
    }, []);

    useEffect(() => {
        const fadeTrail = setInterval(() => {
            setTrail((prev) => 
                prev.map((t, index) => ({
                    ...t,
                    opacity: Math.max(0, t.opacity - (1 / (trailFadeDuration / 100)))
                })).filter(t => t.opacity > 0)
            );
        }, 100);

        return () => clearInterval(fadeTrail);
    }, []);

    return (
        <>
            {trail.map(({ x, y, opacity }, index) => (
                <motion.div
                    key={index}
                    style={{
                        x,
                        y,
                        translateX: "-50%",
                        translateY: "-50%",
                        opacity,
                    }}
                    className="fixed pointer-events-none z-50 rounded-full w-[10px] h-[10px] bg-black opacity-50"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                />
            ))}
            <motion.div
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                className="fixed pointer-events-none z-50 rounded-full w-[10px] h-[10px] bg-black"
            />
        </>
    );
};

export default NeonCursor;
