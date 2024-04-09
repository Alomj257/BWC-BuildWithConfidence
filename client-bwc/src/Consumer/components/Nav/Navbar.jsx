import React, { useEffect, useRef, useState } from "react";
import image from "../../../assests/profile/P1.png";
import "./Navbar.css";
import Modal from "../../../Utils/Modal/Modal";
import Profile from "../Profile/Profile";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { server } from "../../../Axios";
import { useNotice } from "../../../context/NoticeContext";
import Cookies from "js-cookie";

function Navbar(props) {
  const [isNav, setNav] = useState(false);
  const [logoutNav, setLogoutProfile] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");
  const page = path[path?.length - 1];
  const { state } = useNotice();
  const logNavRef = useRef();
  useEffect(() => {
    const handle = (e) => {
      if (logNavRef.current && !logNavRef?.current?.contains(e.target)) {
        setLogoutProfile(false);
      }
    };
    document.addEventListener("mousedown", handle);
  });
  const handleLogout = () => {
    Cookies.remove("auth");
    setAuth({ ...auth, user: null, token: "" });
    navigate("/auth");
  };
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
          <span className="li-name text-capitalize">{page}</span>
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
          <button
            className="btn position-relative"
            onClick={() => navigate("/consumer/chat")}
          >
            {" "}
            <i class="bx bxs-message-dots icon"></i>
            <span
              style={{ fontSize: "11px" }}
              className="position-absolute top-0 bg-danger px-1 d-flex ms-auto text-white rounded-circle"
            >
              {state?.chat > 0 ? state?.chat : ""}
            </span>
          </button>
          <i class="bx bxs-heart icon"></i>
          <span className="username">
            {auth?.user?.firstname} {auth?.user?.lastname}
          </span>
          <img
            onClick={() => setLogoutProfile(true)}
            src={auth?.user?.profile ? server + auth?.user?.profile : image}
            alt="User Profile"
            className="user-profile"
            ref={logNavRef}
          />
          <ul
            ref={logNavRef}
            style={{ listStyle: "none" }}
            className={`nav-profile ${
              !logoutNav ? "isNav-profile" : "Nav-profile"
            }`}
          >
            <li>
              <Modal
                btnText={
                  <>
                    <i className="bx bxs-user"></i> Profile{" "}
                  </>
                }
                btnClasss="border-0 bg-transparent"
                bodyClass="bg-white col-md-8 col-sm-10 col-12"
                closeIcon="fs-1"
              >
                <Profile id={auth?.user?._id} />
              </Modal>
            </li>
            <li style={{ cursor: "pointer" }} onClick={handleLogout}>
              <i className="bx bx-log-out-circle"></i> Logout
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
