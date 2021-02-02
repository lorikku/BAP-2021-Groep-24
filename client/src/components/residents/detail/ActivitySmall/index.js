import * as React from "react";
import "./activitysmall.css";

const ActivitySmall = ({ name, date, hour, location }) => {
  return (
    <li className="activity-small-border-bottom">
      <div className="activity-small-container">
        <div className="activity-small-calendar-date">
          <p className="activity-small-date">{date.dateNr}</p>
          <p className="activity-small-day">{date.day}</p>
        </div>
        <div className="activity-small-info">
          <p className="activity-small-name">{name}</p>
          <div className="activity-small-location-hour-wrapper">
            <p className="activity-small-location">{location}</p>
            <div className="activity-small-hour-border">
              <p className="activity-small-hour">{hour}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ActivitySmall;
