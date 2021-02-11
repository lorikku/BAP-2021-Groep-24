import * as React from 'react';
import './detailactivityheader.css';
import Tag from './../../../components/interests/Tag';
import { format } from 'date-fns';
import { nlBE } from 'date-fns/locale';

const DetailActivityHeader = ({ activity }) => {
  const { title, location, startTimestamp, endTimestamp, interests, floor } = activity;
  const startDate = new Date(startTimestamp);
  const endDate = new Date(endTimestamp);

  return (
    <div className="dtl-act-head-container">
      <div className="dtl-act-head-top-container">
        <div className="dtl-act-head-calendar">
          <p className="dtl-act-calendar-day white">
            {format(startDate, 'EEEE', nlBE)}
          </p>
          <p className="dtl-act-calendar-date white">
            {format(startDate, 'dd', nlBE)}
          </p>
          <p className="dtl-act-calendar-month white">
            {format(startDate, 'MMMM', nlBE)}
          </p>
        </div>
        <div className="dtl-act-head-info">
          <p className="dtl-act-head-title">{title}</p>
          <div className="dtl-act-head-time-loc-wrapper">
            <div className="dtl-act-head-time">
              <img
                className="dtl-act-head-time-icon"
                alt="time icoontje"
                src="/assets/img/clock-icon-dark.svg"
              ></img>
              <p className="dtl-act-head-time">
                {format(startDate, 'HH:mm', nlBE)} -{' '}
                {format(endDate, 'HH:mm', nlBE)}
              </p>

            </div>
            <div className="dtl-act-head-loc">
              <img
                className="dtl-act-head-loc-icon"
                alt="location icon"
                src="/assets/img/location-icon-dark.svg"
              ></img>
              <p className="dtl-act-head-loc">{location}</p>
            </div>
          </div>
          <p className="dtl-act-head-floor">
                Floor {floor}
              </p>
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
          {interests.map((interest, index) => (
            <Tag key={index} interest={interest} className="dtl-act-head-tag" />
          ))}
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
