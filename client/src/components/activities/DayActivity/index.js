import { format } from 'date-fns';
import * as React from 'react';
import { locale } from '../../../global/timeStampFuncs';
import './dayactivity.css';

const DayActivity = ({ activity, day, dayNumb, isToday }) => {
  return (
    <div
      className={`dayactivity-container${
        isToday
          ? ' container-today'
          : activity
          ? ' container-planned'
          : ' container-unplanned'
      }`}
    >
      <div className="dayactivity-left-component">
        <div
          className={`dayactivity-calendar${
            isToday
              ? ' calendar-today'
              : activity
              ? ' calendar-planned'
              : ' calendar-unplanned'
          }`}
        >
          <p
            className={`dayactivity-date${
              isToday ? ' date-today' : ' date-future'
            }`}
          >
            {dayNumb}
          </p>
          <p
            className={`dayactivity-day${
              isToday ? ' date-today' : ' date-future'
            }`}
          >
            {day}
          </p>
        </div>
        {activity ? (
          <div className="dayactivity-main-info">
            <p className="dayactivity-title">{activity.title}</p>
            <div className="dayactivity-location-time-wrapper">
              <div className="dayactivity-location-border">
                <p className="dayactivity-location">{activity.location}</p>
              </div>
              <p className="dayactivity-time">
                {format(activity.startTimestamp, 'HH:mm', locale)} -{' '}
                {format(activity.endTimestamp, 'HH:mm', locale)}
              </p>
            </div>
          </div>
        ) : (
          <p className="dayactivity-noplanned-text">
            Nog geen activiteit gepland
          </p>
        )}
      </div>

      {activity ? (
        <div className="dayactivity-right-component">
          <div className="dayactivity-interested-container">
            <p className="interested-title bubbles-title">
              Wellicht geïnteresseerd
            </p>
            <div className="dayactivity-bubbles">
              {/* max 2, 3de is bubble met aantal */}

              {activity.interestedResidents.map((resident, index) =>
                index < 2 ? (
                  <img
                    key={index}
                    className="radius interested-bubble"
                    alt="geïnteresseerde persoon"
                    src={
                      resident.photoUri
                        ? resident.photoUri
                        : '/assets/img/emptystate-profile.svg'
                    }
                  ></img>
                ) : null
              )}
              {activity.interestedResidents.length < 3 ? null : (
                <div className="radius interested-bubble bubble-rest">
                  <p className="interested-plus-amount">
                    {activity.interestedResidents.length > 15
                      ? '15+'
                      : activity.interestedResidents.length}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="dayactivity-present-container">
            <p className="present-title bubbles-title">Aanwezigen</p>
            <div className="dayactivity-bubbles">
              {/* max 2, 3de is bubble met aantal */}
              {activity.participatedResidents.map((resident, index) =>
                index < 2 ? (
                  <img
                    key={index}
                    className="radius interested-bubble"
                    alt="geïnteresseerde persoon"
                    src={
                      resident.photoUri
                        ? resident.photoUri
                        : '/assets/img/emptystate-profile.svg'
                    }
                  ></img>
                ) : null
              )}
              {activity.participatedResidents.length < 3 ? null : (
                <div className="radius interested-bubble bubble-rest">
                  <p className="interested-plus-amount">
                    {activity.participatedResidents.length > 15
                      ? '15+'
                      : activity.participatedResidents.length}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default DayActivity;
