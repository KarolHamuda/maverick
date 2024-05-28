import React, { useState, useEffect, useRef } from 'react';
import * as styles from './services.module.css';
import servicesVideo from '../../images/services_1.mp4';
import servicesImage1 from '../../images/services_2.png';
import servicesImage2 from '../../images/services_3.png';

const Services = () => {
  const [hovered, setHovered] = useState(null);
  const videoRef = useRef(null);

  const handleMouseEnter = (image) => {
    setHovered(image);
    if (image === 'video' && videoRef.current && videoRef.current.paused) {
      videoRef.current.play();
    }
  };
  
  const handleMouseLeave = () => {
    setHovered(null);
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
    }
  };
  
  // Add event listener to handle video state changes
  useEffect(() => {
    const handleVideoStateChange = () => {
      if (hovered === 'video' && videoRef.current) {
        if (videoRef.current.ended) {
          videoRef.current.currentTime = 0; // Reset video to beginning
        } else if (videoRef.current.paused) {
          videoRef.current.play();
        }
      }
    };
  
    if (videoRef.current) {
      videoRef.current.addEventListener('ended', handleVideoStateChange);
      videoRef.current.addEventListener('playing', handleVideoStateChange);
      videoRef.current.addEventListener('paused', handleVideoStateChange);
    }
  
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleVideoStateChange);
        videoRef.current.removeEventListener('playing', handleVideoStateChange);
        videoRef.current.removeEventListener('paused', handleVideoStateChange);
      }
    };
  }, [hovered]);
  
  // Make sure to clean up event listeners when component unmounts
  

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
              <div className={styles.videoContent}>
                  <div className={styles.contentText}>
                  Branding. We are here for the long term, helping you address your needs and challenges. With our subscription, it's easy to add requests and let us handle them one by one with top-quality care.
                  </div>
              </div>
              <div className={styles.vector}>
                <svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_b_488_367)">
                  <circle cx="35" cy="35" r="35" fill="black" fill-opacity="0.01"/>
                  <circle cx="35" cy="35" r="34.5" stroke="white" stroke-opacity="0.25"/>
                  </g>
                  <g clip-path="url(#clip0_488_367)">
                  <path d="M35.931 34.1724H47V35.8276H35.931V47H34.069V35.8276H23V34.1724H34.069V23H35.931V34.1724Z" className={styles.cross}/>
                  </g>
                  <defs>
                  <filter id="filter0_b_488_367" x="-25" y="-25" width="120" height="120" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.5"/>
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_488_367"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_488_367" result="shape"/>
                  </filter>
                  <clipPath id="clip0_488_367">
                  <rect x="23" y="23" width="24" height="24" rx="12" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </div>
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
              <div className={styles.videoContent}>
                  <div className={styles.contentText}>
                  Branding. We are here for the long term, helping you address your needs and challenges. With our subscription, it's easy to add requests and let us handle them one by one with top-quality care.
                  </div>
              </div>
              <div className={styles.vector}>
                <svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_b_488_367)">
                  <circle cx="35" cy="35" r="35" fill="black" fill-opacity="0.01"/>
                  <circle cx="35" cy="35" r="34.5" stroke="white" stroke-opacity="0.25"/>
                  </g>
                  <g clip-path="url(#clip0_488_367)">
                  <path d="M35.931 34.1724H47V35.8276H35.931V47H34.069V35.8276H23V34.1724H34.069V23H35.931V34.1724Z" className={styles.cross}/>
                  </g>
                  <defs>
                  <filter id="filter0_b_488_367" x="-25" y="-25" width="120" height="120" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.5"/>
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_488_367"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_488_367" result="shape"/>
                  </filter>
                  <clipPath id="clip0_488_367">
                  <rect x="23" y="23" width="24" height="24" rx="12" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </div>
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
              <div className={styles.videoContent}>
                  <div className={styles.contentText}>
                  Branding. We are here for the long term, helping you address your needs and challenges. With our subscription, it's easy to add requests and let us handle them one by one with top-quality care.
                  </div>
              </div>
              <div className={styles.vector}>
                <svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_b_488_367)">
                  <circle cx="35" cy="35" r="35" fill="black" fill-opacity="0.01"/>
                  <circle cx="35" cy="35" r="34.5" stroke="white" stroke-opacity="0.25"/>
                  </g>
                  <g clip-path="url(#clip0_488_367)">
                  <path d="M35.931 34.1724H47V35.8276H35.931V47H34.069V35.8276H23V34.1724H34.069V23H35.931V34.1724Z" className={styles.cross}/>
                  </g>
                  <defs>
                  <filter id="filter0_b_488_367" x="-25" y="-25" width="120" height="120" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.5"/>
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_488_367"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_488_367" result="shape"/>
                  </filter>
                  <clipPath id="clip0_488_367">
                  <rect x="23" y="23" width="24" height="24" rx="12" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </div>
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
