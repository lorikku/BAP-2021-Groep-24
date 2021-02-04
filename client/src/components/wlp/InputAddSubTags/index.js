import * as React from "react";
import SubTag from "../SubTag";
import "./inputaddsubtags.css";

const InputAddSubtags = () => {
  return (
    <div className="input-wlp-container">
      <label className="wlp-input-title" for="birth">
        Woonplaats
      </label>
      <div className="input-tags-wrapper">
        <div className="input-plus-wrapper">
          <div className="wlp-input-wrapper wlp-input">
            <div className="wlp-icon-div">
              <img
                className="wlp-icon"
                alt="present icon"
                src="/assets/img/wlp-house.svg"
              ></img>
            </div>
            <input
              className="birth-input wlp-input-style"
              id="birth"
              placeholder="Voeg woonplaats toe"
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
          <SubTag text={"Lendelede"}/>
          <SubTag text={"Lendelede"}/><SubTag text={"Lendelede"}/>
        </div>
      </div>
    </div>
  );
};
export default InputAddSubtags;
