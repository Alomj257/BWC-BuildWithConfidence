import React from "react";
import "./ChatList.css";
import img from "../../../assests/profile/P1.png";
const ChatList = () => {
  return (
    <div className="container px-0 bg-light  chat-list">
      <ul className="p-0 mx-0 py-3">
        {data.map((d) => (
          <li className="d-flex chat-list-li my-3">
            <div className="chat-list-img">
              <img className="w-100 h-100 rounded-circle" src={img} alt="" />
            </div>
            <div className="my-auto mx-2">user{d}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;

const data = [1, 2, 4, 4, 6, 7];
