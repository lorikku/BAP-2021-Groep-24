import * as React from 'react';
import { Link } from 'react-router-dom';
import DayActivity from '../../../components/activities/DayActivity';
import WeekDiviser from '../../../components/activities/WeekDiviser';
import paths from '../../../consts/paths';
import './overviewallactivities.css';

const OverviewAllActivities = () => {
  return (
    <div className="all-activities-container">
      <div className="all-activities-btns">
        <div
          onClick={() => console.log('back to today')}
          className="all-activities-now-btn"
        >
          <img
            className="all-activities-now-vector"
            alt="chevron omhoog"
            src="/assets/img/chevron-up-white.svg"
          ></img>
        </div>
        <Link
          to={paths.PATH_ACTIVITIES.ROOT + paths.PATH_ACTIVITIES.NEW_ACTIVITY}
          className="all-activities-add-btn"
        >
          <img
            className="all-activities-add-vector"
            alt="plusje"
            src="/assets/img/plus-white.svg"
          ></img>
        </Link>
      </div>
      <WeekDiviser />
      {/* per dag deze section tonen met zijn activiteiten er in --> */}
      <div className="dayplanning-section">
        <p className="dayplanning-title">Vandaag</p>
        {/* activity components for this day */}
        <Link to={paths.PATH_ACTIVITIES.ROOT + '/insert-id-here'} className="dayplanning-container">
          {/* colorbar classnames:
                colorbar-today
                colorbar-future
                colorbar-unplanned
            */}
          <div className="dayactivity-colorbar colorbar-today"></div>
          <DayActivity />
        </Link>
      </div>
      {/* <-- tot hier */}
    </div>
  );
};

export default OverviewAllActivities;
