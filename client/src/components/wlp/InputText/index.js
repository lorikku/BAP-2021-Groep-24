import * as React from "react";
import "./inputtext.css";

const InputText = ({ inputId, title, placeholder, icon }) => {
  return (
    <div className="input-wlp-container">
      <label className="wlp-input-title" htmlFor={inputId}>
        {title}
      </label>
      <div>
        <div className="wlp-input-wrapper wlp-input">
          <div className="wlp-icon-div">
            <img
              className="wlp-icon"
              alt="marker icon"
              src={`/assets/img/wlp-` + icon + `.svg`}
            ></img>
          </div>
          <input
            className="place-input wlp-input-style "
            id={inputId}
            placeholder={placeholder}
          ></input>
        </div>
      </div>
    </div>
  );
};
export default InputText;
