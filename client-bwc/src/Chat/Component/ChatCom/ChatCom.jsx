import React, { useEffect, useRef, useState } from "react";
import ChatContainer from "../ChatContainer/ChatContainer";
import "./ChatCom.css";
import { useAuth } from "../../../context/AuthContext";
import { userChat } from "../../../service/ChatService";
import Conversation from "../ChatList/Conversation";
import { io } from "socket.io-client";
import { useLocation } from "react-router-dom";
const ChatCom = () => {
  const { state } = useLocation();
  console.log(state);
  const [auth] = useAuth();
  const [chats, setChats] = useState([]);
  const [currentChat, setCurChat] = useState(null);
  const [onlineUsers, setOnlieUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);
  const socket = useRef();
  useEffect(() => {
    socket.current = io("http://localhost:5500");
    socket.current.emit("new-user-add", auth?.user?._id);
    socket.current.on("get-users", (users) => {
      setOnlieUsers(users);
    });
  }, [auth?.user]);

  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      setReceiveMessage(data);
    });
  }, []);

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
  }, [auth?.user]);

  const checkOnlieStatus = (chat) => {
    const chatMemebr = chat?.members?.find(
      (member) => member !== auth?.user?._id
    );
    const online = onlineUsers?.find((user) => user?.userId === chatMemebr);
    return online ? true : false;
  };
  console.log(chats);

  return (
    <div className="container">
      <div className="chat border rounded">
        <div className="chatlist-left">
          <div className="container px-0 bg-light  chat-list">
            <ul className="p-0 mx-0 py-3">
              {Array.isArray(chats)
                ? chats?.map((chat) => (
                    <div onClick={() => setCurChat(chat)}>
                      <Conversation
                        data={chat}
                        curUserId={auth?.user?._id}
                        online={checkOnlieStatus(chat)}
                      />
                    </div>
                  ))
                : ""}
            </ul>
          </div>
        </div>
        <div className="w-100 chat-container-right">
          <ChatContainer
            chat={currentChat}
            currentUser={auth?.user?._id}
            setSendMessage={setSendMessage}
            receiveMessage={receiveMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatCom;
