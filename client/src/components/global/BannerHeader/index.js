import * as React from "react";
import "./bannerheader.css";

const BannerHeader = ({ title, subtext, isNewResident }) => {
  return (
    <div
      className={`newactivity-header-container${
        isNewResident ? " color-blue" : ""
      }`}
    >
      <div className="newactivity-header-titles-wrapper">
        <p className="newactivity-header-title">{title}</p>
        <p className="newactivity-header-subtitle">{subtext}</p>
      </div>
      <p>Illustratie</p>
    </div>
  );
};

export default BannerHeader;
