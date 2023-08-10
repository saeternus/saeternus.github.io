import React from "react";
import * as Components from "./components";
import "./CourseCatalog.css";
import img from "./assets/image.png";

function CourseCatalog() {
  return (
    <div className="coursecontainer">
      <span className="catalogpageheading">Course Catalog </span>
      <div className="courseflex">
        <Components.CourseCard
          img={img}
          category={"Course"}
          heading={"Geographical Information System (GIS)"}
          link={"/courses/gis"}
        />
      </div>
    </div>
  );
}

export default CourseCatalog;
