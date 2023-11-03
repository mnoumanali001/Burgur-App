import React, { useContext } from "react";
import { AppContext } from "../../context/AppContextProvider";

function Burgur() {
  const { burgurOpt } = useContext(AppContext);
  return (
    <div className="burgur-container">
      <div className="burgur-top"></div>
      {burgurOpt?.map((item) => {
        return item.count?.map((ing) => {
          return <div className={item.name}></div>;
        });
      })}
      <div className="burgur-bottom"></div>
    </div>
  );
}

export default Burgur;
