import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";
import NavBar from "../components/navBar/NavBar";
import AuthPage from "../pages/authPage/AuthPage";
import CheckoutPage from "../pages/checkoutPage/CheckoutPage";
import OrderForm from "../components/form/OrderForm";

const AppRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/checkout" element={<CheckoutPage />}>
          <Route path="contact-data" element={<OrderForm />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
