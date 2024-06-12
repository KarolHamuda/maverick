import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Adjust the path if necessary

const Scroll = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector("[data-scroll-container]");
    if (!scrollContainer) return;

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
    });

    locomotiveScroll.on("scroll", (instance) => {
      document.documentElement.setAttribute("data-direction", instance.direction);
      window.dispatchEvent(new CustomEvent('locoscroll', { detail: instance }));
    });

    const handleAnchorClick = (event) => {
      event.preventDefault();
      const target = event.currentTarget.getAttribute('href');
      if (target && locomotiveScroll) {
        locomotiveScroll.scrollTo(target);
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      locomotiveScroll.destroy();
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return null;
};

export default Scroll;
