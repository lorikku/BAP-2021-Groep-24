import * as React from "react";
import "./togglebtn.css";

const ToggleBtn = ({option1, option2}) => {
  return (
    <div className="toggle-btn">
      <div className="toggle-planned">
        <p className="toggle-planned-text">{option1}</p>
      </div>
      <div className="toggle-passed">
        <p className="toggle-passed-text">{option2}</p>
      </div>
    </div>
  );
};

export default ToggleBtn;
