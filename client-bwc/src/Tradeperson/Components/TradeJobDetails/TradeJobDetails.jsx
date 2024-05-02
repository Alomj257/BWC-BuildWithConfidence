import React, { useEffect, useState } from "react";
import "./TradeJobDetails.css";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { toast } from "react-toastify";
import { paymentRelease } from "../../../service/TaskAssignService";
import useFetch from "../../../Hooks/useFetch";
import { loadStripe } from "@stripe/stripe-js";

const TradeJobDetails = () => {
  const [isActive, setActive] = useState("overview");
  const { state } = useLocation();
  const [total, setTotal] = useState(0);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [auth] = useAuth();
  const { data } = useFetch(
    `/consumer/digital-contractor/${state?.taskAssign?.contractId}`
  );
  const userdata = useFetch(`/auth/users/${state?.taskAssign?.tradepersonId}`);
  const [contract, setContract] = useState({});

  const [user, setUser] = useState({});
  const {
    digitalService,
    Milestone,
    eachMilestone,
    PPSService,
    advancePayment,
  } = contract;
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
          parseInt(digitalService | 0) +
          parseInt(PPSService | 0) +
          parseInt(advancePayment | 0) +
          parseInt(Milestone | 0) * parseInt(eachMilestone | 0) +
          parseInt(cost.cleaningCost.total | 0);
      });
      setTotal(totalSum);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  useEffect(() => {
    setUser(userdata?.data);
  }, [userdata?.data]);
  const handlePayment = async (money, milestone) => {
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
    const details = [
      {
        price: money || 0,
        quantity: 1,
        id: 1,
        consumerId: auth?.user?._id,
        job: state,
        contract,
        milestone: milestone,
        tradepersonId: tradeId,
      },
    ];
    try {
      const response = await paymentRelease(details);
      // const session = response;
      const result = stripe.redirectToCheckout({
        sessionId: response?.data?.id,
      });

      if (result.error) {
        console.log(result.error);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
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
              <span>${getSum(contract?.paid)}</span>
            </div>
            <div className="d-flex flex-column text-center ">
              <span className="fw-bold">Milstone Remaining</span>
              <span>${total - getSum(contract?.paid)}</span>
            </div>
            <div className="d-flex flex-column text-center ">
              <span className="fw-bold">Escrow Amount</span>
              <span>${contract?.eachMilestone}</span>
            </div>
          </div>

          <h4 className="my-3 fw-bold">Payment Milestones</h4>
          <div>
            {Array.from({ length: parseInt(contract?.Milestone || 0) }).map(
              (_, i) => (
                <div className="d-flex gap-4 my-3 align-items-center">
                  <div>
                    <div className="d-flex">
                      <span className="rounded-circle m-auto  text-white p-3 px-4 bg-dark-blue">
                        {i + 1}
                      </span>{" "}
                    </div>
                  </div>
                  <span>Milestone {i + 1}</span>
                  <span>
                    {contract?.dateForCompletion
                      ? new Date(contract?.dateForCompletion).toDateString()
                      : new Date().toDateString()}
                  </span>
                  {contract?.paid?.find((paid) => paid?.milestone === i + 1) ? (
                    <div className="ms-auto">
                      <button className="btn btn-dark-blue text-white">
                        Paid
                      </button>
                    </div>
                  ) : (
                    <div className="d-flex gap-3 ms-auto">
                      <button
                        onClick={() => handlePayment(eachMilestone, i + 1)}
                        disabled={
                          paymentLoading || auth?.user?.role !== "CONSUMER"
                        }
                        className="btn btn-dark-blue text-white"
                      >
                        Release Payment
                      </button>
                      <button className="btn btn-outline-dark-blue ">
                        Dispute
                      </button>
                    </div>
                  )}
                </div>
              )
            )}

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
                {contract?.workCommencementDate
                  ? new Date(
                      contract?.workCommencementDate
                    ).toLocaleDateString()
                  : new Date().toLocaleDateString()}
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center my-3">
              <div className="fw-bold">Total spent</div>
              <div className="px-3 bg-dark-blue text-white rounded py-2">
                ${getSum(contract?.paid)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TradeJobDetails;

const getSum = (arr) => {
  let total = 0;
  Array.isArray(arr) &&
    arr.forEach((e) => {
      total += parseInt(e?.price || 0);
    });
  return total;
};
