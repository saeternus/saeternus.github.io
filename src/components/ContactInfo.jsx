import React from "react";
import "./ContactInfo.css";
import { Link } from "react-router-dom";

function ContactInfo() {
  return (
    <>
      <div className="footer">
        <div className="footerbox">
          <div className="footerlogo"></div>
          <div className="footeraddress">
            <h2>Registered Office Address</h2>
            <p className="addresscontent">
              Head Office :- B-201, IBITF Office, IIT Bhilai GEC Campus,
              Sejbahar, Chhattisgarh 492015
            </p>
            <p>Contact No. :- +91 80049 16849</p>
            <p>Contact Email :- hello@saeternus.com</p>
          </div>
          <div className="footerlist">
            <h2>Quick Links</h2>
            <ul className="footeritems">
              <Link to="/" className="links">
                Home
              </Link>
            </ul>
            <ul className="footeritems product">
              <Link to="/Our-Work" className="links">
                Our Work
              </Link>
            </ul>
            <ul className="footeritems">
              <Link to="/About-Us" className="links">
                About Us
              </Link>
            </ul>
            <ul className="footeritems">
              <Link to="/Contact-Us" className="links">
                Contact-Us
              </Link>
            </ul>
            <ul className="footeritems login">
              <Link to="/Courses" className="links">
                Courses
              </Link>
            </ul>
          </div>
        </div>
        <div className="footerbottom">
          <div className="footerbottomleft">
            <p>© 2023 All rights reserved</p>
          </div>
          <div className="footerbottomright">
            <p>Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
