import React from "react";
import * as Components from "./components";
import "./CourseCatalog.css";
import img from "./assets/image.png";

function CourseCatalog() {
  return (
    <div className="coursecontainer">
      <Components.CourseCard
        img={img}
        category={"Course"}
        heading={"Geographical Information System (GIS)"}
      />
    </div>
  );
}

export default CourseCatalog;
