import React from "react";
import { SiLeaflet } from "react-icons/si";
import "./PublicFooter.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
const PublicFooter = () => {
  return (
    <div className="public-footer">
      <div className="container py-4">
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
          {footDat?.map((f, key) => (
            <div>
              <div className="fw-bold">{f?.topic}</div>
              {f?.child?.map((sbf, key) => (
                <div className="my-3">
                  <Link
                    className="text-decoration-none text-white"
                    to={sbf?.path}
                  >
                    {sbf?.name}
                  </Link>
                </div>
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
            <a
              href="mailto:bwc@gmail.com"
              className="text-decoration-none text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <MdOutlineEmail size={40} /> <span>bwc37844@gmail.com</span>
            </a>
          </div>
          <div>
            <a
              href="http://instagram.com/"
              className="text-decoration-none text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={40} />
              <span>@BWC</span>
            </a>
          </div>
          <div>
            <a
              href="http://facebook.com"
              className="text-decoration-none text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={40} />
              <span>@BWC</span>
            </a>
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
      { name: "About Us", path: "/about" },
      { name: "FAQ", path: "/about" },
      { name: "Articles", path: "/article" },
      { name: "Join Now", path: "/auth" },
      { name: "Contact us", path: "/about" },
    ],
  },
  {
    topic: "TRADESPERSON",
    child: [
      { name: "About Us", path: "/about" },
      { name: "How it works", path: "/home" },
      { name: "FAQ", path: "/faq" },
      { name: "Articles", path: "/article" },
      { name: "Join Now", path: "/auth" },
      { name: "Contact us", path: "/contact" },
    ],
  },
  {
    topic: "OTHER",
    child: [
      { name: "Legal", path: "/legal" },
      { name: "Cookies", path: "/cookies" },
      { name: "User agreement", path: "/agreement" },
    ],
  },
];
