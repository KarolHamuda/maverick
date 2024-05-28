import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import * as styles from './slideshow.module.css';
import sliderImage from '../../images/slider.jpeg';

gsap.registerPlugin(ScrollTrigger);

const Slideshow = () => {
  useEffect(() => {
    const tl = gsap.timeline({ ease: 'none' });

    tl.from(`.${styles.image}`, {
      scale: 0.6,
      duration: 1,
      transformOrigin: 'top',
    }).to({}, { duration: 1 });

    ScrollTrigger.create({
      trigger: `.${styles.imageContainer}`,
      animation: tl,
      start: "top 80%",
      end: "top 0%",
      scrub: true,
      toggleActions: "restart none none none",

    });
  }, []);

  return (
    <>
    <div className={styles.imageContainer}>
      <img className={styles.image} src={sliderImage} alt="Slideshow" />
    </div>
    <div className={styles.rectangle} />
    </>
  );
};

export default Slideshow;
