"use client";
import React, { useEffect } from "react";
import magicMouse from "magicmouse.js";
import "magicmouse.js/dist/magic_mouse.css";

const MagicCursor = () => {
  useEffect(() => {
    // Initialize magicmouse.js with desired options
    magicMouse({
      "outerStyle": "circle",
      "hoverEffect": "circle-move",
      "hoverItemMove": false,
      "defaultCursor": false,
      "outerWidth": 30,
      "outerHeight": 30,
    });
  }, []);

  return null; // No need to return JSX since magicMouse.js adds cursor elements globally
};

export default MagicCursor;
