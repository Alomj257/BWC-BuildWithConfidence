import React from "react";
import img from "../../../assests/profile/P1.png";
const SupplierCard = ({ supplier }) => {
  return (
    <>
      <div className="container mx-0 pt-3">
        <a href={supplier?.link} target="_blank" rel="noopener noreferrer">
          <div className="row w-100 p-3  bg-light">
            <div className="col-4 px-0">
              <img src={img} alt="trade profile" className="w-100" />
            </div>
            <div className="col-8 p-2">
              <h5 className="title text-capitalize"> {supplier?.name}</h5>
              <p>{supplier?.exp}</p>
              {supplier?.location && (
                <div>
                  <i className="bx bx-map fs-5"></i>
                  <span className=" mx-2">{supplier?.location} KM</span>
                </div>
              )}
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default SupplierCard;
