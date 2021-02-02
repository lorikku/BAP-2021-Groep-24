import * as React from "react";
import "./newactivityheader.css";

const NewActivityHeader = () => {
  return (
    <div className="newactivity-header-container">
      <div className="newactivity-header-titles-wrapper">
        <p className="newactivity-header-title">Plan je activiteit</p>
        <p className="newactivity-header-subtitle">
          Vul de nodige gegevens in om je activiteit tot leven te wekken
        </p>
      </div>
      <p>Illustratie</p>
    </div>
  );
};

export default NewActivityHeader;
