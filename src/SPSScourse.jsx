import React from "react";
import Coursesheader from "./components/courses/SPSScourseheader";
import Aboutcourse from "./components/courses/SPSSaboutcourse";
import Courseplan from "./components/courses/SPSScourseplan";
import { Helmet } from "react-helmet";

function GIScourse() {
  return (
    <div className="Coursepage">
      <Helmet>
        <title>SPSS Certification</title>
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
