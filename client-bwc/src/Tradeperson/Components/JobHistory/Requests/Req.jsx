import React from "react";
import { toast } from "react-toastify";
import { chatCreate } from "../../../../service/ChatService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import {
  accectRequest,
  tradpersonCotractSignService,
} from "../../../../service/TaskAssignService";

const Req = ({ index, job }) => {
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
  console.log(job);
  return (
    <>
      <tr key={index} className="text-capitalize">
        <td className={"this" === "complete" ? "text-success" : "light-gray"}>
          {index + 1}
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
          job?.taskAssign?.isContract ? (
            <button
              onClick={() => navigate("/tradeperson/overview", { state: job })}
              className="btn btn-outline-success text-dark w-100 "
            >
              Live project
            </button>
          ) : job?.taskAssign?.consumerId &&
            job?.taskAssign?.contractId &&
            (!(job?.taskAssign?.tradepersonId === auth?.user?._id) ||
              !job?.taskAssign?.isContract) ? (
            <button
              onClick={() =>
                handleContract(job?._id, job?.taskAssign?.contractId)
              }
              className="btn btn-outline-success text-dark w-100 "
            >
              Sign for Contract
            </button>
          ) : (
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
                ? "Wait for contract"
                : "Accept"}
            </button>
          )}
        </td>
      </tr>
    </>
  );
};

export default Req;
