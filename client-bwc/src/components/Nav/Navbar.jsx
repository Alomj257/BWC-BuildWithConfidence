import React from "react";
import image from "../../assests/profile/P1.png";
import "./Navbar.css";

function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="li-name text-capitalize">{props.liName}</span>
      </div>
      {props.liName === "Dashboard" && (
        <div className="navbar-center">
          <div className="search-bar-container">
            <input type="text" placeholder="Search..." className="search-bar" />
            <div className="search-icon">
              <i class="bx bx-search"></i>
            </div>
          </div>
        </div>
      )}
      <div className="navbar-right">
        <i class="bx bxs-message-dots icon"></i>
        <i class="bx bxs-heart icon"></i>
        <span className="username">Jahangir Alom</span>
        <img src={image} alt="User Profile" className="user-profile" />
      </div>
    </nav>
  );
}

export default Navbar;
