import React from "react";
import "./Coursesheader.css";
import Course from "../assets/image.png";
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
            New emerging technologies like GIS and Remote Sensing helps in
            solving complex man made world issues and touching all aspect of
            life. The role of a Geospatial expert is becoming more and more
            important in the decision making process. Practical knowledge is
            very crucial in order to understand the concept deeply to explore
            the innovative use of the technology and its application areas.
          </div>
          <div className="coursepublish">
            <div className="circle"></div>
            <div>Published By </div>
            <div className="name">Joe Natoli</div>
            <div className="checkicon">
              <img src={Check} alt="" />
            </div>
          </div>
          <div className="link">
            <a href="https://forms.gle/kMVo8W5eGjoZ1q5A9">
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
