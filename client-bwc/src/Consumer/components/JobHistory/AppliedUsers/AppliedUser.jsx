import React, { useEffect, useState } from "react";
import useFetch from "../../../../Hooks/useFetch";
import Modal from "../../../../Utils/Modal/Modal";
import Profile from "../../Profile/Profile";
import { toast } from "react-toastify";
import { chatCreate } from "../../../../service/ChatService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import { requestTast } from "../../../../service/TaskAssignService";

const AppliedUser = ({ id, key, job, type }) => {
  const { data } = useFetch(`/auth/users/${id}`);
  const [auth] = useAuth();
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
  return (
    <>
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
      </tr>
    </>
  );
};

export default AppliedUser;
