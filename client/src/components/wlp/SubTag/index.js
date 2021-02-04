import * as React from "react";
import "./subtag.css";

const SubTag = ({ text }) => {
  return (
    <div className="input-tag">
      <p className="input-tag-text">{text}</p>
      <img
        className="tag-cross"
        alt="kruisje"
        src="/assets/img/wlp-cross.svg"
      ></img>
    </div>
  );
};
export default SubTag;
