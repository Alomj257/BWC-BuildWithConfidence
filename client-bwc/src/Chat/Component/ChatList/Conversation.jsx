import React, { useEffect, useState } from "react";
import img from "../../../assests/profile/P1.png";

import "./ChatList.css";
import useFetch from "../../../Hooks/useFetch";
const Conversation = ({ data, curUserId, online, unreadCount }) => {
  const [userData, setUserData] = useState(null);
  const userId = data?.members?.find((id) => id !== curUserId);
  const getData = useFetch(`/auth/users/${userId ? userId : ""}`);
  useEffect(() => {
    setUserData(getData?.data);
  }, [getData]);
  // console.log(unreadCount.data);
  return (
    <>
      <li className="d-flex chat-list-li my-3">
        <div className="chat-list-img">
          <img className="w-100 h-100 rounded-circle" src={img} alt="" />
        </div>
        <div className="my-auto mx-2 d-flex flex-column">
          <span className="text-capitalize">
            {userData?.firstname}
            {/* {unreadCount} */}
          </span>
          <div className="d-flex justify-content-between gap-2 align-items-center">
            {" "}
            <small className={`text-${online ? "success" : "muted"}`}>
              {online ? "online" : "offline"}
            </small>
            {unreadCount.data > 0 && (
              <small
                style={{ fontSize: "9px" }}
                className="bg-danger text-white m-auto  rounded-circle px-1"
              >
                {unreadCount.data}
              </small>
            )}
          </div>
        </div>
      </li>
    </>
  );
};

export default Conversation;
