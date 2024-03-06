import React, { useEffect, useRef, useState } from "react";
import "./ChatContainer.css";
import img from "../../../assests/profile/P1.png";
import { getUser } from "../../../service/AuthService";
import { addMessage, getMessage } from "../../../service/ChatService";
import ChatHome from "../ChatHome/ChatHome";
const ChatContainer = ({
  chat,
  currentUser,
  setSendMessage,
  receiveMessage,
}) => {
  const userId = chat?.members?.find((id) => id !== currentUser);
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState([]);
  const [text, setText] = useState("");
  const scroll = useRef();
  useEffect(() => {
    if (receiveMessage !== null && receiveMessage.chatId === chat?._id) {
      setMessage(...message, receiveMessage);
    }
  }, [receiveMessage, chat, message]);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (chat != null) getUserData();
  }, [currentUser, userId, chat]);
  useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } = await getMessage(chat?._id);
        setMessage(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null) getMessages();
  });

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const msg = {
      senderId: currentUser,
      message: text,
      chatId: chat?._id,
    };
    console.log(msg);
    try {
      const { data } = await addMessage(msg);
      setMessage([...message, msg]);
      console.log(data);
      setText("");
    } catch (error) {
      console.log(error);
    }
    const receiverId = chat?.members.find((id) => id !== currentUser);
    setSendMessage({ ...message, receiverId });
  };
  useEffect(() => {
    scroll?.current?.scrollIntoView({ behavior: "auto" });
  }, [message]);

  return (
    <>
      {!chat ? (
        <ChatHome />
      ) : (
        <div className="chat-container d-flex flex-column">
          <div className="d-flex bg-light  p-3 ">
            <div className="chat-Container-header-img">
              <img className="w-100 h-100 rounded-circle" src={img} alt="" />
            </div>
            <div className="my-auto mx-2">{userData?.firstname}</div>
          </div>
          <div className="chat-contains">
            {message?.map((msg, key) => (
              <>
                <div
                  ref={scroll}
                  className={
                    msg?.senderId !== currentUser ? "left" : "right text-end"
                  }
                >
                  <div className="m-3  ">
                    <span
                      className={` message ${
                        msg?.senderId !== currentUser ? "left" : "right"
                      }-message `}
                    >
                      {msg?.message}
                    </span>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="mt-auto mb-3">
            <form action="" onSubmit={handleSendMessage}>
              <div className=" px-3">
                <div className="d-flex border rounded px-2">
                  <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    className="w-100 p-2 border-0 "
                    style={{ outline: "none" }}
                    placeholder="Enter message...."
                  />
                  <button className="btn text-primary ">send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatContainer;
