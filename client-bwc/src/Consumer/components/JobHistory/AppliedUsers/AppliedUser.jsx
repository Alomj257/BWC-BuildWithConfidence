import React, { useEffect, useState } from "react";
import useFetch from "../../../../Hooks/useFetch";
import Modal from "../../../../Utils/Modal/Modal";
import Profile from "../../Profile/Profile";
import { toast } from "react-toastify";
import { chatCreate } from "../../../../service/ChatService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import { requestTast } from "../../../../service/TaskAssignService";

const AppliedUser = ({ id, key, job }) => {
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
      const { data } = await requestTast({
        tradepersonId,
        consumerId,
        jobId,
      });
      if (data?.message) {
        toast.error(data.message);
        return;
      }
      toast.success("your request has been sent ");
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
        <td
          onClick={() =>
            handleMassage(
              auth?.user?._id,
              auth?.user?._id !== user?._id ? user?._id : ""
            )
          }
          className="btn btn-dark-blue text-white  w-100 "
        >
          Talk/Message
        </td>
        <td className={"this" === "complete" ? "text-success" : "light-gray"}>
          <Modal
            btnClasss="bg-transparent border-0"
            btnText=" View Profile"
            bodyClass="bg-white"
            closeIcon="fs-3"
          >
            <Profile id={user?._id} />
          </Modal>
        </td>
        <td
          onClick={() => handleRequest(user?._id, auth?.user?._id, job?._id)}
          className="btn btn-outline-success text-dark w-100 "
        >
          Hire
        </td>
      </tr>
    </>
  );
};

export default AppliedUser;
