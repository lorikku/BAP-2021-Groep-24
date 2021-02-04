import * as React from "react";
import "./inputamountbox.css";

const InputAmountBox = ({ title }) => {
  return (
    <div className="input-amount-container">
      <p className="input-amount-title">{title}</p>
      <div className="input-amount-vector"></div>
      <div className="input-amount-btns">
        <div className="amount-minus amount-btn">
          <img
            className="minus-vector"
            alt="minus"
            src="/assets/img/minus-white.svg"
          ></img>
        </div>
        <p className="input-amount">3</p>
        <div className="amount-plus amount-btn">
          <img
            className="plus-vector"
            alt="plus"
            src="/assets/img/plus-white.svg"
          ></img>
        </div>
      </div>
    </div>
  );
};
export default InputAmountBox;
