import React from "react";
import LCO from "../assets/LCO.png";
import HR from "../assets/hackerrank.png";
import MS from "../assets/microsoft.png";
import TCS from "../assets/tcs.png";
import UD from "../assets/udemy.png";
import "./certified.css";

const Certified = () => {
  return (
    <>
      <div className="h3-head">
        <h3>Certified From</h3>
      </div>
      <div className="certified-section">
        <img className="img-logo-certificate" src={LCO} alt="logo" />
        <img className="img-logo-certificate" src={HR} alt="logo" />
        <img className="img-logo-certificate" src={MS} alt="logo" />
        <img className="img-logo-certificate" src={TCS} alt="logo" />
        <img className="img-logo-certificate" src={UD} alt="logo" />
      </div>
    </>
  );
};

export default Certified;
