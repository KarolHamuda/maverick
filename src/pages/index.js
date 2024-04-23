import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/about/about"
import Slideshow from "../components/slideshow/slideshow"
import Services from "../components/services/services"
import Elevate from "../components/elevate/elevate"
import Design from "../components/design/design"
import Selected from "../components/selected/selected"
import Button from "../components/button/button"
import Aboutus from "../components/aboutus/aboutus"
import Brands from "../components/brands/brands"
import Chat from "../components/chat/chat"
import Footer from "../components/footer/footer"

const IndexPage = () => (
  <>
  
  <Layout>
  <About />
      <Slideshow />
      <Services />
      <Elevate />
      <Design />
      <Selected />
      <Button />
      <Aboutus />
      <Brands />
      <Chat />
      <Footer />
  </Layout>
  </>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
