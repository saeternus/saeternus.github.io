import React from "react";
import "./Coursesheader.css";
import Check from "../assets/check.png";

function Coursesheader() {
  return (
    <>
      <div className="headerbox darkblue">
        <div className="headertext">
          <div className="courseheading">
            Certificate Course in Geographical Information System (GIS)
          </div>
          <div className="coursedes">
            Emerging technologies such as GIS (Geographic Information System)
            and RS (Remote Sensing) are instrumental in addressing intricate
            global challenges and impacting various aspects of life. In this
            context, the role of a Geospatial expert is gaining significance in
            the decision-making process. Acquiring practical knowledge is
            essential to comprehensively grasp the underlying concepts and
            unlock the potential for innovative applications of these
            technologies across diverse domains.
          </div>
          <div className="coursepublish">
            <div className="circle"></div>
            <div>Course starts from</div>
            <div className="name">August 7, 2023</div>
            <div className="checkicon">
              <img src={Check} alt="" />
            </div>
          </div>
          <div className="link">
            <a href="https://forms.gle/kMVo8W5eGjoZ1q5A9" target="_blank">
              <div className="registerbutton">Register Now</div>
            </a>
          </div>
        </div>
      </div>
      <div className="feturesbox">
        <div className="eighty">
          <div className="feturesbox">
            <div className="coursefeature">
              <div className="featurenumber">6 Weeks</div>
              <div className="featuretext">Length of Course</div>
            </div>
            <div className="coursefeature">
              <div className="featurenumber">18+</div>
              <div className="featuretext">Total Assignment</div>
            </div>
            <div className="coursefeature">
              <div className="featurenumber">20+</div>
              <div className="featuretext">Video Lessons</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coursesheader;
