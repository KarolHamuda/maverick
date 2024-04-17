import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header/header"

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
      {children}
      
    </>
  )
}

export default Layout
