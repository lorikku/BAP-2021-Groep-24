import * as React from "react";
import "./progressball.css";

const ProgressBall = ({ number, title }) => {
  return (
    <div className="progress-group">
      <div className="progress-ball">
        <p className="progress-nr">{number}</p>
      </div>
      <p className="progress-title">{title}</p>
    </div>
  );
};
export default ProgressBall;
