import api from "./api";

export const signup = (data) =>
  api.post("/auth/signup/", data);

export const verifyOtp = (data) =>
  api.post("/auth/verify-otp/", data);

export const setPassword = (data) =>
  api.post("/auth/set-password/", data);

export const login = async (data) => {
  const res = await api.post("/auth/login/", data);

  localStorage.setItem("access", res.data.access);
  localStorage.setItem("refresh", res.data.refresh);
  localStorage.setItem("username", res.data.username);

  return res.data;
};