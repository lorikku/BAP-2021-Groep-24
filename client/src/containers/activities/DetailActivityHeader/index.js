import * as React from "react";
import "./detailactivityheader.css";

const DetailActivityHeader = () => {
  return (
    <div className="dtl-act-head-container">
      <div className="dtl-act-head-calendar">
        <p className="dtl-act-calendar-day">Donderdag</p>
        <p className="dtl-act-calendar-date">15</p>
        <p className="dtl-act-calendar-month">Januari</p>
      </div>
      <div className="dtl-act-head-info">
        <p className="dtl-act-head-title">Wandeltocht: 't park van Kortrijk</p>
        <div className="dtl-act-head-time-loc-wrapper">
          <div className="dtl-act-head-time">
            <img
              className="dtl-act-head-time-icon"
              alt="time icoontje"
              src="/assets/img/clock-icon-dark.svg"
            ></img>
            <p className="dtl-act-head-time">14:00 - 16:00</p>
          </div>
          <div className="dtl-act-head-loc">
            <img
              className="dtl-act-head-loc-icon"
              alt="location icon"
              src="/assets/img/location-icon-dark.svg"
            ></img>
            <p className="dtl-act-head-loc">Buda Kitchen</p>
          </div>
        </div>
      </div>
      <img
        className="dtl-act-head-edit"
        alt="edit icoon"
        src="/assets/img/edit-resident.svg"
      ></img>
    </div>
  );
};

export default DetailActivityHeader;
