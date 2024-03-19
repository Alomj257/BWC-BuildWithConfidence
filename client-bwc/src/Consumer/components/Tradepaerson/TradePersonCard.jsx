import React from "react";
import "./TradePerson.css";
import Modal from "../../../Utils/Modal/Modal";
import Profile from "../Profile/Profile";
import { server } from "../../../Axios";
const TradePersonCard = ({ trade }) => {
  console.log(trade);
  return (
    <div className="container mx-0 pt-3">
      <div className="row w-100 p-3  bg-light">
        <div className="col-4 px-0">
          <Modal
            btnClasss="border-0 bg-white"
            bodyClass="bg-white"
            closeIcon="fs-1"
            btnText={
              <img
                src={server + trade?.profile}
                alt="trade profile"
                className="w-100"
              />
            }
          >
            <Profile id={trade?._id} />
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
