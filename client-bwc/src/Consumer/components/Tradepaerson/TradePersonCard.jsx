import React from "react";
import "./TradePerson.css";
import img from "../../../assests/profile/P1.png";
import Modal from "../../../Utils/Modal/Modal";
import Profile from "../Profile/Profile";
const TradePersonCard = ({ trade }) => {
  return (
    <div className="container mx-0 pt-3">
      <div className="row w-100 p-3  bg-light">
        <div className="col-4 px-0">
          <Modal
            btnClasss="border-0 bg-white"
            bodyClass="bg-white"
            closeIcon="fs-1"
            btnText={<img src={img} alt="trade profile" className="w-100" />}
          >
            <Profile />
          </Modal>
        </div>

        <div className="col-8 p-2">
          <h5 className="title"> {trade?.firstname}</h5>
          <p className="text-muted">{trade?.title}</p>
          <div>
            <i className="bx bx-map fs-5"></i>
            <span className=" mx-2">
              {trade?.location}, {trade?.nationality}
            </span>
          </div>
          <div className="my-2 d-flex ">
            <i className="bx bxs-graduation fs-4 me-1"></i>{" "}
            {trade?.qualification}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradePersonCard;
