import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar({ sidebar, role }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const kebabCase = (string) =>
    string
      ?.replace(/([a-z])([A-Z])/g, "$1-$2")
      ?.replace(/[\s_]+/g, "-")
      ?.toLowerCase();

  return (
    <>
      <div>
        {isSidebar ? (
          <i
            className={`bx bx-x fs-1 pt-1 ps-1  ${
              isSidebar && isOpen ? "both-side-icon" : "close-icon"
            } sidebar-grid`}
            onClick={() => {
              setSidebar(false);
              setIsOpen(false);
            }}
          ></i>
        ) : (
          <i
            id="sidebar"
            className="bx bxs-grid fs-1 pt-1 ps-1 sidebar-grid"
            onClick={() => setSidebar(!isSidebar)}
          ></i>
        )}
      </div>
      <div
        className={`sidebar ${isSidebar ? "setSidebar" : ""}  ${
          isOpen ? "open" : ""
        }`}
      >
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
          {sidebar?.map((data, key) => (
            <li>
              <Link
                to={`/${key === 0 ? role : role + "/" + kebabCase(data?.name)}`}
              >
                <i className={data?.icon}></i>
                <span className="links_name text-capitalize">{data.name}</span>
              </Link>
              <span className="tooltip text-capitalize">{data.name}</span>
            </li>
          ))}
          <li>
            <Link to="/consumer/insurance">
              <i class="bx bx-envelope"></i>
              <span className="links_name">Insurance</span>
            </Link>
            <span className="tooltip">Insurance</span>
          </li>
          <li>
            <Link to="/setting">
              <i className="bx bx-cog"></i>
              <span className="links_name">Setting</span>
            </Link>
            <span className="tooltip">Setting</span>
          </li>
          <li>
            <Link to="/help">
              <i class="bx bx-help-circle"></i>
              <span className="links_name">Help & Support</span>
            </Link>
            <span className="tooltip">Help & Support</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
