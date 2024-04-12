import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import PublicFooter from "../Home/PublicFooter/PublicFooter";

const PublicLayout = ({ children }) => {
  return (
    <>
      <div className="bg-info">
        <Navbar />
      </div>
      <main>{children}</main>
      <PublicFooter />
    </>
  );
};

export default PublicLayout;
