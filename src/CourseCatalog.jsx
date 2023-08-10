import React from "react";
import * as Components from "./components";
import "./CourseCatalog.css";

function CourseCatalog() {
  return (
    <div className="coursecontainer">
      <Components.CourseCard
        img={"src/assets/image.png"}
        category={"Course"}
        heading={"Geographical Information System (GIS)"}
      />
    </div>
  );
}

export default CourseCatalog;
