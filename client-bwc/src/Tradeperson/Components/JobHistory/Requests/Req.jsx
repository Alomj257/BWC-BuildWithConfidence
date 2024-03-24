import React from "react";
import { toast } from "react-toastify";
import { chatCreate } from "../../../../service/ChatService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import { accectRequest } from "../../../../service/TaskAssignService";

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
        navigate("/consumer/chat", { state: { currentUser, oppositeUser } });
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
  return (
    <>
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
            {job?.accept?.find((req) => req?.tradepersonId === auth?.user?._id)
              ? "Accepted"
              : "Accept"}
          </button>
        </td>
      </tr>
    </>
  );
};

export default Req;
