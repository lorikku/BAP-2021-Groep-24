import * as React from 'react';
import { format, addDays, getDay, getWeek, setDay, getISODay, setISODay } from 'date-fns';
import { Link } from 'react-router-dom';
import DayActivity from '../../../components/activities/DayActivity';
import paths from '../../../consts/paths';
import { locale } from '../../../global/timeStampFuncs';
import './overviewallactivities.css';

const dayplanningOptions = {
  YESTERDAY: 'Gisteren',
  TODAY: 'Vandaag',
  TOMORROW: 'Morgen',
};

const OverviewAllActivities = ({
  activitiesPerDay,
  selectedDate,
  changeWeek,
}) => {
  return (
    <div className="all-activities-container fit-height flex-content">
      <div className="all-activities-btns">
        <div
          onClick={() => changeWeek('present')}
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
      {/* per dag deze section tonen met zijn activiteiten er in --> */}
      <ul className="dayplanning-list">
        {activitiesPerDay.map((day, index) => {
          const dayIndex = index + 1;
          const today = new Date();

          let dayplanningTitle = '';

          if (getWeek(today) === getWeek(selectedDate)) {
            switch (dayIndex) {
              case getDay(addDays(today, -1)):
                dayplanningTitle = dayplanningOptions.YESTERDAY;
                break;

              case getDay(today):
                dayplanningTitle = dayplanningOptions.TODAY;
                break;

              case getDay(addDays(today, 1)):
                dayplanningTitle = dayplanningOptions.TOMORROW;
                break;

              default:
                dayplanningTitle = format(
                  setDay(selectedDate, dayIndex),
                  'd MMMM',
                  locale
                );
                break;
            }
          } else {
            dayplanningTitle = format(
              setDay(selectedDate, dayIndex),
              'd MMMM',
              locale
            );
          }

          const isToday = dayplanningTitle === dayplanningOptions.TODAY;

          return (
            <li
              key={dayIndex}
              className="dayplanning-section"
            >
              <p className="dayplanning-title">{dayplanningTitle}</p>
              {/* IF NO ACTIVITIES WERE FOUND FOR THIS DAY */}
              {day.length === 0 ? (
                <div className="dayplanning-container">
                  <div className={`dayactivity-colorbar${isToday ? ' colorbar-today' : ' colorbar-unplanned'}`} />
                  <DayActivity
                  isToday={isToday}
                    day={format(
                      setISODay(selectedDate, dayIndex, locale),
                      'EEEEEE',
                      locale
                    )}
                    dayNumb={format(
                      setISODay(selectedDate, dayIndex, locale),
                      'dd',
                      locale
                    )}
                  />
                </div>
              ) : (
                // ELSE MAP THROUGH ACTIVITIES
                day.map((activity) => (
                  <Link
                    to={paths.PATH_ACTIVITIES.ROOT + `/${activity._id}`}
                    className="dayplanning-container"
                  >
                    <div className={`dayactivity-colorbar${isToday ? ' colorbar-today' : ' colorbar-planned'}`} />
                    <DayActivity
                      activity={activity}
                      isToday={isToday}
                      day={format(
                        setISODay(selectedDate, dayIndex, locale),
                        'EEEEEE',
                        locale
                      )}
                      dayNumb={format(
                        setISODay(selectedDate, dayIndex, locale),
                        'dd',
                        locale
                      )}
                    />
                  </Link>
                ))
              )}
            </li>
          );
        })}
      </ul>
      {/* <-- tot hier */}
    </div>
  );
};

export default OverviewAllActivities;
