import React, { useEffect, useState } from "react";
import "./ChatContainer.css";
import img from "../../../assests/profile/P1.png";
import useFetch from "../../../Hooks/useFetch";
import { getUser } from "../../../service/AuthService";
import { getMessage } from "../../../service/ChatService";
const ChatContainer = ({ chat, currentUser }) => {
  const userId = chat?.members?.find((id) => id !== currentUser);
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState([]);
  // const getData = useFetch(`/auth/users/${userId}`);
  // console.log(getData.data);
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
  }, [currentUser, chat]);
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
  return (
    <div className="chat-container d-flex flex-column">
      <div className="d-flex bg-light  p-3 ">
        <div className="chat-Container-header-img">
          <img className="w-100 h-100 rounded-circle" src={img} alt="" />
        </div>
        <div className="my-auto mx-2">{userData?.firstname}</div>
      </div>
      <div className="chat-contains">
        {}
        <div className="left">
          <div className="m-3  ">
            <span className=" message left-message ">hi shoyeb</span>
          </div>
        </div>
        <div className="right text-end">
          <div className="m-3  ">
            <span className=" message right-message">hello who are you</span>
          </div>
        </div>
        {message?.map((msg, key) => (
          <>
            {msg?.senderId !== currentUser ? (
              <div className="left">
                <div className="m-3  ">
                  <span className=" message left-message ">hi shoyeb</span>
                </div>
              </div>
            ) : (
              <div className="right text-end">
                <div className="m-3  ">
                  <span className=" message right-message">
                    hello who are you
                  </span>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
      <div className="mt-auto mb-3">
        <form action="">
          <div className=" px-3">
            <div className="d-flex border rounded px-2">
              <input
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
  );
};

export default ChatContainer;
