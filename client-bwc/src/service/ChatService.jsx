import Axios from "../Axios";

export const userChat = async (id) => await Axios.get(`/chat/${id}`);
export const getMessage = async (id) => await Axios.get(`/chat/message/${id}`);
