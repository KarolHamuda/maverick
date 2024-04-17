import React from 'react'
import * as styles from "./button.module.css"

const Button = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.button}>
          See more
        </div>
        <div className={styles.line} />
      </div>
    </div>
  )
}

export default Button