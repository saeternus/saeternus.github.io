import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import Footer from "./Footer";

function Navbar() {
  return (
    <>
    <nav className="navbar">
      <Link className="navbar-logo" to='/'>
        <img src={logo} alt="Logo" className="logo" />
        <h1>Saeternus</h1>
      </Link>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to='/courses/gis'>Courses</Link>
          </li>
          <div className="navbar-divider"></div>
          <li>
            <Link to='services'>Services</Link>
          {/* <a href="#">What we do</a> */}
          </li>
          <div className="navbar-divider"></div>
          <li>
            <Link to = 'About-Us'>About Us</Link>
            {/* <a href="#">Who we are</a> */}
          </li>
        </ul>

        <Link to='Contact-Us' className="navbar-button">Contact</Link>
      </div>
    </nav>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default Navbar;
