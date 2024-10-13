import React from "react";
import { motion } from "framer-motion";

interface AnimatedBoxProps {
  children: React.ReactNode;
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({
  children,
  initial,
  animate,
  exit,
  transition,
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBox;
