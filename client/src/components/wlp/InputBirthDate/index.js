import * as React from "react";
import "./inputbirthdate.css";

const InputBirthDate = () => {
  return (
    <div className="input-wlp-container">
      <label className="wlp-input-title" htmlFor="birth">
        Geboortedatum
      </label>
      <div>
        <div className="wlp-input-wrapper wlp-input">
          <div className="wlp-icon-div">
            <img
              className="wlp-icon"
              alt="present icon"
              src="/assets/img/wlp-gift.svg"
            ></img>
          </div>
          <input
            className="birth-input wlp-input-style"
            id="birth"
            placeholder="DD / MM / JJJJ"
          ></input>
        </div>
      </div>
    </div>
  );
};
export default InputBirthDate;
