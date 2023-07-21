import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import Footer from "./Footer";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link className="navbar-logo" to="/">
          <img src={logo} alt="Logo" className="logo" />
          <h1>Saeternus</h1>
        </Link>
        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <div className="navbar-divider"></div>
            <li>
              <Link to="/courses/gis">Courses</Link>
            </li>
            <div className="navbar-divider"></div>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>

          <Link to="contact-us" className="navbar-button">
            Contact
          </Link>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}

export default Navbar;
