import React from "react";
import { toast } from "react-toastify";
import { chatCreate } from "../../../../service/ChatService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import {
  accectRequest,
  tradpersonCotractSignService,
} from "../../../../service/TaskAssignService";

const Req = ({ key, job }) => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  const handleMassage = async (currentUser, oppositeUser) => {
    try {
      console.log(currentUser, oppositeUser);
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
        navigate("/tradeperson/chat", { state: { currentUser, oppositeUser } });
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  const acceptHandle = async (consumerId, tradepersonId, jobId) => {
    try {
      if (!tradepersonId || !consumerId || !jobId) {
        toast.error(" field missing try again ");
        return;
      }
      const { data } = await accectRequest(
        {
          tradepersonId,
          consumerId,
        },
        jobId
      );
      job?.accept?.push({
        tradepersonId,
        consumerId,
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
  const handleContract = async (jobId, contractId) => {
    try {
      if (!jobId || !contractId) {
        toast.error(" field missing try again ");
        return;
      }
      const { data } = await tradpersonCotractSignService(
        {
          name: auth?.user?.firstname + auth?.user?.lastname,
          signiture: auth?.user?.signiture?.img,
          tradepersonId: auth?.user?._id,
        },
        jobId,
        contractId
      );
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
  return (
    <>
      {/* <div className="container my-4">
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
                bodyClass="bg-white"
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
            <h5 className="text-end fw-bold fs-4 my-2">2 Weeks</h5>

            <div className="d-flex justify-content-between gap-4 mt-4">
              <button
                className="btn btn-dark-blue text-white  w-100 "
                onClick={() =>
                  handleMassage(
                    auth?.user?._id,
                    job?.requested?.find(
                      (req) => req.requestedId === auth?.user?._id
                    )?.requesterId
                  )
                }
              >
                Talk/Message
              </button>
              {job?.taskAssign?.consumerId &&
                job?.taskAssign?.tradepersonId === auth?.user?._id &&
                job?.taskAssign?.contractId &&
                job?.taskAssign?.isContract && (
                  <button className="btn btn-outline-success text-dark w-100 ">
                    Live project
                  </button>
                )}
              {job?.taskAssign?.consumerId &&
                job?.taskAssign?.tradepersonId === auth?.user?._id &&
                job?.taskAssign?.contractId &&
                !job?.taskAssign?.isContract && (
                  <button
                    onClick={() =>
                      handleContract(job?._id, job?.taskAssign?.contractId)
                    }
                    className="btn btn-outline-success text-dark w-100 "
                  >
                    Sign for Contract
                  </button>
                )}
              {(!job?.taskAssign?.consumerId ||
                !job?.taskAssign?.contractId ||
                job?.taskAssign?.tradepersonId !== auth?.user?._id) && (
                <button
                  disabled={job?.accept?.find(
                    (req) => req?.tradepersonId === auth?.user?._id
                  )}
                  onClick={() =>
                    acceptHandle(
                      job?.requested?.find(
                        (req) => req.requestedId === auth?.user?._id
                      )?.requesterId,
                      auth?.user?._id,
                      job?._id
                    )
                  }
                  className="btn btn-outline-success text-dark w-100 "
                >
                  {job?.accept?.find(
                    (req) => req?.tradepersonId === auth?.user?._id
                  )
                    ? "Accepted"
                    : "Accept"}
                </button>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-between flex-column">
            <div className="mx-auto">
              <h6 className=" fw-bold my-2">Contract Price</h6>
              <h5 className=" fw-bold fs-4">$23,457</h5>
            </div>
            <small className="mx-auto">expires on 12th March 2024</small>
          </div>
        </div>
      </div> */}
      <tr key={key} className="text-capitalize">
        <td className={"this" === "complete" ? "text-success" : "light-gray"}>
          {key + 1}
        </td>
        <td className={"this" === "complete" ? "text-success" : "light-gray"}>
          {job?.headline}
        </td>
        <td className={"this" === "complete" ? "text-success" : "light-gray"}>
          {job?.experience || "3 year"}
        </td>
        <td className={"this" === "complete" ? "text-success" : "light-gray"}>
          {job?.qualification || "Level 3 ETC"}
        </td>
        <td>
          <button
            className="btn btn-dark-blue text-white  w-100 "
            onClick={() =>
              handleMassage(
                auth?.user?._id,
                job?.requested?.find(
                  (req) => req.requestedId === auth?.user?._id
                )?.requesterId
              )
            }
          >
            Talk/Message
          </button>
        </td>
        <td className="">
          {job?.taskAssign?.consumerId &&
            job?.taskAssign?.tradepersonId === auth?.user?._id &&
            job?.taskAssign?.contractId &&
            job?.taskAssign?.isContract && (
              <button className="btn btn-outline-success text-dark w-100 ">
                Live project
              </button>
            )}
          {job?.taskAssign?.consumerId &&
            job?.taskAssign?.tradepersonId === auth?.user?._id &&
            job?.taskAssign?.contractId &&
            !job?.taskAssign?.isContract && (
              <button
                onClick={() =>
                  handleContract(job?._id, job?.taskAssign?.contractId)
                }
                className="btn btn-outline-success text-dark w-100 "
              >
                Sign for Contract
              </button>
            )}
          {(!job?.taskAssign?.consumerId ||
            !job?.taskAssign?.contractId ||
            job?.taskAssign?.tradepersonId !== auth?.user?._id) && (
            <button
              disabled={job?.accept?.find(
                (req) => req?.tradepersonId === auth?.user?._id
              )}
              onClick={() =>
                acceptHandle(
                  job?.requested?.find(
                    (req) => req.requestedId === auth?.user?._id
                  )?.requesterId,
                  auth?.user?._id,
                  job?._id
                )
              }
              className="btn btn-outline-success text-dark w-100 "
            >
              {job?.accept?.find(
                (req) => req?.tradepersonId === auth?.user?._id
              )
                ? "Accepted"
                : "Accept"}
            </button>
          )}
        </td>
      </tr>
    </>
  );
};

export default Req;
