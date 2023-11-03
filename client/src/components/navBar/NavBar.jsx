import React from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar-container">
      <img src={logo} alt="icon" />
      <nav>
        <Link to="/" className="navbar-link">
          Burgur Builder
        </Link>
        <Link to="/auth" className="navbar-link">
          Sign In
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
