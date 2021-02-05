import * as React from "react";
import "./inputactivity.css";

const InputActivity = ({ label }) => {
  return (
    <div className="activity-checkbox activity-checked">
      <p className="activity-checkbox-title activity-title-checked">{label}</p>
    </div>
  );
};
export default InputActivity;
