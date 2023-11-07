import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";
import NavBar from "../components/navBar/NavBar";
import AuthPage from "../pages/authPage/AuthPage";
import CheckoutPage from "../pages/checkoutPage/CheckoutPage";
import OrderForm from "../components/form/OrderForm";
import PrivateRoute from "./PrivateRoute"
import OrderPage from "../pages/orderPage/OrderPage";

const AppRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }
        >
          <Route
            path="contact-data"
            element={
              <PrivateRoute>
                <OrderForm />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="/orders" element= {<OrderPage/>}/>
      </Routes>
    </>
  );
};

export default AppRoutes;
