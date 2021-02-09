import * as React from 'react';

import { getWeek } from 'date-fns';
import {
  getFirstDayOfWeek,
  getLastDayOfWeek,
} from '../../../global/timeStampFuncs';

import './weekdiviser.css';

const WeekDiviser = ({ currentDate }) => {
  return (
    <div className="weekdiviser-container">
      <div className="weekdiviser">
        <div className="weekdiviser-border">
          <p className="weekdiviser-week">Week {getWeek(currentDate)}</p>
        </div>
        <p className="weekdiviser-date">
          {getFirstDayOfWeek(currentDate)} - {getLastDayOfWeek(currentDate)}
        </p>
      </div>
    </div>
  );
};
export default WeekDiviser;
