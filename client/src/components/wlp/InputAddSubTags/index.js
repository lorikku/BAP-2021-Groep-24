import * as React from "react";
import SubTag from "../SubTag";
import "./inputaddsubtags.css";

const InputAddSubtags = ({ title, icon, placeholder, inputId }) => {
  return (
    <div className="input-wlp-container">
      <label className="wlp-input-title" htmlFor={inputId}>
        {title}
      </label>
      <div className="input-tags-wrapper">
        <div className="input-plus-wrapper">
          <div className="wlp-input-wrapper wlp-input">
            {/* <div className="wlp-icon-div">
              <img
                className="wlp-icon"
                alt="present icon"
                src={`/assets/img/wlp-` + icon + `.svg`}
              ></img>
            </div> */}
            <input
              className="birth-input wlp-input-style"
              id={inputId}
              placeholder={placeholder}
            ></input>
          </div>
          <div className="input-plus">
            <img
              className="input-plus-icon"
              alt="plus icon"
              src="/assets/img/plus-misc.svg"
            ></img>
          </div>
        </div>
        <div className="input-tags-list">
          <SubTag text={"Postzegelverzamelen"} />
          <SubTag text={"Schilderen"} />
          <SubTag text={"Schaken"} />
        </div>
      </div>
    </div>
  );
};
export default InputAddSubtags;
