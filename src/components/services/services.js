import React, { useState, useRef } from 'react';
import * as styles from './services.module.css';
import servicesVideo from '../../images/services_1.mp4';
import servicesImage1 from '../../images/services_2.png';
import servicesImage2 from '../../images/services_3.png';

const Services = () => {
  const [hovered, setHovered] = useState(null);
  const videoRef = useRef(null);

  const handleMouseEnter = (image) => {
    setHovered(image);
    if (image === 'video' && videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setHovered(null);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className={styles.container} id="services">
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <div className={styles.titleContainer}>
            <div className={styles.white}>Popular services. </div> Expertise that our clients trust to drive their business forward.
          </div>
        </div>

        <div className={styles.elementsContainer}>
          <div className={styles.brand}>
            <div className={styles.title}>
              Brand Identity Design
            </div>
            <div
              className={styles.image}
              onMouseEnter={() => handleMouseEnter('video')}
              onMouseLeave={handleMouseLeave}
              style={{ opacity: hovered && hovered !== 'video' ? 0.6 : 1 }}
            >
              <video
                ref={videoRef}
                src={servicesVideo}
                muted
                style={{ width: '100%', height: '100%', borderRadius: '2.5rem' }}
              />
            </div>
            <div className={styles.list}>
              Logo Design{"\n"}Brand Identity{"\n"}Visual Identity{"\n"}Brand Guidelines{"\n"}Creative Direction
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.title}>
              Content
            </div>
            <div
              className={styles.image}
              onMouseEnter={() => handleMouseEnter('image1')}
              onMouseLeave={handleMouseLeave}
              style={{ opacity: hovered && hovered !== 'image1' ? 0.6 : 1 }}
            >
              <img src={servicesImage1} alt="Content Service" style={{ width: '100%', height: '100%', borderRadius: '2.5rem' }} />
            </div>
            <div className={styles.list}>
              Stationery & Print{"\n"}Social Media{"\n"}Illustration{"\n"}Animation{"\n"}Graphic Design{"\n"}3D Design{"\n"}AI Generation
            </div>
          </div>

          <div className={styles.website}>
            <div className={styles.title}>
              Website Design
            </div>
            <div
              className={styles.image}
              onMouseEnter={() => handleMouseEnter('image2')}
              onMouseLeave={handleMouseLeave}
              style={{ opacity: hovered && hovered !== 'image2' ? 0.6 : 1 }}
            >
              <img src={servicesImage2} alt="Website Design Service" style={{ width: '100%', height: '100%', borderRadius: '2.5rem' }} />
            </div>
            <div className={styles.list}>
              User Research and Analysis {'\n'} Wire framing and Prototyping{"\n"}User Interface Design{"\n"}Visual Design
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Services;
