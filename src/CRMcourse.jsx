import React from "react";
import * as Components from "./components/index";
import { Helmet } from "react-helmet";
import CRMHeader from "./components/courses/CRMcourseheader";
import CRMAbout from "./components/courses/CRMaboutcourse";
import CRMPlan from "./components/courses/CRMcourseplan";

export default function CRMCourse() {
  return (
    <div className="Coursepage">
      <Helmet>
        <title>Research Methodology Certification</title>
        <meta name="description" content="Certificate Course in Research Methodology" />
      </Helmet>
      <div className="empty darkblue"></div>
      <CRMHeader />
      <CRMAbout />
      <CRMPlan />
    </div>
  );
}

