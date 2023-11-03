import React, { useContext } from "react";
import { AppContext } from "../../context/AppContextProvider";

function BurgurItem({ item, index }) {
  const { setBurgurPrice, setBurgurOpt } = useContext(AppContext);

  const removeItem = () => {
    if (item.count.length !== 0) {
      setBurgurPrice((prev) => prev - item.price);
      setBurgurOpt((prev) => {
        const updated = prev.map((opt, i) => {
          if (i === index) {
            opt.count.pop();
          }
          return opt;
        });
        return updated;
      });
    }
  };

  const addItem = () => {
    setBurgurPrice((prev) => prev + item.price);
    setBurgurOpt((prev) => {
      const updated = prev.map((opt, i) => {
        if (i === index) {
          opt.count.push(i);
        }
        return opt;
      });
      return updated;
    });
  };

  return (
    <div className="burgur-item">
      <p className="ingredient-name">{item.name}</p>

      <div className="quantity-btn">
        <p
          className={
            item.count.length === 0 ? "less-btn block-btn" : "less-btn"
          }
          onClick={removeItem}
        >
          Less
        </p>
        <p className="more-btn" onClick={addItem}>
          More
        </p>
      </div>
    </div>
  );
}

export default BurgurItem;
