import React, { useEffect, useState } from "react";
import img from "../../../assests/profile/P1.png";

import "./ChatList.css";
import useFetch from "../../../Hooks/useFetch";
const Conversation = ({ data, curUserId }) => {
  const [userData, setUserData] = useState(null);
  const userId = data?.members?.find((id) => id !== curUserId);
  const getData = useFetch(`/auth/users/${userId}`);
  useEffect(() => {
    setUserData(getData?.data);
  }, [getData]);
  return (
    <>
      <li className="d-flex chat-list-li my-3">
        <div className="chat-list-img">
          <img className="w-100 h-100 rounded-circle" src={img} alt="" />
        </div>
        <div className="my-auto mx-2 d-flex flex-column">
          <span>{userData?.firstname}</span>
          <small className="text-success">online</small>
        </div>
      </li>
    </>
  );
};

export default Conversation;
