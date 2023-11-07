import React from "react";
import { Navigate } from "react-router-dom";
import { getLoggedUser } from "../utils/user";

const PrivateRoute = ({ children }) => {
  const data = getLoggedUser()
  return data ? children : <Navigate to="/" />;
};

export default PrivateRoute