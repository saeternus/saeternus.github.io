import React from "react";
import * as Components from "./components";
import "./CourseCatalog.css";
import img from "./assets/image.png";
import img2 from "./assets/dav.png";
import img3 from "./assets/crm.jpg";
function CourseCatalog() {
  return (
    <div className="coursecontainer">
      <span className="catalogpageheading">Course Catalog </span>
      <div className="courseflex">
        <Components.CourseCard
          img={img}
          category={"Course"}
          heading={"Certificate Course in Geographical Information System (GIS)"}
          link={"/courses/gis"}
          mrp={"₹7,080"}
          offer={"₹3,540"}
        />
        <Components.CourseCard
          img={img}
          category={"Course"}
          heading={"Certificate Course in Statistical Package for the Social Sciences (SPSS)"}
          link={"/courses/spss"}
          mrp={"₹7,375"}
          offer={"₹2,950"}
        />
        <Components.CourseCard
          img={img3}
          category={"Course"}
          heading={"Certificate Course in Complete Research Methodology"}
          link={"/courses/crm"}
          mrp={"₹12,000"}
          offer={"₹5,900"}
        />
        <Components.CourseCard
          img={img2}
          category={"Course"}
          heading={"Python - Data Analysis and Visualisation Certification Course"}
          link={"/courses/dav"}
          mrp={"₹7,375"}
          offer={"₹2,950"}
        />        
      </div>
    </div>
  );
}

export default CourseCatalog;