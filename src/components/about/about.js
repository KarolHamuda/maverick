import * as React from "react"
import * as styles from "./about.module.css"

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutText}>
          Creative minds crafting distinctive symbols, shaping brands, and constructing identity systems tailored to individuals.
        </div>
        <div className={styles.aboutButtonContainer}>
          <div className={styles.aboutButton}>
            ABOUT US
          </div>
          
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="#EDFF23"/>
            <path d="M13.9304 15.9517L13.1634 15.1889L15.8267 12.5298H6V11.4219H15.8267L13.1634 8.75852L13.9304 8L17.9062 11.9759L13.9304 15.9517Z" fill="black"/>
            </svg>
          
          </div>
      </div>
      <div className={styles.introduction}>
        Maverick Studio, located in Poland, is your go-to creative expert, dedicated to crafting unique <div className={styles.underline}>brands and logos</div> for early-stage startups and small to medium-sized brands.      </div>
    </div>
  )
}

export default About