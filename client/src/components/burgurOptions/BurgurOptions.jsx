import React, { useContext } from "react";
import { AppContext } from "../../context/AppContextProvider";
import { Link } from "react-router-dom";
import BurgurItem from "./BurgurItem";
import "./burguroptions.css";

function BurgurOptions() {
  const { burgurPrice, burgurOpt, setBurgurOpt } = useContext(AppContext);
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
      <Link
        className={
          burgurPrice === 4
            ? "signin-order-link block-btn"
            : "signin-order-link"
        }
        to="/checkout"
      >
        Sign In to Order
      </Link>
    </div>
  );
}

export default BurgurOptions;
