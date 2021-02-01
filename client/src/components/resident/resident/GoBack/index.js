import * as React from "react";

import "./goback.css";

const GoBack = ({ text }) => {
  return (
    <div className="goback-container">
      <div className="goback-arrow-wrapper">
        <img
          className="goback-arrow"
          alt="pijl om terug te keren"
          src="/assets/img/back-arrow.svg"
        ></img>
        <p className="goback-text">{text}</p>
      </div>
    </div>
  );
};

export default GoBack;
