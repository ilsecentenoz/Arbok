/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Footer from "./footer";
import Form from "./form";
import Logo from "../images/logo-venis-black.svg";
import Img1 from "../images/../images/image1.svg";

const Layout = ({}) => {
  return (
    <>
      <section className="layout">
        <div className="header">
          <img src={Logo} alt="logo" />
        </div>
        <div className="contentGeneral">
          <img src={Img1} />
          <Form />
        </div>
        <Footer />
      </section>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
