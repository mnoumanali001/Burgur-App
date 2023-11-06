import React, { createContext, useState } from "react";
import { burgurOptions } from "../constants/burgurOptions";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [burgurPrice, setBurgurPrice] = useState(4);
  const [burgurOpt, setBurgurOpt] = useState([
    {
      name: "Salad",
      price: 0.5,
      count: [],
    },
    {
      name: "Bacon",
      price: 0.7,
      count: [],
    },
    {
      name: "Cheese",
      price: 0.4,
      count: [],
    },
    {
      name: "Meat",
      price: 1.3,
      count: [],
    },
  ]);
  const [orders, setOrder] = useState([]);
  return (
    <AppContext.Provider
      value={{ burgurPrice, burgurOpt, setBurgurOpt, setBurgurPrice, orders, setOrder }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
