import React from "react";
import "./ChatList.css";
import Conversation from "./Conversation";
const ChatList = ({ chats, curUserId }) => {
  return (
    <div className="container px-0 bg-light  chat-list">
      <ul className="p-0 mx-0 py-3">
        {Array.isArray(chats)
          ? chats?.map((d) => <Conversation data={d} curUserId={curUserId} />)
          : ""}
      </ul>
    </div>
  );
};

export default ChatList;
