import axios from "axios";
const API = axios.create({ baseURL: "http://mnoumanali-001-site1.etempurl.com" });

API.interceptors.request.use((req) => {
  const data = "";
  if (data?.accessToken) {
    req.headers.Authorization = `Bearer ${data.accessToken}`;
  }
  return req;
});

export const login = async (data) => await API.post("/login", data);
export const signup = async (data) => await API.post("/signup", data);
export const createOrder = async (id, userdata, burgerData) =>
  await API.post(`/${id}/burger/create`, burgerData);
export const getAllOrder = async (id) => await API.get(`user/${id}/orders`);
