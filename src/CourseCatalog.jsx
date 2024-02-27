import React from "react";
import * as Components from "./components";
import "./CourseCatalog.css";

const courseFiles = require.context("./AllCourses", false, /\.js$/);




// Assuming each course object has an 'order' property
const courses = courseFiles.keys().map((fileName) => {
  const courseModule = courseFiles(fileName).default;
  // Extract the 'order' from the courseModule or set default to 0 if it doesn't exist
  const order = courseModule.order || 0;
  return { ...courseModule, order };
});

// Sort the courses array based on the 'order' property
courses.sort((a, b) => a.order - b.order);

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
            order={course.order}
          />
        ))}
      </div>
    </div>
  );
}

export default CourseCatalog;
