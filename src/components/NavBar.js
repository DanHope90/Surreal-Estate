import React from "react";
import "../styles/NavBar.css";
import logo from "../logo.png";

function NavBar() {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="nav-logo" />
      <ul className="navbar-links">
        <li className="navbar-links-items">View Properties</li>
        <li className="navbar-links-items">Add a Property</li>
      </ul>
    </div>
  );
}

export default NavBar;
