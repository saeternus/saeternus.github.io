import React from "react";
import brain from "../assets/brain.png";
import "./brightminds.css";

function Brightminds() {
  return (
    <div className="brightbox brainimg">
      <div className="brain">
        <img src={brain} alt="Bright Minds" />
      </div>
      <div className="brighttext ">
        <p className="brighthead">Innovation at our core </p>
        <p className="brightcontent">
          Our team can assist you in transforming your business with the latest
          tech capabilities to stay ahead of the curve.
        </p>
      </div>
    </div>
  );
}

export default Brightminds;
