import React from "react";
import ChatList from "../ChatList/ChatList";
import ChatContainer from "../ChatContainer/ChatContainer";
import "./ChatCom.css";
const ChatCom = () => {
  return (
    <div className="container">
      <div className="chat border rounded">
        <div className="chatlist-left">
          <ChatList />
        </div>
        <div className="w-100 chat-container-right">
          <ChatContainer />
        </div>
      </div>
    </div>
  );
};

export default ChatCom;
