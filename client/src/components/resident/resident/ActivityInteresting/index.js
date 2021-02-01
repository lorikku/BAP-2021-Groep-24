import * as React from "react";
import "./activityinteresting.css";

const ActivityInteresting = ({ activity }) => {
  return (
    <div className="activity-interesting-container">
      <div className="activity-interesting-add-btn">
        <img
          className="activity-interesting-add-vector"
          alt="een plusknop om activiteit toe te voegen"
          src="/assets/img/plus-circle-btn.svg"
        ></img>
      </div>
      <div className="activity-interesting-main-info">
        <p className="activity-interesting-title">{activity.title}</p>
        <div className="activity-interesting-time-location-wrapper">
          <div className="activity-interesting-time-icon-wrapper">
            <img
              className="activity-interesting-time-icon"
              alt="een klok icoontje"
              src="/assets/img/clock-icon.svg"
            ></img>
            <p className="activity-interesting-time">{activity.hour}</p>
          </div>
          <div className="activity-interesting-location-icon-wrapper">
            <img
              className="activity-interesting-location-icon"
              alt="een locatie icoontje"
              src="/assets/img/location-icon.svg"
            ></img>
            <p className="activity-interesting-location">{activity.location}</p>
          </div>
        </div>
      </div>

      <div className="activity-interesting-date-calendar">
        <p className="activity-interesting-day">{activity.day}</p>
        <p className="activity-interesting-date-number">{activity.dateNr}</p>
        <p className="activity-interesting-month">{activity.month}</p>
      </div>
    </div>
  );
};

export default ActivityInteresting;
