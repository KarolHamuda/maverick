import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header/header";
import Scroll from "./locomotiveScroll";
import "./locomotive-scroll.css";
import CustomCursor from "./customcursor/customcursor";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
    <CustomCursor />
      <Scroll />
      <Header />
      <div data-scroll-container>
        {children}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
