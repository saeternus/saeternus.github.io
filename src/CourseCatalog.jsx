import React from "react";
import * as Components from "./components";
import "./CourseCatalog.css";

const courseFiles = require.context("./AllCourses", false, /\.js$/);
const courses = courseFiles.keys().map((fileName) => courseFiles(fileName).default);

function CourseCatalog() {
  return (
    <div className="coursecontainer">
      <span className="catalogpageheading">Course Catalog</span>
      <div className="courseflex">
        {courses.map((course, index) => (
          <Components.CourseCard
            key={index}
            img={course.image}
            category={"Course"}
            heading={course.header}
            link={`/courses/${course.slug}`} 
            price={course.price}
            mrp={`${course.originalPrice}`}
            offer={`${course.discount}`}
          />
        ))}
      </div>
    </div>
  );
}

export default CourseCatalog;