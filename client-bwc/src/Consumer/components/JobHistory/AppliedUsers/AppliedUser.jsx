import React, { useEffect, useState } from "react";
import useFetch from "../../../../Hooks/useFetch";
import Modal from "../../../../Utils/Modal/Modal";
import Profile from "../../Profile/Profile";
import { toast } from "react-toastify";
import { chatCreate } from "../../../../service/ChatService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";

const AppliedUser = ({ id, key }) => {
  const { data } = useFetch(`/auth/users/${id}`);
  const [auth] = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(data);
  }, [data]);
  const handleMassage = async (currentUser, oppositeUser) => {
    try {
      const { data } = await chatCreate({
        senderId: currentUser,
        receiverId: oppositeUser,
      });
      if (data.message) {
        toast.error(data.message);
        return;
      }
      navigate("/consumer/chat");
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
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
          onClick={() => handleMassage(auth?.user?._id, user?._id)}
          className={"this" === "complete" ? "text-success" : "light-gray"}
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
            <Profile />
          </Modal>
        </td>
      </tr>
    </>
  );
};

export default AppliedUser;
