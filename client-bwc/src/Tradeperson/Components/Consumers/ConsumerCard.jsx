import React from "react";
import "./TradePerson.css";
import img from "../../../assests/profile/P1.png";
import Modal from "../../../Utils/Modal/Modal";
import Profile from "../../../Consumer/components/Profile/Profile";
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
            <Profile trade={trade} id={trade?._id} />
          </Modal>
        </div>

        <div className="col-8 p-2">
          <h5 className="title"> {trade?.name}</h5>
          <p>{trade?.exp}</p>
          <div>
            <i className="bx bx-map fs-5"></i>
            <span className=" mx-2">{trade?.location} KM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradePersonCard;
