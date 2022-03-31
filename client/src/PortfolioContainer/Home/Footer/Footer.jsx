import React from "react";
import "./Footer.scss";

export default function footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
          src={require("../../../assets/Home/shape-bg.png")}
          alt="no internet connection"
        />
      </div>
    </div>
  );
}
