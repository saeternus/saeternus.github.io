import React from "react";
import mainImage from "../assets/main-img.png";

function MainSection() {
  const sectionStyle = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "100vh",
    paddingTop: "100px",
  };

  const imageStyle = {
    maxWidth: "60%",
    marginLeft: "2rem",
  };

  const textheadStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginLeft: "2rem",
  };

  const textStyle = {
    fontSize: "1rem",
    fontWeight: "regular",
    marginLeft: "2rem",
  };
  return (
    <div className="main-section" style={sectionStyle}>
      <div>
        <p style={textheadStyle}>This is the main section text.</p>
        <p style={textStyle}>This is the main section text.</p>
      </div>
      <img src={mainImage} alt="Main" style={imageStyle} />
    </div>
  );
}

export default MainSection;
