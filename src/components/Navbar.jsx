import React from "react";
import "./Navbar.css";
import logo from "../assets/logo-placeholder.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Saeturnus</h1>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <a href="#">What we do</a>
          </li>
          <div className="navbar-divider"></div>
          <li>
            <a href="#">Who we are</a>
          </li>
        </ul>

        <button className="navbar-button">Lets Talk</button>
      </div>
    </nav>
  );
}

export default Navbar;
