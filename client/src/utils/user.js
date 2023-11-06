import { json } from "react-router-dom";

export const getLoggedUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
export const setUser = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};
export const deleteLoggedUser = () => {
  localStorage.clear();
};
