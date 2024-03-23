import React from "react";
import { SiLeaflet } from "react-icons/si";
import "./PublicFooter.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
const PublicFooter = () => {
  return (
    <div className="public-footer">
      <div className="container py-4">
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
          {footDat?.map((f, key) => (
            <div>
              <div className="fw-bold">{f?.topic}</div>
              {f?.child?.map((sbf, key) => (
                <div className="my-3">{sbf?.name}</div>
              ))}
            </div>
          ))}
        </div>
        <div className="text-end text-warning fs-1">
          <SiLeaflet size={60} />
        </div>
        <div>
          <h5 className="fw-bold text-warning fs-4">
            10% of our earnings will be donated to charitable cause
          </h5>
        </div>
        <div className="d-flex gap-4 my-4 pt-3">
          <div>
            <MdOutlineEmail size={40} /> <span>bwc37844@gmail.com</span>
          </div>
          <div>
            <FaInstagram size={40} />
            <span>@BWC</span>
          </div>
          <div>
            <FaFacebook size={40} />
            <span>@BWC</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicFooter;

const footDat = [
  {
    topic: "Consumer",
    child: [
      { name: "About Us", path: "" },
      { name: "FAQ", path: "" },
      { name: "Articles", path: "" },
      { name: "Join Now", path: "" },
      { name: "Contact us", path: "" },
    ],
  },
  {
    topic: "TRADESPERSON",
    child: [
      { name: "About Us", path: "" },
      { name: "How it works", path: "" },
      { name: "FAQ", path: "" },
      { name: "Articles", path: "" },
      { name: "Join Now", path: "" },
      { name: "Contact us", path: "" },
    ],
  },
  {
    topic: "OTHER",
    child: [
      { name: "Legal", path: "" },
      { name: "Cookies", path: "" },
      { name: "User agreement", path: "" },
    ],
  },
];
