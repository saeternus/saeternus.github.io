import React from "react";
import * as Components from "./components/index";
import { Helmet } from "react-helmet";
import DAVAbout from "./components/courses/DAVaboutcourse";
import DAVHeader from "./components/courses/DAVcourseheader";
import DAVPlan from "./components/courses/DAVcourseplan";

export default function DAVCourse() {
  return (
    <div className="Coursepage">
      <Helmet>
        <title>Python - Data Analysis and Visualisation Certification</title>
        <meta name="description" content="Certificate Course in Python - Data Analysis and Visualisation" />
      </Helmet>
      <div className="empty darkblue"></div>
      <DAVHeader />
      <DAVAbout />
      <DAVPlan />
    </div>
  );
}

