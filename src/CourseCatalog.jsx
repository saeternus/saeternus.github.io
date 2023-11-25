import React from "react";
import * as Components from "./components";
import "./CourseCatalog.css";
import CourseData from './CourseData' 
import img from "./assets/image.png";
import img2 from "./assets/dav.png";
import img3 from "./assets/CRM.jpg";

function CourseCatalog() {
  return (
    <div className="coursecontainer">
      <span className="catalogpageheading">Course Catalog</span>
      <div className="courseflex">
        {CourseData.map((course, index) => (
          <Components.CourseCard
            key={index}
            img={course.image}
            category={"Course"}
            heading={course.header}
            link={`/courses/${course.slug}`} 
            price={course.price}
            mrp={`₹${course.price}`}
            offer={`${course.discount}`}
          />
        ))}
      </div>
    </div>
  );
}

export default CourseCatalog;
