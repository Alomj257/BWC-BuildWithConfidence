import React from "react";
import { useNavigate } from "react-router-dom";
import SupplierCard from "./SupplierCard";

const SupplierCom = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container ">
        <button className="btn btn-primary mb-2" onClick={() => navigate(-1)}>
          Back
        </button>
        {data.map((data, key) => {
          return (
            <>
              <h4 className="mb-0 mt-3 fw-bold mx-0 px-0">{data?.topic}</h4>
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
