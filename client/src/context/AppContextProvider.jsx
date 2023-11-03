import React, { createContext, useState } from "react";
import { burgurOptions } from "../constants/burgurOptions";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [burgurPrice, setBurgurPrice] = useState(4);
  const [burgurOpt, setBurgurOpt] = useState(burgurOptions);
  return (
    <AppContext.Provider
      value={{ burgurPrice, burgurOpt, setBurgurOpt, setBurgurPrice }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
