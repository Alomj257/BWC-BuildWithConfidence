import React from "react";
import "./RightSidebar.css";
const RightSidebar = () => {
  return (
    <div id="right-sidebar">
      {data.map((data) => (
        <div className="sidebar-content">
          <div className="star">
            <i class="bx bxs-star right-side-icons"></i>
          </div>
          <div>
            <div className="title">{data.title}</div>
            <small className="text-muted">{data.date}</small>
          </div>
          <div className="star">
            <i class="bx bxs-chevron-right-circle right-side-icons"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightSidebar;
const data = [
  { title: "Hello BWC ecosystem ", date: new Date().toLocaleDateString() },
  { title: "Hello BWC ecosystem ", date: new Date().toLocaleDateString() },
  { title: "Hello BWC ecosystem ", date: new Date().toLocaleDateString() },
  { title: "Hello BWC ecosystem ", date: new Date().toLocaleDateString() },
  { title: "Hello BWC ecosystem ", date: new Date().toLocaleDateString() },
  { title: "Hello BWC ecosystem ", date: new Date().toLocaleDateString() },
  { title: "Hello BWC ecosystem ", date: new Date().toLocaleDateString() },
  { title: "Hello BWC ecosystem ", date: new Date().toLocaleDateString() },
  { title: "Hello BWC ecosystem ", date: new Date().toLocaleDateString() },
  { title: "Hello BWC ecosystem ", date: new Date().toLocaleDateString() },
  { title: "Hello BWC ecosystem ", date: new Date().toLocaleDateString() },
  { title: "Hello BWC ecosystem ", date: new Date().toLocaleDateString() },
];
