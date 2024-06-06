import React, { useEffect } from 'react';

import * as styles from './slideshow.module.css';
import sliderImage from '../../images/slider.jpeg';



const Slideshow = () => {

  return (
    <>
    <div className={styles.imageContainer}>
      <img className={styles.image} src={sliderImage} alt="Slideshow" />
      
    </div>
    
    </>
  );
};

export default Slideshow;
