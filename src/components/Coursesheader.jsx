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
            <div>Course starts</div>
            <div className="name">Soon</div>
            <div className="checkicon">
              <img src={Check} alt="" />
            </div>
          </div>
          <div className="coursepublish">
            <div className="circle"></div>
            <div>For more info contact</div>
            <div className="number">9450906849</div>
            <div>
              or join {" "}
              <a href="https://chat.whatsapp.com/FRmZTHwsDLACdxUAQOg3GE" target="_blank">
                Whatsapp Group
              </a>
            </div>
            <div className="checkicon">
              <img src={Check} alt="" />
            </div>
          </div>
          <div className="courseregister">
            <div className="link">
              <a href="https://forms.gle/kMVo8W5eGjoZ1q5A9" target="_blank">
                <div className="registerbutton">Register Now</div>
              </a>
            </div>
            <div className="pricedetails">
              <div className="amt">
                <div className="price">₹2,950</div>
                <div className="mrp">₹5,900</div>
                <div className="discount">50% off</div>
              </div>
              <div className="tax">Inclusive of all GST</div>
            </div>
          </div>
        </div>
      </div>
      <div className="empty darkblue" style={{ height: "30px" }}></div>
      <div className="feturesbox">
        <div className="eighty">
          <div className="feturesbox">
            <div className="coursefeature">
              <div className="featurenumber">6 Weeks</div>
              <div className="featuretext">Course Duration</div>
            </div>
            <div className="coursefeature">
              <div className="featurenumber">18</div>
              <div className="featuretext">Live Lectures</div>
            </div>
            <div className="coursefeature">
              <div className="featurenumber">6+</div>
              <div className="featuretext">Hands-on Assignments</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coursesheader;
