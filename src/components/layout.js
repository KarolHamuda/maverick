import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import About from "./about/about"
import Slideshow from "./slideshow/slideshow"
import Services from "./services/services"
import Elevate from "./elevate/elevate"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <About />
      <Slideshow />
      <Services />
      <Elevate />
    </>
  )
}

export default Layout
