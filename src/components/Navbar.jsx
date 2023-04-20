import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo-placeholder.png";
import ContactInfo from "./ContactInfo";

function Navbar() {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Saeturnus</h1>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <div className="navbar-divider"></div>
          <li>
            <Link to='Our-Work'>What we do</Link>
          {/* <a href="#">What we do</a> */}
          </li>
          <div className="navbar-divider"></div>
          <li>
            <Link to = 'About-Us'>Who we are</Link>
            {/* <a href="#">Who we are</a> */}
          </li>
        </ul>

        <Link to='Contact-Us' className="navbar-button">Lets Talk</Link>
      </div>
    </nav>
    <Outlet/>
    <ContactInfo/>
    </>
  );
}

export default Navbar;
