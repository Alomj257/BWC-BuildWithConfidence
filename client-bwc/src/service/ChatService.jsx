import Axios from "../Axios";

export const userChat = async (id) => await Axios.get(`/chat/${id}`);
export const getMessage = async (id) => await Axios.get(`/chat/message/${id}`);
export const addMessage = async (message) =>
  await Axios.post("/chat/message/", message);
export const chatCreate = async (chat) => await Axios.post("/chat/", chat);
