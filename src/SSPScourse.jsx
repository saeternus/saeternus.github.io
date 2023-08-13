import React from "react";
import Coursesheader from "./components/SSPScourseheader";
import Aboutcourse from "./components/SSPSaboutcourse";
import Courseplan from "./components/SSPScourseplan";
import { Helmet } from "react-helmet";

function GIScourse() {
  return (
    <div className="Coursepage">
      <Helmet>
        <title>GIS Certification</title>
        <meta
          name="description"
          content="Certificate Course in Statistical Package for the Social Sciences (SPSS)"
        />
      </Helmet>
      <div className="empty darkblue"></div>
      <Coursesheader />
      <Aboutcourse />
      <Courseplan />
    </div>
  );
}

export default GIScourse;
