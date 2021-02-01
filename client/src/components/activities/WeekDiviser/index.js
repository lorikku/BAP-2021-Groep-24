import * as React from "react";
import "./weekdiviser.css";

const WeekDiviser = () => {
  return (
    <div className="weekdiviser-container">
      <div className="weekdiviser">
        <div className="weekdiviser-border">
          <p className="weekdiviser-week">Week 8</p>
        </div>
        <p className="weekdiviser-date">15 feb - 21 feb</p>
      </div>
    </div>
  );
};
export default WeekDiviser;
