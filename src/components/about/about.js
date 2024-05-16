import * as React from "react";
import * as styles from "./about.module.css";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const About = () => {
  const [showPictures, setShowPictures] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    setShowPictures(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setShowPictures(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer} id="about">
        <div className={`${styles.aboutContainer} ${isHovering ? styles.hovering : ""}`}>
          <div className={styles.aboutText}>
            Creative minds crafting distinctive symbols, shaping brands, and constructing identity systems tailored to individuals.
          </div>
          <div className={`${styles.aboutButtonContainer} ${isHovering ? styles.hovering : ""}`}>
            <AnchorLink to="/#aboutus" className={styles.aboutButton} >
              ABOUT US
            </AnchorLink>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <circle cx="12.5" cy="12" r="12" fill="#EDFF23" className={styles.circle}/>
              <path d="M14.4304 15.9517L13.6634 15.1889L16.3267 12.5298H6.5V11.4219H16.3267L13.6634 8.75852L14.4304 8L18.4062 11.9759L14.4304 15.9517Z" fill="black" className={styles.arrow}/>
              <path d="M14.4304 15.9517L13.6634 15.1889L16.3267 12.5298H6.5V11.4219H16.3267L13.6634 8.75852L14.4304 8L18.4062 11.9759L14.4304 15.9517Z" fill="black" className={styles.hiddenArrow}/>
            </svg>
          </div>
        </div>
        <div className={`${styles.introduction} ${isHovering ? styles.hovering : ""}`}>
        We are your creative expert, dedicated to crafting unique{" "}
          <div
            className={styles.underline}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            brands
          </div>{" "}
          for startups and small to medium-sized brands.

        </div>
        {showPictures && (
            <div className={`${styles.pictures} ${isHovering ? styles.hovering : ""}`} >
              <div className={styles.poznan} />
              <div className={styles.sternum} />
              <div className={styles.stacknet} />
              <div className={styles.trackable} />
            </div>
          )}
      </div>
    </div>
  );
};

export default About;