import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import Footer from "../footer/Footer";


function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    switch (pathname) {
      case "/":
        document.title = "Saeternus";
        break;
      case "/services":
        document.title = "Services - Saeternus";
        break;
      case "/courses":
        document.title = "Courses - Saeternus";
        break;
      case "/contact-us":
        document.title = "Contact - Saeternus";
        break;
      default:
        document.title = "Saeternus"; 
        break;
    }
  }, [location]);
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
              <Link to="/services">Services</Link>
            </li>
            <li>
              <div className="navbar-divider"></div>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
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
