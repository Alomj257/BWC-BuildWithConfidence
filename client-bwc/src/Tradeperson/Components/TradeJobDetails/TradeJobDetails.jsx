import React, { useEffect, useState } from "react";
import "./TradeJobDetails.css";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { toast } from "react-toastify";
import { paymentRelease } from "../../../service/TaskAssignService";
import useFetch from "../../../Hooks/useFetch";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const TradeJobDetails = () => {
  const [isActive, setActive] = useState("overview");
  const { state } = useLocation();
  const [total, setTotal] = useState(0);
  const [paid, setPaid] = useState(0);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [auth] = useAuth();
  const { data } = useFetch(
    `/consumer/digital-contractor/${state?.taskAssign?.contractId}`
  );
  const userdata = useFetch(`/auth/users/${state?.taskAssign?.tradepersonId}`);
  const [contract, setContract] = useState({});

  const [user, setUser] = useState({});
  useEffect(() => {
    if (data) {
      setContract(data);

      let totalSum = 0;
      data?.constractSum?.forEach((cost) => {
        totalSum +=
          parseInt(cost.designFees.total | 0) +
          parseInt(cost.materialCost.total | 0) +
          parseInt(cost.labourCost.total | 0) +
          parseInt(cost.disposalCost.total | 0) +
          parseInt(cost.cleaningCost.total | 0);
      });
      let totalPaid = 0;
      data?.paid?.forEach((pay) => {
        totalPaid += pay.amount;
      });

      setTotal(totalSum);
      setPaid(totalPaid);
    }
  }, [data]);
  useEffect(() => {
    setUser(userdata?.data);
  }, [userdata?.data]);

  const handlePayment = async (money) => {
    setPaymentLoading(true);
    const tradeId =
      state?.taskAssign?.consumerId === auth?.user?._id &&
      state?.taskAssign?.contractId &&
      state?.taskAssign?.isContract
        ? state?.taskAssign?.tradepersonId
        : "";
    if (tradeId === "") {
      toast.error("your are not signed contract ");
      return;
    }
    // payment handle
    const stripe = await loadStripe(
      "pk_test_51PBNGfSCZnl4fNe7OhyqOs5WH04BKl5VIpwEMOch1wYJNv3zwDtrgWKaXhE8HSfoSmjatibrbu7JFau7pFDWr36V00pzjNjava"
    );

    const response = await paymentRelease({
      money,
      consumerId: auth?.user?._id,
      job: state,
      contract,
      tradepersonId: tradeId,
    });

    const session = response;

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
    setPaymentLoading(false);
  };

  return (
    <div className="tradeJobDetail container my-5">
      <div className="trade-header bg-dark-blue text-white p-4 rounded">
        <h5 className="fw-bold text-capitalize">{state?.headline}</h5>
        <div className="d-flex justify-content-between my-4">
          <div
            className="my-auto d-flex gap-3"
            style={{ width: "3rem", aspectRatio: "1/1" }}
          >
            <img
              src="/images/about/b.png"
              alt=" img"
              className="w-100 h-100 rounded-circle"
            />{" "}
            <span className="my-auto fw-bold text-capitalize">
              {user?.name}
            </span>
          </div>
          <div className="my-auto fw-bold pe-3">Download Contract </div>
        </div>
      </div>
      <div className="d-flex gap-4 my-4 border-bottom ">
        <div
          onClick={() => setActive("overview")}
          className={isActive === "overview" ? "trade-active" : ""}
          style={{ cursor: "pointer" }}
        >
          Overview
        </div>
        <div
          onClick={() => setActive("details")}
          className={isActive === "details" ? "trade-active" : ""}
          style={{ cursor: "pointer" }}
        >
          Details
        </div>
      </div>
      {isActive === "overview" && (
        <div className="trade-overview">
          <div className="my-2">
            <div className="fw-bold"> Contract Sum </div>
            <div>${total}</div>
          </div>
          <div className="d-flex gap-4 my-3">
            <div className="d-flex flex-column text-center ">
              <span className="fw-bold">Milstone Paid</span>
              <span>${paid}</span>
            </div>
            <div className="d-flex flex-column text-center ">
              <span className="fw-bold">Milstone Remaining</span>
              <span>${total - paid}</span>
            </div>
            <div className="d-flex flex-column text-center ">
              <span className="fw-bold">Escrow Amount</span>
              <span>${total}</span>
            </div>
          </div>

          <h4 className="my-3 fw-bold">Payment Milestones</h4>
          <div>
            <div className="d-flex gap-4 my-3 align-items-center">
              <div>
                <div className="d-flex">
                  <span className="rounded-circle m-auto  text-white p-3 px-4 bg-dark-blue">
                    1
                  </span>{" "}
                </div>
              </div>
              <span>Milestone 1</span>
              <span>Due 12 March 2024</span>
              <div className="ms-auto">
                <button className="btn btn-dark-blue text-white">Paid</button>
              </div>
            </div>
            <div className="d-flex gap-4 my-3 align-items-center">
              <div>
                <div className="d-flex">
                  <span className="rounded-circle m-auto  text-white p-3 px-4 bg-dark-blue">
                    2
                  </span>{" "}
                </div>
              </div>
              <span>Milestone 2</span>
              <span>Due 15 March 2024</span>
              <div className="d-flex gap-3 ms-auto">
                <button
                  onClick={() => handlePayment(total)}
                  disabled={paymentLoading || auth?.user?.role !== "CONSUMER"}
                  className="btn btn-dark-blue text-white"
                >
                  Release Payment
                </button>
                <button className="btn btn-outline-dark-blue ">Dispute</button>
              </div>
            </div>
            <div className=" col-md-5 ms-auto">
              <p>
                Tradeperson has requested payment, you have up to 3 working days
                to either release payment or dispute the request
              </p>
            </div>
          </div>
        </div>
      )}

      {isActive === "details" && (
        <div className="tradejob-details">
          <div className="my-4 p-3 mx-0 px-0">
            <h5 className="fw-bold">Description</h5>
            <p>{state?.description || state?.desc}</p>
          </div>
          <h4 className="fw-bold my-3">Summary</h4>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center my-3">
              <div className="fw-bold">Contract Type</div>
              <div className="px-3 bg-dark-blue text-white rounded py-2">
                Fixed
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center my-3">
              <div className="fw-bold">Start Time</div>
              <div className="px-3 bg-dark-blue text-white rounded py-2">
                12 mar 2024
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center my-3">
              <div className="fw-bold">Total spent</div>
              <div className="px-3 bg-dark-blue text-white rounded py-2">
                $23,000
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TradeJobDetails;
