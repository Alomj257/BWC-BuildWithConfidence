import React, { useEffect, useState } from "react";
import ChatContainer from "../ChatContainer/ChatContainer";
import "./ChatCom.css";
import { useAuth } from "../../../context/AuthContext";
import { userChat } from "../../../service/ChatService";
import Conversation from "../ChatList/Conversation";
const ChatCom = () => {
  const [auth] = useAuth();
  const [chats, setChats] = useState([]);
  const [currentChat, setCurChat] = useState(null);
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChat(auth?.user?._id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [auth]);
  return (
    <div className="container">
      <div className="chat border rounded">
        <div className="chatlist-left">
          <div className="container px-0 bg-light  chat-list">
            <ul className="p-0 mx-0 py-3">
              {Array.isArray(chats)
                ? chats?.map((chat) => (
                    <div onClick={() => setCurChat(chat)}>
                      <Conversation data={chat} curUserId={auth?.user?._id} />
                    </div>
                  ))
                : ""}
            </ul>
          </div>
        </div>
        <div className="w-100 chat-container-right">
          <ChatContainer chat={currentChat} currentUser={auth?.user?._id} />
        </div>
      </div>
    </div>
  );
};

export default ChatCom;
