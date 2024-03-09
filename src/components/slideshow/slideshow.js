import React from 'react'
import * as styles from "./slideshow.module.css"

const Slideshow = () => {
  return (
  <>
    <div className={styles.imageContainer}>
      <div className={styles.smallLeftImage}>

      </div>
      <div className={styles.Image}>

      </div>
      <div className={styles.smallRightImage}>

      </div>
    </div>
    <div className={styles.linkContainer}>
      <div className={styles.text}>
        FLOWHUB MAUI
      </div>
      <div className={styles.textLink}>
        VISUAL IDENTITY
      </div>
      <div className={styles.textLink}>
        CREATIVE DIRECTION
      </div>
      <div className={styles.textLink}>
        LOGO DESIGN
      </div>
      <div className={styles.pointerLink}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#EDFF23"/>
        <path d="M13.9304 15.9517L13.1634 15.1889L15.8267 12.5298H6V11.4219H15.8267L13.1634 8.75852L13.9304 8L17.9062 11.9759L13.9304 15.9517Z" fill="black"/>
      </svg>
      </div>
    </div>
    </>
  )
}

export default Slideshow