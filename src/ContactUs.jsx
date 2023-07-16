import React from "react";
import * as Components from "./components";
import "./App.css";
import { Helmet } from "react-helmet";

function ContactUs() {
  return (
    <>
      <Helmet>
        <title>Saeternus</title>
        <meta name="description" content="Portfolio page for Saeternus" />
      </Helmet>
      <div className="empty"></div>
      <Components.Contact />
    </>
  );
}

export default ContactUs;
