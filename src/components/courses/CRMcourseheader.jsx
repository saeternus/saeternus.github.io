import React from "react";
import "./Coursesheader.css";
import Check from "../../assets/check.png";

export default function CRMHeader() {
  return (
    <>
      <div className="headerbox darkblue">
        <div className="headertext">
          <div className="courseheading">
            Certificate Course in Research Methodology
          </div>
          <div className="coursedes">
          Gain expertise in research fundamentals, from understanding the core concepts and research types to mastering practical skills like hypothesis formulation, data analysis, and report writing. This comprehensive course empowers you to navigate the world of research, providing the knowledge and tools to conduct impactful studies and effectively communicate your findings.

          </div>
          <div className="coursepublish">
            <div className="circle"></div>
            <div>Course starts from</div>
            <div className="name">December 1, 2023</div>
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
                href="https://chat.whatsapp.com/HLFjC7Usbs12NDdY0pR1fV"
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
              <a href="https://forms.gle/EcBkBU18eM3o96S38" target="_blank">
                <div className="registerbutton">Register Now</div>
              </a>
            </div>
            <div className="pricedetails">
              <div className="amt">
                <div className="price">₹5,900</div>
                <div className="mrp">₹14,750</div>
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
              <div className="featurenumber">12 Weeks</div>
              <div className="featuretext">Course Duration</div>
            </div>
            <div className="coursefeature">
              <div className="featurenumber">24</div>
              <div className="featuretext">Live Lectures</div>
            </div>
            <div className="coursefeature">
              <div className="featurenumber">12+</div>
              <div className="featuretext">Hands-on Assignments</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

