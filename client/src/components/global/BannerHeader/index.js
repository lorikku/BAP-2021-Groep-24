import * as React from "react";
import "./bannerheader.css";

const BannerHeader = ({ title, subtext, isNewResident, img }) => {
  return (
    <div
      className={`newactivity-header-container${
        isNewResident ? " color-blue" : ""
      }${!subtext ? " newactivity-header-container--thinner" : ""}`}
    >
      <div className="newactivity-header-titles-wrapper">
        <p className="newactivity-header-title">{title}</p>
        {subtext && <p className="newactivity-header-subtitle">{subtext}</p>}
      </div>
      {subtext ? (
        <img className="banner-vector" alt="vector voor banner" src={img}></img>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default BannerHeader;
