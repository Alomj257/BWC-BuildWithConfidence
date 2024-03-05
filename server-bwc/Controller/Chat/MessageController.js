const MessageModel = require("../../Model/Chat/ChatMessage");
const ChatModel = require("../../Model/Chat/Chats");

const addMessage = async (req, res) => {
  try {
    const { chatId, senderId, message } = req.body;
    if (!chatId || !senderId || !message) {
      return res.status(502).json("All fields required");
    }
    const chat = await ChatModel.findById(chatId);
    if (!chat) {
      return res.status(404).json("your chat is not created");
    }
    const newMessage = await new MessageModel({
      chatId,
      senderId,
      message,
    }).save();
    res.status(201).json("message sent successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getMessage = async (req, res) => {
  try {
    const { chatId } = req.params;
    const result = await MessageModel.find({ chatId:chatId });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addMessage, getMessage };
