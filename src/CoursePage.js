import React from 'react';
import Coursesheader from './components/courses/Coursesheader';
import Aboutcourse from './components/courses/Aboutcourse';
import Courseplan from './components/courses/Courseplan';
import { Helmet } from "react-helmet";

function CoursePage({ course }) {
  return (
    <div className="Coursepage">
      <Helmet>
        <title>{course.pageTitle}</title>
        <meta name="description" content={course.title} />
      </Helmet>
      <Coursesheader course={course} />
      <Aboutcourse course={course} />
      <Courseplan course={course} />
    </div>
  );
}

export default CoursePage;