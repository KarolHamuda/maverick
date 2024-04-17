import React from 'react'
import * as styles from "./design.module.css"

const Design = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>

      
      <div className={styles.header}>
        <div className={styles.title}>
        Design process.
        </div>Our philosophy is that a brand thrives in its symbols.
      </div>
      <div className={styles.canvas}>
        <div className={styles.canvasBlock}>
        <div className={styles.canvasBlockElement}>
            <div className={styles.canvasTitle}>
            01/<br />
            Briefing
            </div>
            <div className={styles.canvasContent}>
            Our philsophy is that a brand lives in the ouput. To achieve the right concept and feel we have to start in the right end, then establish it with the customer and most importantly avoid gaps in communication with the client.
            </div>
          </div>
          <div className={styles.canvasBlockElement}>
            <div className={styles.canvasTitle}>
            02/<br />
            Onboarding
            </div>
            <div className={styles.canvasContent}>
            Our philsophy is that a brand lives in the ouput. To achieve the right concept and feel we have to start in the right end, then establish it with the customer and most importantly avoid gaps in communication with the client.
            </div>
          </div>
          <div className={styles.canvasBlockElement}>
            <div className={styles.canvasTitle}>
            03/<br />
            Strategy (light)
            </div>
            <div className={styles.canvasContent}>
            Our philsophy is that a brand lives in the ouput. To achieve the right concept and feel we have to start in the right end, then establish it with the customer and most importantly avoid gaps in communication with the client.
            </div>
          </div>
          <div className={styles.canvasBlockElement}>
            <div className={styles.canvasTitle}>
            04/<br />
            Moodboard
            </div>
            <div className={styles.canvasContent}>
            Our philsophy is that a brand lives in the ouput. To achieve the right concept and feel we have to start in the right end, then establish it with the customer and most importantly avoid gaps in communication with the client.
            </div>
          </div>
          
             
        </div>

      </div>
      <div className={styles.arrow}>
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
          <g filter="url(#filter0_b_359_728)">
            <circle cx="35" cy="35" r="35" fill="white" fill-opacity="0.01"/>
            <circle cx="35" cy="35" r="34.5" stroke="white" stroke-opacity="0.25"/>
          </g>
          <path d="M36.9304 38.9517L36.1634 38.1889L38.8267 35.5298H29V34.4219H38.8267L36.1634 31.7585L36.9304 31L40.9062 34.9759L36.9304 38.9517Z" fill="white"/>
          <defs>
            <filter id="filter0_b_359_728" x="-25" y="-25" width="120" height="120" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.5"/>
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_359_728"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_359_728" result="shape"/>
            </filter>
          </defs>
        </svg>
        <div className={styles.rectangle} />
      </div>
      </div>
    </div>
  )
}

export default Design