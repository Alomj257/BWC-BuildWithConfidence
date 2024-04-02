import React, { useEffect, useState } from "react";
import useFetch from "../../../../Hooks/useFetch";
import Modal from "../../../../Utils/Modal/Modal";
import Profile from "../../Profile/Profile";
import { toast } from "react-toastify";
import { chatCreate } from "../../../../service/ChatService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import { requestTast } from "../../../../service/TaskAssignService";
import { FaStar } from "react-icons/fa6";
import Axios, { server } from "../../../../Axios";

const AppliedUser = ({ id, key, job, type }) => {
  const { data } = useFetch(`/auth/users/${id}`);
  const [auth] = useAuth();

  const [bid, setBid] = useState(null);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(data);
  }, [data]);

  const handleMassage = async (currentUser, oppositeUser) => {
    try {
      if (!currentUser || !oppositeUser) {
        toast.error("something wrong");
        return;
      }
      if (currentUser === oppositeUser) {
        toast.error("you can not apply this job");
        return;
      }
      const { data } = await chatCreate({
        senderId: currentUser,
        receiverId: oppositeUser,
      });
      if (data.message) {
        toast.error(data.message);
        return;
      } else {
        navigate("/consumer/chat", { state: { currentUser, oppositeUser } });
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  const handleRequest = async (tradepersonId, consumerId, jobId) => {
    try {
      if (!tradepersonId || !consumerId || !jobId) {
        toast.error(" field missing try again ");
        return;
      }
      const { data } = await requestTast(
        {
          requesterId: consumerId,
          requestedId: tradepersonId,
        },
        jobId
      );
      job?.requested?.push({
        requesterId: consumerId,
        requestedId: tradepersonId,
      });
      if (data?.message) {
        toast.error(data.message);
        return;
      }
      toast.success(data);
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || "something went wrong");
    }
  };
  const handleContract = (job, userId) => {
    navigate("/consumer/digital-contract", { state: { job, userId } });
  };
  useEffect(() => {
    const getAllBid = async () => {
      try {
        const res = await Axios.get(
          `/consumer/jobposts/bids/${job?._id}/${auth?.user?._id}/${id}`
        );
        console.log(res.data);
        setBid(res.data);
      } catch (error) {
        console.log(error);
        console.log(error);
      }
    };
    getAllBid();
  }, [job?._id, auth?.user?._id, id]);
  return (
    <>
      <div className="container my-4">
        <div className="row row-cols-md-3 row-cols-sm-2">
          <div className="d-flex gap-4">
            <div className="img m-auto" style={{ width: "6rem" }}>
              <Modal
                btnClasss="btn"
                btnText={
                  <img
                    src={server + user?.profile}
                    alt="profile"
                    style={{ aspectRatio: "1/1" }}
                    className="w-100  rounded-circle"
                  />
                }
                bodyClass="bg-white col-md-8 col-sm-10 col-12"
                closeIcon="fs-3"
              >
                <Profile id={user?._id} />
              </Modal>
            </div>
            <div className="d-flex flex-column justify-content-between">
              <div className="d-flex justify-content-between">
                <div className="stars text-warning">
                  <FaStar size={25} />
                  <FaStar size={25} />
                  <FaStar size={25} />
                  <FaStar size={25} />
                </div>
                <div className="fw-bold">PDf Download</div>
              </div>
              <h5 className="fw-bold text-capitalize fw-bold">
                {user?.firstname} {user?.lastname}
              </h5>
              <div>
                <small>{user?.address}</small>
              </div>
            </div>
          </div>
          <div>
            <h6 className="text-end fw-bold my-2">Duration</h6>
            <h5 className="text-end fw-bold fs-4 my-2">
              {bid?.duration} Weeks
            </h5>

            <div className="d-flex justify-content-between gap-4 mt-4">
              <button
                onClick={() => handleMassage(auth?.user?._id, user?._id)}
                className="btn btn-dark-blue w-100 text-white fw-bold"
              >
                Contact
              </button>
              {type === "post" && (
                <button
                  disabled={job?.requested?.find(
                    (req) => req?.requestedId === user?._id
                  )}
                  onClick={() =>
                    handleRequest(user?._id, auth?.user?._id, job?._id)
                  }
                  className="btn btn-outline-success text-dark w-100 "
                >
                  {job?.requested?.find((req) => req?.requestedId === user?._id)
                    ? "Requested"
                    : "Hire"}
                </button>
              )}

              {type === "pre" && (
                <button
                  disabled={job?.taskAssign?.isContract}
                  onClick={() => handleContract(job, user?._id)}
                  className="btn btn-outline-success text-dark w-100 "
                >
                  {!job?.taskAssign?.isContract
                    ? "Sing for Contract"
                    : "Contract Signed"}
                </button>
              )}
              {type === "live" && (
                <button
                  onClick={() => handleContract(job, user?._id)}
                  className="btn btn-outline-success text-dark w-100 "
                >
                  {job?.taskAssign?.isContract && "Live Job"}
                </button>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-between flex-column">
            <div className="mx-auto">
              <h6 className=" fw-bold my-2">Contract Price</h6>
              <h5 className=" fw-bold fs-4">
                {bid?.bids[bid?.bids?.length - 1]?.tradepersonBid}
              </h5>
            </div>
            <small className="mx-auto">
              expires on {bid?.expireQuotation}{" "}
            </small>
          </div>
        </div>
      </div>
      {/* 
      <tr key={key} className="text-capitalize">
        <td className={"this" === "complete" ? "text-success" : "light-gray"}>
          {key + 1}
        </td>
        <td className={"this" === "complete" ? "text-success" : "light-gray"}>
          {user?.firstname} {user?.lastname}
        </td>
        <td className={"this" === "complete" ? "text-success" : "light-gray"}>
          {user?.email}
        </td>
        <td className={"this" === "complete" ? "text-success" : "light-gray"}>
          {user?.experience || "3 year"}
        </td>
        <td className={"this" === "complete" ? "text-success" : "light-gray"}>
          {user?.qualification || "Level 3 ETC"}
        </td>
        <td>
          <button
            className="btn btn-dark-blue text-white  w-100 "
            onClick={() => handleMassage(auth?.user?._id, user?._id)}
          >
            Talk/Message
          </button>
        </td>
        <td>
          <Modal
            btnClasss=" btn btn-outline-success"
            btnText=" View Profile"
            bodyClass="bg-white"
            closeIcon="fs-3"
          >
            <Profile id={user?._id} />
          </Modal>
        </td>
        <td className="">
          {type === "post" && (
            <button
              disabled={job?.requested?.find(
                (req) => req?.requestedId === user?._id
              )}
              onClick={() =>
                handleRequest(user?._id, auth?.user?._id, job?._id)
              }
              className="btn btn-outline-success text-dark w-100 "
            >
              {job?.requested?.find((req) => req?.requestedId === user?._id)
                ? "Requested"
                : "Hire"}
            </button>
          )}

          {type === "pre" && (
            <button
              onClick={() => handleContract(job, user?._id)}
              className="btn btn-outline-success text-dark w-100 "
            >
              Sing for Contract
            </button>
          )}
        </td>
      </tr> */}
    </>
  );
};

export default AppliedUser;
