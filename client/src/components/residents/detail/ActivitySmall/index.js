
import * as React from "react";
import {format} from "date-fns";
import {Link} from "react-router-dom";

import {locale} from "../../../../global/timeStampFuncs";

import "./activitysmall.css";
import paths from "../../../../consts/paths";

const ActivitySmall = ({ activity }) => {
  const { _id, title, location, startTimestamp, endTimestamp } = activity;

  return (
    <li className="activity-small-border-bottom">
      <Link to={paths.PATH_ACTIVITIES.ROOT + `/${_id}`} className="activity-small-container">
        <div className="activity-small-calendar-date">
          <p className="activity-small-date">{format(startTimestamp, 'dd', locale)}</p>
          <p className="activity-small-day">{format(startTimestamp, 'EEEEEE', locale)}</p>
        </div>
        <div className="activity-small-info">
          <p className="activity-small-name">{title}</p>
          <div className="activity-small-location-hour-wrapper">
            <p className="activity-small-location">{location}</p>
            <div className="activity-small-hour-border">
              <p className="activity-small-hour">{format(startTimestamp, 'HH:mm', locale)} - {format(endTimestamp, 'HH:mm', locale)}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ActivitySmall;
