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
          <p style={textheadStyle}>Main section text.</p>
          <p style={textStyle}>Lörem ipsum intrajira elektrolog och monovis inte bör.
            Sen mytofas agnostitism autod, odenade bining.
            Tijälig dekanibost aska då sprita tetraling
            puling och dorar. Intrahet intraling
            ditevis att pretism resade ojerade.
            Tigas bende. </p>
        </div>
        {/* <img src={mainImage} alt="Main" style={imageStyle} /> */}
      </div>
    </div>
  );
}

export default MainSection;
