import React, { useState } from "react";
import image from "../../assests/profile/P1.png";
import "./Navbar.css";
import Modal from "../../Utils/Modal/Modal";
import Profile from "../Profile/Profile";

function Navbar(props) {
  const [isNav, setNav] = useState(false);
  return (
    <>
      <div className="text-end pe-3 py-2">
        {!isNav ? (
          <i
            className="bx bx-menu fs-1 menu-icons"
            onClick={() => setNav(!isNav)}
          ></i>
        ) : (
          <i
            className="bx bx-x fs-1 menu-icons"
            onClick={() => setNav(!isNav)}
          ></i>
        )}
      </div>
      <nav className={isNav ? "cnavbar setNav" : "cnavbar"}>
        <div className="navbar-left">
          <span className="li-name text-capitalize">{props.liName}</span>
        </div>
        {props.liName === "Dashboard" && (
          <div className="navbar-center">
            <div className="search-bar-container">
              <input
                type="text"
                placeholder="Search..."
                className="search-bar"
              />
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
          <Modal
            btnText={
              <img src={image} alt="User Profile" className="user-profile" />
            }
            btnClasss="border-0 bg-transparent"
            bodyClass="bg-white"
            closeIcon="fs-1"
          >
            <Profile />
          </Modal>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
