import React from "react";
import * as Components from "./components/index";
import { Helmet } from "react-helmet";
import DAVAbout from "./components/DAVaboutcourse";
import DAVHeader from "./components/DAVcourseheader";
import DAVPlan from "./components/DAVcourseplan";

export default function DAVCourse() {
  return (
    <div className="Coursepage">
      <Helmet>
        <title>DAV Certification</title>
        <meta name="description" content="Certificate Course in DAV" />
      </Helmet>
      <div className="empty darkblue"></div>
      <DAVHeader />
      <DAVAbout />
      <DAVPlan />
    </div>
  );
}

