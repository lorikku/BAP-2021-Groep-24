import * as React from 'react';
import { addWeeks, getWeek } from 'date-fns';

import {
  getFirstDayOfWeek,
  getLastDayOfWeek,
  locale,
} from '../../../global/timeStampFuncs';

import './overviewheader.css';

const OverviewHeader = ({ selectedDate, changeWeek }) => {
  const prevWeek = addWeeks(selectedDate, -1);
  const nextWeek = addWeeks(selectedDate, 1);

  return (
    <div className="overview-header-container">
      <div onClick={() => changeWeek('prev')} className="header-last-week">
        <img
          className="chevron-left-pointer"
          alt="chevron links"
          src="/assets/img/chevron-left.svg"
        ></img>
        <div className="header-last-week-wrapper">
          <p className="header-last-week-text">Week {getWeek(prevWeek, locale)}</p>
          <p className="header-last-week-date">
            {getFirstDayOfWeek(prevWeek)} - {getLastDayOfWeek(prevWeek)}
          </p>
        </div>
      </div>
      <div className="header-this-week-active">
        <p className="header-this-week-text">Week {getWeek(selectedDate, locale)}</p>
        <p className="header-this-week-date">
          {getFirstDayOfWeek(selectedDate)} - {getLastDayOfWeek(selectedDate)}
        </p>
      </div>
      <div onClick={() => changeWeek('next')} className="header-next-week">
        <div className="header-next-week-wrapper">
          <p className="header-next-week-text">Week {getWeek(nextWeek, locale)}</p>
          <p className="header-next-week-date">
            {getFirstDayOfWeek(nextWeek)} - {getLastDayOfWeek(nextWeek)}
          </p>
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
