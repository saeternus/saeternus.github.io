import React from "react";
import * as Components from "./components";
import "./App.css";
import { Helmet } from "react-helmet";

function ContactUs() {
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Portfolio page for Saeternus" />
      </Helmet>
      <Components.Contact />
    </>
  );
}

export default ContactUs;
