import React from "react";
import "../styles/SideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      <h2>Filter by city</h2>
      <ul>
        <Link to={`/?query={'city': 'Manchester'}`}>Manchester</Link>
      </ul>
    </div>
  );
}

export default SideBar;
