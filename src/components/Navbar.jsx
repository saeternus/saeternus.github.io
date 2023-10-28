import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import Footer from "./Footer";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
        <Link className="navbar-logo" to="/">
          <img src={logo} alt="Logo" className="logo" />
          <h1>Saeternus</h1>
        </Link>
        <div className="navbar-links">
          <ul className={isMobileMenuOpen ? "hidden" : ""}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <div className="navbar-divider"></div>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <div className="navbar-divider"></div>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
          <Link to="/contact-us" className="navbar-button">
            Contact
          </Link>
          <div className="navbar-mobile-button" onClick={toggleMobileMenu}>
            <div className={`bar ${isMobileMenuOpen ? "bar-1" : ""}`}></div>
            <div className={`bar ${isMobileMenuOpen ? "bar-2" : ""}`}></div>
            <div className={`bar ${isMobileMenuOpen ? "bar-3" : ""}`}></div>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}

export default Navbar;
