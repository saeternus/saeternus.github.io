import React from "react";
import "./Coursesheader.css";
import Check from "../assets/check.png";

function Coursesheader() {
  return (
    <>
      <div className="headerbox darkblue">
        <div className="headertext">
          <div className="courseheading">
            Certificate Course in Statistical Package for the Social Sciences
            (SPSS)
          </div>
          <div className="coursedes">
            Data analysis is one of the most flourishing fields right now as
            businesses around the world are trying to make sense of their data.
            However, there are several data analysis tools available in the
            market, but SPSS is a suite of software programs that analyses
            scientific data related to the social sciences. It offers a
            fast-visual modelling environment that ranges from the smallest to
            the most complex models. SPSS is designed to accommodate a wide
            variety of variable data formats, including Excel, CSV, SAS, and
            Stata data files. The data obtained from SPSS is used for surveys,
            data mining, market research, etc. SPSS training enables you to
            master all the essential concepts of SPSS for performing data
            analysis and statistics through hands-on exposure to industry use
            cases.
          </div>
          <div className="coursepublish">
            <div className="circle"></div>
            <div>Course starts soon!</div>
            {/* <div className="name">September 7, 2023</div> */}
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
                href="https://chat.whatsapp.com/FdbSxmUWe4yJTVNQvV1zZ2"
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
              <a href="https://forms.gle/EMas47VcUmrUctK78" target="_blank">
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
