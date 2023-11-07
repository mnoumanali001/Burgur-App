import React from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { deleteLoggedUser, getLoggedUser } from "../../utils/user";

function NavBar() {
  const data = getLoggedUser();
  const navigate = useNavigate();
  const handleLogout = () => {
    deleteLoggedUser();
    navigate("/");
  };
  return (
    <div className="navbar-container">
      <img src={logo} alt="icon" />
      <nav style={{width : data ? "20%" : "15%"}}>
        <Link to="/" className="navbar-link">
          Burgur Builder
        </Link>
        {data ? (
          <Link to="/orders" className="navbar-link">
            Orders
          </Link>
        ) : null}
        {data ? (
          <p className="navbar-link" onClick={handleLogout}>
            Logout
          </p>
        ) : (
          <Link to="/auth" className="navbar-link">
            Sign In
          </Link>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
