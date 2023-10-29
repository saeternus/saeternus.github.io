import React from "react";
import "./Coursesheader.css";
import Check from "../assets/check.png";

export default function DAVHeader() {
  return (
    <>
      <div className="headerbox darkblue">
        <div className="headertext">
          <div className="courseheading">
          Certificate Course in Python - Data Analysis and Visualisation
          </div>
          <div className="coursedes">
          Master the art of data analysis and visualization with Python. From Python fundamentals and programming techniques to data handling, exploratory data analysis, machine learning, geospatial data visualization, and statistical analysis, this comprehensive course equips you with the skills needed to unlock the potential of data in today's data-driven world.
          </div>
          <div className="coursepublish">
            <div className="circle"></div>
            <div>Course starts from</div>
            <div className="name">December 15, 2023</div>
            <div className="checkicon">
              <img src={Check} alt="" />
            </div>
          </div>
          <div className="coursepublish">
            <div className="circle"></div>
            <div>For more info contact</div>
            <div className="number">9450906849</div>
            <div>
              or join{" "}
              <a
                href="https://chat.whatsapp.com/HkrLN4L6LdaGuhj1TqkYWT"
                target="_blank"
              >
                Whatsapp Group
              </a>
            </div>
            <div className="checkicon">
              <img src={Check} alt="" />
            </div>
          </div>
          <div className="courseregister">
            <div className="link">
              <a href="https://forms.gle/GnXUAxDczULkvQQF6" target="_blank">
                <div className="registerbutton">Register Now</div>
              </a>
            </div>
            <div className="pricedetails">
              <div className="amt">
                <div className="price">₹2,950</div>
                <div className="mrp">₹7,375</div>
                <div className="discount">60% off</div>
              </div>
              <div className="tax">Inclusive of GST</div>
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
              <div className="featurenumber">12</div>
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

