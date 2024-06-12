import React, { useState, useEffect } from "react";
import * as styles from "./header.module.css";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("none");

  useEffect(() => {
    const handleScroll = (event) => {
      const currentScrollPos = event.detail.scroll.y;
      const scrollDelta = currentScrollPos - prevScrollPos;

      if (scrollDelta > 0) {
        setScrollDirection("down");
      } else if (scrollDelta < 0) {
        setScrollDirection("up");
      } else {
        setScrollDirection("none");
      }

      setPrevScrollPos(currentScrollPos);
    };

    const handleHeaderVisibility = (event) => {
      const windowHeight = window.innerHeight;
      const scrollHeight = document.body.scrollHeight;
      const scrollTop = event.detail.scroll.y;

      if (scrollTop < windowHeight || scrollTop + windowHeight >= scrollHeight) {
        setVisible(true); // Always show header at the top and bottom of page
      } else if (scrollDirection === "down") {
        setVisible(false); // Hide header on full scroll down
      } else if (scrollDirection === "up") {
        setVisible(true); // Show header on full scroll up
      }
    };

    window.addEventListener("locoscroll", handleScroll);
    window.addEventListener("locoscroll", handleHeaderVisibility);

    return () => {
      window.removeEventListener("locoscroll", handleScroll);
      window.removeEventListener("locoscroll", handleHeaderVisibility);
    };
  }, [prevScrollPos, scrollDirection]);

  return (
    <header className={`${styles.container} ${visible ? "" : styles.hidden}`}>
      <div className={styles.contentContainer}>
        <div className={styles.linkContainer}>
          <a href="#about" className={styles.link}>
            <span className={styles.letter}>H</span>
            <span className={styles.letter}>o</span>
            <span className={styles.letter}>m</span>
            <span className={styles.letter}>e</span>
          </a>
          <a href="#aboutus" className={styles.link}>
            <span className={styles.letter}>A</span>
            <span className={styles.letter}>b</span>
            <span className={styles.letter}>o</span>
            <span className={styles.letter}>u</span>
            <span className={styles.letter}>t</span>
          </a>
          <a href="#selected" className={styles.link}>
            <span className={styles.letter}>C</span>
            <span className={styles.letter}>a</span>
            <span className={styles.letter}>s</span>
            <span className={styles.letter}>e</span>
            &nbsp;
            <span className={styles.letter}>S</span>
            <span className={styles.letter}>t</span>
            <span className={styles.letter}>u</span>
            <span className={styles.letter}>d</span>
            <span className={styles.letter}>i</span>
            <span className={styles.letter}>e</span>
            <span className={styles.letter}>s</span>
          </a>
          <a href="#services" className={styles.link}>
            <span className={styles.letter}>S</span>
            <span className={styles.letter}>e</span>
            <span className={styles.letter}>r</span>
            <span className={styles.letter}>v</span>
            <span className={styles.letter}>i</span>
            <span className={styles.letter}>c</span>
            <span className={styles.letter}>e</span>
            <span className={styles.letter}>s</span>
          </a>
        </div>

        <div className={styles.logoContainer}>
          <svg width="140" height="23" viewBox="0 0 140 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* SVG content */}
          </svg>
        </div>

        <div className={styles.contactContainer}>
          <div className={styles.contactLink}>
            Let’s brand now
          </div>
          <div className={styles.pointer}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <circle cx="12.5" cy="12" r="12" fill="#EDFF23" className={styles.circle}/>
              <path d="M14.4304 15.9517L13.6634 15.1889L16.3267 12.5298H6.5V11.4219H16.3267L13.6634 8.75852L14.4304 8L18.4062 11.9759L14.4304 15.9517Z" fill="black" className={styles.arrow}/>
              <path d="M14.4304 15.9517L13.6634 15.1889L16.3267 12.5298H6.5V11.4219H16.3267L13.6634 8.75852L14.4304 8L18.4062 11.9759L14.4304 15.9517Z" fill="black" className={styles.hiddenArrow}/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
