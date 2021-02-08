import * as React from 'react';
import TimeField from 'react-simple-timefield';

import DatePicker from '../../../components/activities/DatePicker';

import './newactivityone.css';

const NewActivityOne = ({ inputs, changeInput, isInputValid, nextToInterests }) => {
  const { title, date, startTime, endTime, location } = inputs;

  return (
    <div className="newactivity-one-container">
      <div className="newactivity-one-title-wrapper">
        <label className="newactivity-one-title">Titel Activiteit</label>
        <input
          className="newactivity-one-title-input"
          value={title}
          onChange={(newValue) =>
            changeInput('title', newValue.currentTarget.value)
          }
          type="text"
        ></input>
      </div>
      <div className="newactivity-one-left-right-wrapper">
        <div className="newactivity-one-left-section">
          <p className="newactivity-one-title-date">Selecteer een datum</p>
          <div className="newactivity-one-calendar">
            <DatePicker date={date} changeInput={changeInput} />
          </div>
        </div>

        <div className="newactivity-one-right-section">
          <div className="newactivity-one-from-to-wrapper">
            <div className="newactivity-one-from">
              <img
                className="newactivity-one-from-icon"
                alt="klok icoontje"
                src="/assets/img/clock-icon-dark.svg"
              ></img>
              <div className="newactivity-one-from-wrapper">
                <label className="newactivity-one-from-title">Van</label>
                <TimeField
                  value={startTime}
                  onChange={(e, value) => changeInput('startTime', value)}
                  input={
                    <input className="newactivity-one-from-input" type="text" />
                  }
                />
              </div>
            </div>
            <p className="newactivity-one-dash">-</p>
            <div className="newactivity-one-to">
              <div className="newactivity-one-to-wrapper">
                <label className="newactivity-one-from-title">Tot </label>
                <TimeField
                  value={endTime}
                  onChange={(e, value) => changeInput('endTime', value)}
                  input={
                    <input className="newactivity-one-from-input" type="text" />
                  }
                />
              </div>
            </div>
          </div>

          <div className="newactivity-one-location">
            <img
              className="newactivity-one-location-icon"
              alt="location icon"
              src="/assets/img/location-icon-dark.svg"
            ></img>
            <div className="newactivity-one-location-wrapper">
              <label className="newactivity-one-location-title">Locatie</label>
              <input
                className="newactivity-one-location-input"
                value={location}
                onChange={(newValue) =>
                  changeInput('location', newValue.currentTarget.value)
                }
              ></input>
            </div>
          </div>
          <div
            onClick={isInputValid ? nextToInterests : null}
            className={`newactivity-one-next-btn${
              !isInputValid ? ' newactivity-one-next-btn--invalid' : ''
            }`}
          >
            <p className="newactivity-one-next-btn-text">
              Interesses selecteren
            </p>
            <img
              className="newactivity-one-next-arrow"
              alt="next arrow naar rechts"
              src="/assets/img/arrow-right-white.svg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewActivityOne;
