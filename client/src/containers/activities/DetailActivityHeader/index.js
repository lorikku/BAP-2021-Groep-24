import * as React from 'react';
import './detailactivityheader.css';
import Tag from './../../../components/interests/Tag';

const DetailActivityHeader = () => {
  return (
    <div className="dtl-act-head-container">
      <div className="dtl-act-head-top-container">
        <div className="dtl-act-head-calendar">
          <p className="dtl-act-calendar-day white">Donderdag</p>
          <p className="dtl-act-calendar-date white">15</p>
          <p className="dtl-act-calendar-month white">Januari</p>
        </div>
        <div className="dtl-act-head-info">
          <p className="dtl-act-head-title">
            Wandeltocht: 't park van Kortrijk
          </p>
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
      <div className="dtl-act-head-bottom-container">
        <img
          className="dtl-act-head-chevronleft"
          alt="chevron links"
          src="/assets/img/chevron-left.svg"
        ></img>
        <ul className="dtl-act-head-tags">
          <Tag interest={{ name: 'test' }} className="dtl-act-head-tag" />
        </ul>
        <img
          className="dtl-act-head-chevronright"
          alt="chevron rechts"
          src="/assets/img/chevron-right.svg"
        ></img>
      </div>
    </div>
  );
};

export default DetailActivityHeader;
