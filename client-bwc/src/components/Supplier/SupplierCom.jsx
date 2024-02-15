import React from "react";
import { useNavigate } from "react-router-dom";
import SupplierCard from "./SupplierCard";
import Navbar from "../Nav/Navbar";

const SupplierCom = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="px-4">
        <Navbar liName="Supplier" />
      </div>
      <div className="container ">
        <button
          className="btn btn-primary mb-2 mt-3"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        {data.map((data, key) => {
          return (
            <>
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="mb-0 mt-3 fw-bold mx-0 px-0">{data?.topic}</h4>
                </div>
                {key === 0 && (
                  <>
                    <div>
                      <input
                        type="text"
                        placeholder="Search..."
                        className="form-control border"
                      />
                    </div>
                    <div>
                      <i className="bx bx-filter fs-3 me-4"></i>
                    </div>
                  </>
                )}
              </div>
              <div className="row row-cols-lg-3  row-cols-md-2 row cols-sm-1">
                {data.supplier?.map((supplier, key) => (
                  <SupplierCard supplier={supplier} />
                ))}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SupplierCom;

const data = [
  {
    topic: "Papular Supplier",
    supplier: [
      {
        img: "",
        name: "Building materials",
        exp: "special training in materials items",
        location: "2.2",
      },
      {
        img: "",
        name: "Building materials",
        exp: "special training in materials items",
        location: "2.2",
      },
      {
        img: "",
        name: "Building materials",
        exp: "special training in materials items",
        location: "2.2",
      },
    ],
  },
  {
    topic: "Doors Supplier",
    supplier: [
      {
        img: "",
        name: "Building materials",
        exp: "special training in materials items",
        location: "2.2",
      },
      {
        img: "",
        name: "Building materials",
        exp: "special training in materials items",
        location: "2.2",
      },
      {
        img: "",
        name: "Building materials",
        exp: "special training in materials items",
        location: "2.2",
      },
    ],
  },
  {
    topic: "Windows  Supplier",
    supplier: [
      {
        img: "",
        name: "Building materials",
        exp: "special training in materials items",
        location: "2.2",
      },
      {
        img: "",
        name: "Building materials",
        exp: "special training in materials items",
        location: "2.2",
      },
      {
        img: "",
        name: "Building materials",
        exp: "special training in materials items",
        location: "2.2",
      },
    ],
  },
];
