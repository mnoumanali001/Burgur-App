import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ childern }) => {
  return true ? childern : <Navigate to="/" />;
};
