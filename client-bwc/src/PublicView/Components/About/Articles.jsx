import React from "react";
import { Link } from "react-router-dom";
const Articles = () => {
  return (
    <div>
      <div className="container">
        <h2 className=" fw-bold my-2">ARTICILES</h2>
        <div className="row">
          <div className="my-2 col-md-6 my-auto">
            {artData.map((it) => (
              <div className="my-2">
                <Link Articlesto="">{it?.name}</Link>
              </div>
            ))}
          </div>
          <div className="col-md-6 d-flex">
            <div className="m-auto">
              <img
                src="/images/home/ourService1.png"
                className="w-100 h-100 rounded-circle"
                alt=""
              />
            </div>
          </div>
        </div>
        <h2 className="mt-5 fw-bold my-2">
          RISE OF AI TECHNOLOGY 10th March 2024
        </h2>
        <div>
          <i class="bx bxs-quote-alt-left fs-1 text-warning"></i>
        </div>
        <div>
          <p>
            The accommodations were top-notch, and the attention to detail made
            my stay enjoyable, and I highly recommend them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Articles;

const artData = [
  { name: "RISE OF AI TECHNOLOGY", paht: "" },
  { name: "CONSTRUCTION TECHNOLOGY", paht: "" },
  { name: "CONSTRUCTION TECHNOLOGY", paht: "" },
  { name: "CONSTRUCTION TECHNOLOGY", paht: "" },
  { name: "RISE OF AI TECHNOLOGY", paht: "" },
  { name: "RISE OF AI TECHNOLOGY", paht: "" },
  { name: "RISE OF AI TECHNOLOGY", paht: "" },
  { name: "RISE OF AI TECHNOLOGY", paht: "" },
];
