/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Software Developer",
        "Frontend Developer",
        "Full Stack Developer",
        "Tech Enthusiast",
      ],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <p>
      I'm a <br />
      <span ref={el}></span>
    </p>
  );
};

export default TypingEffect;

// const el = useRef(null);

//   useEffect(() => {
//     if (el.current) {
//       const messages = [
//         "I'm a Software Developer",
//         "I'm a Frontend Developer",
//         "I'm a Full Stack Developer",
//         "I'm a Tech Enthusiast",
//       ];
//       let i = 0;
//       let j = 0;
//       let typingInterval;

//       const typeMessage = () => {
//         if (j < messages[i].length) {
//           el.current.innerHTML += messages[i][j];
//           j++;
//         } else {
//           clearInterval(typingInterval);
//           setTimeout(() => {
//             el.current.innerHTML = "";
//             j = 0;
//             i = (i + 1) % messages.length;
//             typingInterval = setInterval(typeMessage, 100); // Adjust typing speed as needed
//           }, 2000); // Pause between messages
//         }
//       };

//       typingInterval = setInterval(typeMessage, 100);
//       return () => clearInterval(typingInterval);
//     }
//   }, []);
