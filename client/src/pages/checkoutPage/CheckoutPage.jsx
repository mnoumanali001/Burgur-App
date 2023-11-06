import React, { useContext } from "react";
import Burgur from "../../components/burgur/Burgur";
import OrderForm from "../../components/form/OrderForm";
import "./checkoutPage.css";
import { Link, Outlet } from "react-router-dom";

function CheckoutPage() {
  return (
    <div className="checkout-page-container">
      <Burgur />
      <div className="checkout-option">
        <Link className="cancel-order" to="/">
          Cancel
        </Link>
        <Link className="continue-order" to="contact-data">
          Continue
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default CheckoutPage;
