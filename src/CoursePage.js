import React from 'react';
import Coursesheader from './components/courses/Coursesheader';
import Aboutcourse from './components/courses/Aboutcourse';
import Courseplan from './components/courses/Courseplan';

function CoursePage({ course }) {
  return (
    <div className="Coursepage">
      {console.log(course)}
      <Coursesheader course={course} />
      <Aboutcourse course={course} />
      <Courseplan course={course} />
    </div>
  );
}

export default CoursePage;