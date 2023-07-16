import React from "react";
import * as Components from "./components/index";
import { Helmet } from "react-helmet";

function Courses() {
  return (
    <div className="Coursespage">
      <Helmet>
        <title>GIS Certification</title>
        <meta name="description" content="Certificate Course in Geographical Information System (GIS)" />
      </Helmet>
      <div className="empty darkblue"></div>
      <Components.Coursesheader />
      <Components.Aboutcourse />
      <Components.Courseplan />
    </div>
  );
}

export default Courses;
