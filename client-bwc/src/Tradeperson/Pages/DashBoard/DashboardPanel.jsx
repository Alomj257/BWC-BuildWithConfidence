import React from "react";
import { Outlet } from "react-router-dom";
import "./Dashboard.css";
import Sidebar from "../../../Consumer/components/Sidebar/Sidebar";
import Navbar from "../../../Consumer/components/Nav/Navbar";
const TradeDashboardPanel = () => {
  const sidebar = [
    { name: "dashboard", icon: "bx bx-grid-alt" },
    { name: "consumer", icon: "bx bx-user-pin" },
    { name: "jobs", icon: "bx bxs-shopping-bags" },
    // { name: "Requests", icon: "bx bx-select-multiple" },
    { name: "job portal", icon: "bx bx-history" },
    { name: "requests", icon: "bx bx-bell" },
    // { name: "message", icon: "bx bx-message-rounded-dots" },
  ];
  return (
    <div className="wrapper">
      <Sidebar sidebar={sidebar} role="tradeperson" />
      <div className="dashboard-content">
        <Navbar liName="Consumer" />
        <div id="dashboard-panel-outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default TradeDashboardPanel;
