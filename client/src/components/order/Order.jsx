import React from "react";
import "./order.css";
import { object } from "yup";
function Order({ item }) {
  return (
    <div className="order">
      <div className="order-items">
        <p>Ingredients :</p>
        {Object.entries(item).map(([key, val]) => {
          if (key === "price") {
            return null;
          } else {
            return (
              <p className="order-item-ing">
                {key} ({val})
              </p>
            );
          }
        })}
      </div>
      <div className="order-price">
        <p>
          Price : <span className="bold">${item.price}</span>
        </p>
      </div>
    </div>
  );
}

export default Order;
