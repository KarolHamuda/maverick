import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./header.module.css"

const Header = () => (
  <header className={styles.container}>
    <div className={styles.linkContainer}>
      <Link className={styles.link}>
        Home
      </Link>
      <Link className={styles.link}>
        About
      </Link>
      <Link className={styles.link}>
        Case Studies
      </Link>
      <Link className={styles.link}>
        Services
      </Link>
    </div>

    <div className={styles.logoContainer}>
      <div className={styles.logoImage}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21" fill="none">
          <g clip-path="url(#clip0_158_616)">
            <path d="M0 0.723267V20.2767H24.1899V0.723267H0ZM19.3936 15.3358H4.79627V5.55907H9.59254V10.3949H14.3888V5.55907H19.1851V15.3358H19.3936Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_158_616">
              <rect width="24.1899" height="19.5535" fill="white" transform="translate(0 0.723267)"/>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className={styles.logoText}>
        maverick
      </div>
    </div>

    <div className={styles.contactContainer}>
      <div className={styles.contactLink}>
        Let’s brand now
      </div>
      <div className={styles.pointer}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <circle cx="12.5" cy="12" r="12" fill="#EDFF23"/>
        <path d="M14.4304 15.9517L13.6634 15.1889L16.3267 12.5298H6.5V11.4219H16.3267L13.6634 8.75852L14.4304 8L18.4062 11.9759L14.4304 15.9517Z" fill="black"/>
        </svg>
      </div>
    </div>
  </header>
)

export default Header
