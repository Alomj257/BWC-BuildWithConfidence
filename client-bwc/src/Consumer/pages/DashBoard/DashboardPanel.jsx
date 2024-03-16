import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Nav/Navbar";
import { Outlet } from "react-router-dom";
import "./Dashboard.css";
const DashboardPanel = () => {
  const sidebar = [
    { name: "dashboard", icon: "bx bx-grid-alt" },
    { name: "tradeperson", icon: "bx bx-user-pin" },
    { name: "post job", icon: "bx bx-user-pin" },
    { name: "digital contract", icon: "bx bx-select-multiple" },
    { name: "job history", icon: "bx bx-history" },
    { name: "supplier", icon: "bx bx-bell" },
    { name: "message", icon: "bx bx-message-rounded-dots" },
  ];
  return (
    <div className="wrapper">
      <Sidebar sidebar={sidebar} role="consumer" />
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
