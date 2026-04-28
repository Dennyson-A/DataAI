import api from "./api";

export const createChat = () =>
  api.post("/api/new-chat/");

export const sendQuery = (data) =>
  api.post("/api/query/", data);

export const getAllChats = () =>
  api.get("/api/all-chats/");

export const getHistory = (session_id) =>
  api.get(`/api/history/${session_id}/`);