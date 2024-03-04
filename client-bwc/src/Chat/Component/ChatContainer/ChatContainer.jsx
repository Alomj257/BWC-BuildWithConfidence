import React from "react";
import "./ChatContainer.css";
import img from "../../../assests/profile/P1.png";
const ChatContainer = () => {
  return (
    <div className="chat-container d-flex flex-column">
      <div className="d-flex bg-light  p-3 ">
        <div className="chat-Container-header-img">
          <img className="w-100 h-100 rounded-circle" src={img} alt="" />
        </div>
        <div className="my-auto mx-2">user</div>
      </div>
      <div className="chat-contains">
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
