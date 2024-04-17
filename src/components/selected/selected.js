import React from 'react'
import * as styles from "./selected.module.css"

const Selected = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.shift}>
          <div className={styles.shiftContainer}>
            <div className={styles.shiftHeader}>
              <p className={styles.title}>
              Selected work.{'\u00A0'}</p>Expertise that our clients trust to drive their business forward.
            </div>
            <div className={styles.shiftImageContainer}>
              <div className={styles.shiftImage} />
            </div>
            <div className={styles.textHeader}>
              Shift Conference
            </div>
            <div className={styles.textContent}>
            It’s time to shift your world
            </div>
            <div className={styles.textFooter}>
              <div className={styles.textFooterElement}>
              VISUAL IDENTITY
              </div>
              <div className={styles.textFooterElement}>
              CREATIVE DIRECTION
              </div>
              <div className={styles.textFooterElement}>
              LOGO DESIGN
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.poznan}>
            <div className={styles.poznanImageContainer}>
              <div className={styles.poznanImage} />
            </div>
            <div className={styles.textHeader}>
            Poznan City
            </div>
            <div className={styles.textContent}>
            Where Tradition Meets Tomorrow
            </div>
            <div className={styles.textFooter}>
              <div className={styles.textFooterElement}>
              VISUAL IDENTITY
              </div>
              <div className={styles.textFooterElement}>
              CREATIVE DIRECTION
              </div>
              <div className={styles.textFooterElement}>
              LOGO DESIGN
              </div>
              <div className={styles.textFooterElement}>
              REBRANDING
              </div>
            </div>
          </div>
          <div className={styles.stacknet}>
          <div className={styles.stacknetImageContainer}>
            <div className={styles.stacknetImage} />
          </div>
            <div className={styles.textHeader}>
            Stacknet
            </div>
            <div className={styles.textContent}>
            Transforming startup visions into reality
            </div>
            <div className={styles.textFooter}>
            <div className={styles.textFooterElement}>
              VISUAL IDENTITY
              </div>
              <div className={styles.textFooterElement}>
              CREATIVE DIRECTION
              </div>
              <div className={styles.textFooterElement}>
              LOGO DESIGN
              </div>
              <div className={styles.textFooterElement}>
              REBRANDING
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Selected