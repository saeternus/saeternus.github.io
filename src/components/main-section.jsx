import React from "react";
// import mainImage from "../assets/main-img.png";
import './main-section.css'
import image from '../assets/mainback.png'

function MainSection() {

  return (
    <div className="color">
      <div className="main-section">
        <div className="Content">
          <p className="textheadStyle">Innovating for your success.</p>
          <p className="textStyle">Your success is our success. We are committed to delivering innovative solutions and exceptional service to help you achieve your goals. Let us help you turn your vision into a reality. </p>
        </div>
        <div className="image">
          <img src={image} alt="img" />
        </div>
        {/* <img src={mainImage} alt="Main" style={imageStyle} /> */}
      </div>
    </div>
  );
}

export default MainSection;
