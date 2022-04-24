import "../styles/NavBar.css";
import React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import PropTypes from "prop-types";
import logo from "../logo.png";

function NavBar({ userID, onLogout, onLogin }) {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="nav-logo" />
      <ul className="ul-list">
        <Link className="navbar-links-main" to="/">
          View Properties
        </Link>
        <Link className="navbar-links-addProps" to="/add-property">
          Add Property
        </Link>
      </ul>
      {userID ? (
        <button type="submit" onClick={onLogout}>
          Sign Out
        </button>
      ) : (
        <FacebookLogin
          appId="715135646329687"
          autoLoad
          callback={onLogin}
          textButton="Login"
        />
      )}
    </div>
  );
}

export default NavBar;

NavBar.propTypes = {
  userId: PropTypes.number,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
}.isRequired;
