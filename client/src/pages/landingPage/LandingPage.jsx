import React, { useContext } from "react";
import BurgurOptions from "../../components/burgurOptions/BurgurOptions";
import "./landingPage.css";
import { AppContext } from "../../context/AppContextProvider";
import Burgur from "../../components/burgur/Burgur";

const LandingPage = () => {
  const { burgurOpt } = useContext(AppContext);
  return (
    <div className="landing-page-container">
      <div className="landing-page-upper">
        <Burgur />
      </div>

      <BurgurOptions />
    </div>
  );
};

export default LandingPage;
