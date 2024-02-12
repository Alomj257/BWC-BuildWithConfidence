import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Nav/Navbar";
import { Outlet } from "react-router-dom";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import "./Dashboard.css";
const DashboardPanel = () => {
  const [right, setRight] = useState(false);
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="dashboard-content">
        <Navbar liName="Dashboard" />
        <div id="dashboard-panel-outlet">
          <div className="outlet">
            <Outlet />
          </div>
          <div className="right-sidebar">
            {!right ? (
              <i
              class='bx bx-dots-horizontal-rounded'
                onClick={() => setRight(!right)}
              ></i>
            ) : (
              <i
                className="bx bx-dots-horizontal-rounded"
                onClick={() => setRight(!right)}
              ></i>
            )}
            <div
              className={`rightside-content ${
                right ? "set-right-sidebar" : ""
              }`}
            >
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPanel;
