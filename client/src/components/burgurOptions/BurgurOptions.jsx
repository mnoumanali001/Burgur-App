import React, { useContext } from "react";
import { AppContext } from "../../context/AppContextProvider";
import { Link, useNavigate } from "react-router-dom";
import BurgurItem from "./BurgurItem";
import "./burguroptions.css";
import { getLoggedUser } from "../../utils/user";

function BurgurOptions() {
  const { burgurPrice, burgurOpt, setBurgurOpt } = useContext(AppContext);
  const navigate = useNavigate();
  const data = getLoggedUser();
  return (
    <div className="burgur-option-container">
      <p>
        Current Price : ${" "}
        <span className="total-price">{burgurPrice.toFixed(2)}</span>
      </p>
      <div>
        {burgurOpt.map((item, i) => {
          return <BurgurItem item={item} key={i} index={i} />;
        })}
      </div>
      {!data ? (
        <Link
          className={
            burgurPrice === 4
              ? "signin-order-link block-btn"
              : "signin-order-link"
          }
          to="/auth"
        >
          Sign In to Order
        </Link>
      ) : (
        <p
          className={
            burgurPrice === 4
              ? "signin-order-link block-btn"
              : "signin-order-link"
          }
          onClick={() => navigate("/checkout")}
        >
          Order
        </p>
      )}
    </div>
  );
}

export default BurgurOptions;
