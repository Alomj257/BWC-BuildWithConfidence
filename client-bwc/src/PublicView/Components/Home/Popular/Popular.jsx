import React from "react";
import {
  FaBath,
  FaPaintRoller,
  FaBoxOpen,
  FaFilePen,
  FaScrewdriverWrench,
} from "react-icons/fa6";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { GiVacuumCleaner, GiClosedDoors } from "react-icons/gi";
import { MdOutlineSmartScreen } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { TbFileSettings } from "react-icons/tb";
import { IoStarSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
const Popular = () => {
  return (
    <div className="container">
      <div className="my-5">
        <div className="text-center mt-5">
          <h4 className="fw-bold">
            Allow us to handle the entire process for you
          </h4>
          <small>Here are some of our popular services:</small>
        </div>
        <div className="d-flex gap-4 justify-content-center">
          {brData?.map((br, key) => (
            <div key={key} className="my-2 p-3  mt-0 d-flex flex-column">
              <div className="p-4 m-auto d-flex  bg-light rounded-circle fs-1 text-info">
                {br?.icons}
              </div>
              <span className="mx-auto">{br?.name}</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <NavLink
            to="/auth"
            className="btn btn-info fw-bold py-2 px-5 text-white rounded-5"
          >
            Post a job
          </NavLink>
        </div>
      </div>
      <div className="my-5">
        <div className="text-center mt-5">
          <h4 className="fw-bold">
            Our comprehensive platform that streamlines every step
          </h4>
          <small>This is how it works:</small>
        </div>
        <div className="d-flex gap-4 justify-content-center">
          {stepData?.map((br, key) => (
            <div key={key} className="my-2 p-3  mt-0 d-flex flex-column">
              <div className="p-4 m-auto d-flex  bg-info rounded-circle fs-1 text-white">
                {br?.icons}
              </div>
              <span className="mx-auto">{br?.name}</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            style={{ cursor: "pointer" }}
            to="how-it-works"
            spy={true}
            offset={-150}
            duration={0}
            smooth={true}
            className="btn btn-info py-2 fw-bold px-5 text-white rounded-5"
          >
            See how it works
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Popular;

const brData = [
  { name: "Bathroom installation", icons: <FaBath /> },
  { name: "Decoration", icons: <FaPaintRoller /> },
  { name: "Flooring", icons: <HiMiniSquare3Stack3D /> },
  { name: "Plumbing", icons: <FaScrewdriverWrench /> },
  { name: "Cleaning", icons: <GiVacuumCleaner /> },
  { name: "Joinery", icons: <GiClosedDoors /> },
];
const stepData = [
  { name: "Post a Job", icons: <MdOutlineSmartScreen /> },
  { name: "Recieve offers", icons: <FaBoxOpen /> },
  { name: "Confirm scope", icons: <TiMessages /> },
  { name: "Create a contract", icons: <FaFilePen /> },
  { name: "Manage the job", icons: <TbFileSettings /> },
  { name: "Manage the job", icons: <IoStarSharp /> },
];
