import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useTimelineAnimation = () => {
  useEffect(() => {
    const timeline = document.querySelector(".timeline-line");

    // Grow the timeline line
    gsap.fromTo(
      timeline,
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

    // Animate timeline cards
    gsap.utils.toArray(".timeline-card").forEach((card, index) => {
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
  }, []);
};

export default useTimelineAnimation;
