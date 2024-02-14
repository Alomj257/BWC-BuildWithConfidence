import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="logo-details">
        <i class="bx bxl-bitcoin icon"></i>
        <div className="logo_name">BWC</div>
        <i
          className={`bx ${isOpen ? "bx-menu-alt-right" : "bx-menu"}`}
          id="btn"
          onClick={toggleSidebar}
        ></i>
      </div>
      <ul className="nav-list px-0">
        {/* <li>
                    <i className='bx bx-search'></i>
                    <input type="text" placeholder="Search..." />
                    <span className="tooltip">Search</span>
                </li> */}
        <li>
          <Link to="/">
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Dashboard</span>
          </Link>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <Link to="/tradeperson">
            <i class="bx bx-user-pin"></i>
            <span className="links_name">Tradeperson</span>
          </Link>
          <span className="tooltip">Tradeperson</span>
        </li>
        <li>
          <Link to="/post-job">
            <i class="bx bx-user-pin"></i>
            <span className="links_name">Post job</span>
          </Link>
          <span className="tooltip">Post job</span>
        </li>
        <li>
          <Link to="/create-job">
            <i class="bx bx-select-multiple"></i>
            <span className="links_name">Create Link job</span>
          </Link>
          <span className="tooltip">Create Link job</span>
        </li>
        <li>
          <Link to="/job-history">
            <i class="bx bx-history"></i>
            <span className="links_name">Job history</span>
          </Link>
          <span className="tooltip">Job history</span>
        </li>
        <li>
          <Link to="/supplier">
            <i class="bx bx-bell"></i>
            <span className="links_name">Suppliers</span>
          </Link>
          <span className="tooltip">Suppliers</span>
        </li>
        <li>
          <Link to="/">
            <i class="bx bx-message-rounded-dots"></i>
            <span className="links_name">Message</span>
          </Link>
          <span className="tooltip">Message</span>
        </li>
        <li>
          <Link to="/">
            <i class="bx bx-envelope"></i>
            <span className="links_name">Insurance</span>
          </Link>
          <span className="tooltip">Insurance</span>
        </li>
        <li>
          <Link to="/">
            <i className="bx bx-cog"></i>
            <span className="links_name">Setting</span>
          </Link>
          <span className="tooltip">Setting</span>
        </li>
        <li>
          <Link to="/">
            <i class="bx bx-help-circle"></i>
            <span className="links_name">Help & Support</span>
          </Link>
          <span className="tooltip">Help & Support</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
