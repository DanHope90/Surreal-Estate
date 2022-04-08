import "../styles/NavBar.css";
import { Link, React } from "react-router-dom";
import logo from "../logo.png";

function NavBar() {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="nav-logo" />
      <ul>
        <Link className="navbar-links-items" to="/">
          View Properties
        </Link>
        <Link className="navbar-links-items" to="/add-property">
          Add Property
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
