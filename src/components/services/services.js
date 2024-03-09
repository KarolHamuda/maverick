import React from 'react'
import * as styles from "./services.module.css"

const Services = () => {
  return (
    <div className={styles.container}>
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
          <div className={styles.image}>

          </div>
          <div className={styles.list}>
            Logo Design{"\n"}Brand Identity{"\n"}Visual Identity{"\n"}Brand Guidelines{"\n"}Creative Direction
          </div>
        </div>
          <div className={styles.content}>
            <div className={styles.title}>
              Content
            </div>
            <div className={styles.image}>

            </div>
            <div className={styles.list}>
              Stationery & Print{"\n"}Social Media{"\n"}Illustration{"\n"}Animation{"\n"}Graphic Design{"\n"}3D Design{"\n"}AI Generation
            </div>
        </div>
          <div className={styles.website}>
            <div className={styles.title}>
              Website Design
            </div>
            <div className={styles.image}>

            </div>
            <div className={styles.list}>
            User Research and Analysis {'\n'} Wire framing and Prototyping{"\n"}User Interface Design{"\n"}Visual Design
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Services