import * as React from "react";
import "./overviewheader.css";

const OverviewHeader = () => {
  return (
    <div className="overview-header-container">
      <div className="header-last-week">
        <img
          className="chevron-left-pointer"
          alt="chevron links"
          src="/assets/img/chevron-left.svg"
        ></img>
        <div className="header-last-week-wrapper">
          <p className="header-last-week-text">Week 7</p>
          <p className="header-last-week-date">8 feb - 14 Feb</p>
        </div>
      </div>
      <div className="header-this-week-active">
        <p className="header-this-week-text">Week 8</p>
        <p className="header-this-week-date">15 feb - 21 feb</p>
      </div>
      <div className="header-next-week">
        <div className="header-next-week-wrapper">
          <p className="header-next-week-text">Week 9</p>
          <p className="header-next-week-date">22 feb - 28 Feb</p>
        </div>
        <img
          className="chevron-right-pointer"
          alt="chevron rechts"
          src="/assets/img/chevron-right.svg"
        ></img>
      </div>
    </div>
  );
};

export default OverviewHeader;
