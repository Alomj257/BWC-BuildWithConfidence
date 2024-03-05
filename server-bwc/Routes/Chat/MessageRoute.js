const {
  addMessage,
  getMessage,
} = require("../../Controller/Chat/MessageController");

const MessageRoute = require("express").Router();

MessageRoute.post("/", addMessage);
MessageRoute.get("/:chatId", getMessage);
module.exports = MessageRoute;
