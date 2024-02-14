import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Nav/Navbar";
import { Outlet } from "react-router-dom";
import "./Dashboard.css";
const DashboardPanel = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="dashboard-content">
        <Navbar liName="Dashboard" />
        <div id="dashboard-panel-outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardPanel;
