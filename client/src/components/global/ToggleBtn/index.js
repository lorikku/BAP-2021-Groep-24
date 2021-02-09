import * as React from "react";
import "./togglebtn.css";

const ToggleBtn = ({setOption, option1, option2}) => {
  return (
    <div className="toggle-btn">
      <div onClick={() => setOption('option1')} className={!option1.isActive ? "toggle-passed" : "toggle-planned"}>
        <p className={!option1.isActive ? "toggle-passed-text" : "toggle-planned-text"}>{option1.text}</p>
      </div>
      <div onClick={() => setOption('option2')} className={!option2.isActive ? "toggle-passed" : "toggle-planned"}>
        <p className={!option2.isActive ? "toggle-passed-text" : "toggle-planned-text"}>{option2.text}</p>
      </div>
    </div>
  );
};

export default ToggleBtn;
