import React from "react";
import * as Components from "./components/index";
import { Helmet } from "react-helmet";
import CRMHeader from "./components/CRMcourseheader";
import CRMAbout from "./components/CRMaboutcourse";
import CRMPlan from "./components/CRMcourseplan";

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

