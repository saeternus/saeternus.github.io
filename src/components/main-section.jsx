import React from "react";
import mainImage from "../assets/main-img.png";
import './Why.css'

function MainSection() {
  const sectionStyle = {
    display: "flex",
    alignItems: "flex-start",
    height: "90vh",
    paddingTop: '5%',

  };

  const imageStyle = {
    maxHeight: "80%",
    marginLeft: "2rem",
  };

  const textheadStyle = {
    fontSize: "4rem",
    fontWeight: "bold",
    marginLeft: "2rem",
  };

  const textStyle = {
    fontSize: "2rem",
    fontWeight: "regular",
    marginLeft: "2rem",
  };
  return (
    <div className="color">
      <div className="main-section" style={sectionStyle}>
        <div className="Content">
          <p style={textheadStyle}>Innovating for your success.</p>
          <p style={textStyle}>Your success is our success. We are committed to delivering innovative solutions and exceptional service to help you achieve your goals. Let us help you turn your vision into a reality. </p>
        </div>
        {/* <img src={mainImage} alt="Main" style={imageStyle} /> */}
      </div>
    </div>
  );
}

export default MainSection;
