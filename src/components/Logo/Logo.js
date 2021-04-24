import React from "react";
import BurgerLogo from "../../assets/Images/burger-logo.png";
import "./Logo.css";
export default function Logo(props) {
  return (
    <div className="Logo">
      <img src={BurgerLogo} alt="" />
    </div>
  );
}
