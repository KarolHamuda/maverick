import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import * as styles from "./header.module.css"
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("none");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
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

    const handleHeaderVisibility = () => {
      const windowHeight = window.innerHeight;
      const scrollHeight = document.body.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop < windowHeight || scrollTop + windowHeight >= scrollHeight) {
        setVisible(true); // Always show header at the top and bottom of page
      } else if (scrollDirection === "down") {
        setVisible(false); // Hide header on full scroll down
      } else if (scrollDirection === "up") {
        setVisible(true); // Show header on full scroll up
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleHeaderVisibility);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleHeaderVisibility);
    };
  }, [prevScrollPos, scrollDirection]);

return (
  <header className={`${styles.container} ${visible ? "" : styles.hidden}`}>
    <div className={styles.linkContainer}>
      <Link to="/#about" className={styles.link}>
      <span className={styles.letter}>H</span>
        <span className={styles.letter}>o</span>
        <span className={styles.letter}>m</span>
        <span className={styles.letter}>e</span>
        
      </Link>
      <AnchorLink to="/#aboutus" className={styles.link}>
        
        <span className={styles.letter}>A</span>
        <span className={styles.letter}>b</span>
        <span className={styles.letter}>o</span>
        <span className={styles.letter}>u</span>
        <span className={styles.letter}>t</span>
      </AnchorLink>
      <AnchorLink to="/#selected" className={styles.link}>
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
      </AnchorLink>
      <AnchorLink to="/#services" className={styles.link}>
      <span className={styles.letter}>S</span>
        <span className={styles.letter}>e</span>
        <span className={styles.letter}>r</span>
        <span className={styles.letter}>v</span>
        <span className={styles.letter}>i</span>
        <span className={styles.letter}>c</span>
        <span className={styles.letter}>e</span>
        <span className={styles.letter}>s</span>
      </AnchorLink>
    </div>

    <div className={styles.logoContainer}>
    <svg width="140" height="23" viewBox="0 0 140 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1.99069V22.8899H25.8547V1.99069H0ZM20.7283 17.6089H5.12636V7.15932H10.2527V12.3279H15.3791V7.15932H20.5055V17.6089H20.7283Z" fill="white"/>
      <path d="M35.3821 20.4565V6.13694H38.3938V8.63718C39.4734 6.81882 40.894 5.90965 42.6271 5.90965C44.5875 5.90965 46.0365 6.90406 46.6048 8.92129C47.6276 7.07453 49.2755 5.90965 51.0654 5.90965C53.7929 5.90965 55.2703 7.52912 55.2703 10.3987V20.4565H52.2871V10.8817C52.2871 9.26223 51.6336 8.52353 50.2699 8.52353C48.3379 8.52353 46.8321 10.7112 46.8321 14.6605V20.4565H43.8488V10.8817C43.8488 9.26223 43.1953 8.52353 41.8316 8.52353C39.8144 8.52353 38.3938 10.8249 38.3938 14.8878V20.4565H35.3821Z" fill="white"/>
      <path d="M57.0354 16.3368C57.0354 13.4104 59.3936 11.6488 63.1724 11.6488H65.6726V11.0238C65.6726 9.31906 64.5645 8.52353 62.9451 8.52353C61.5529 8.52353 60.6153 9.177 60.1891 10.4555L57.5753 9.85888C58.0298 7.5007 60.1891 5.90965 62.9451 5.90965C66.4965 5.90965 68.6558 7.89847 68.6558 11.6204V20.4565H66.2408L65.8431 18.5245C64.7918 19.9735 63.3144 20.6838 61.4108 20.6838C58.8822 20.6838 57.0354 19.1495 57.0354 16.3368ZM65.6726 14.4616V14.0922H63.286C61.2404 14.0922 60.1607 14.8309 60.1607 16.3083C60.1607 17.3596 60.9563 18.0699 62.1211 18.0699C63.8543 18.0699 65.6726 16.7914 65.6726 14.4616Z" fill="white"/>
      <path d="M74.0818 20.4565L69.2234 6.13694H72.2635L75.474 16.7061L78.6845 6.13694H81.7246L76.8662 20.4565H74.0818Z" fill="white"/>
      <path d="M95.1649 12.8421V14.0922H84.9651C85.2208 16.5925 86.613 18.0699 88.7439 18.0699C90.477 18.0699 91.5566 17.3028 92.4942 15.5981L94.966 16.5641C93.7159 19.32 91.7555 20.6838 88.6018 20.6838C84.198 20.6838 81.8966 17.1039 81.8966 13.2967C81.8966 9.48953 84.198 5.90965 88.6018 5.90965C92.892 5.90965 95.1649 9.31906 95.1649 12.8421ZM85.1071 11.6488H92.0964C91.7555 9.80206 90.619 8.52353 88.6018 8.52353C86.8971 8.52353 85.5617 9.63159 85.1071 11.6488Z" fill="white"/>
      <path d="M97.3153 20.4565V6.13694H100.327V8.52353C101.265 6.81882 102.827 5.90965 104.56 5.90965C105.1 5.90965 105.725 6.02329 106.407 6.25059L105.839 9.03494C105.356 8.75082 104.816 8.60876 104.191 8.60876C101.946 8.60876 100.327 10.7681 100.327 15.2287V20.4565H97.3153Z" fill="white"/>
      <path d="M107.721 20.4565V6.13694H110.733V20.4565H107.721ZM107.21 2.01723C107.21 0.880765 108.062 0 109.227 0C110.392 0 111.273 0.880765 111.273 2.01723C111.273 3.15371 110.392 4.03447 109.227 4.03447C108.062 4.03447 107.21 3.15371 107.21 2.01723Z" fill="white"/>
      <path d="M112.864 13.2967C112.864 9.23382 115.223 5.90965 119.655 5.90965C122.723 5.90965 124.882 7.30182 125.934 9.94412L123.263 11.0522C122.496 9.37588 121.359 8.52353 119.655 8.52353C117.268 8.52353 115.99 10.4555 115.99 13.2967C115.99 16.1379 117.268 18.0699 119.655 18.0699C121.359 18.0699 122.468 17.2175 123.263 15.5412L125.934 16.6209C124.882 19.2632 122.723 20.6838 119.655 20.6838C115.223 20.6838 112.864 17.3596 112.864 13.2967Z" fill="white"/>
      <path d="M127.811 20.4565V0.340942H130.823V11.9614L135.88 6.13694H139.574L133.721 12.7285L140 20.4565H136.306L130.823 13.4672V20.4565H127.811Z" fill="white"/>
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
  </header>
)}

export default Header
