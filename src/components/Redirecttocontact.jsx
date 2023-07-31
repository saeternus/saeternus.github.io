import React from "react";
import "./Redirecttocontact.css";
import { Link } from "react-router-dom";

function Redirecttocontact() {
  return (
    <div className="redirectcontainer">
      <div className="redirecttext">
        <div className="redirectheadtext">Have a Project for Us?</div>
        <div className="redirectsubtext">
          We help your business succeed in the digital age.
        </div>
      </div>
      <Link to="/contact-us" className="contactusbutton">
        CONTACT US
      </Link>
    </div>
  );
}

export default Redirecttocontact;
