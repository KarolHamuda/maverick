import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { scroll } from "../theme";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Adjust the path if necessary

const Scroll = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector("[data-scroll-container]");
    if (!scrollContainer) return;

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollContainer,
      ...scroll.options,
    });

    locomotiveScroll.update();

    // Expose to the global scope for ease of use
    window.scroll = locomotiveScroll;

    locomotiveScroll.on("scroll", (func) => {
      // Update `data-direction` with scroll direction
      document.documentElement.setAttribute("data-direction", func.direction);
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return null;
};

export default Scroll;
