import * as React from "react";
import "./newactivityone.css";

const NewActivityOne = () => {
  return (
    <div className="newactivity-one-container">
      <div className="newactivity-one-title-wrapper">
        <label className="newactivity-one-title">Titel Activiteit</label>
        <input className="newactivity-one-title-input" type="text"></input>
      </div>
      <div className="newactivity-one-left-right-wrapper">
        <div className="newactivity-one-left-section">
          <p className="newactivity-one-title-date">Selecteer een datum</p>
          <div className="newactivity-one-calendar"></div>
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
                <input
                  className="newactivity-one-from-input"
                  type="text"
                ></input>
              </div>
            </div>
            <p className="newactivity-one-dash">-</p>
            <div className="newactivity-one-to">
              <div className="newactivity-one-to-wrapper">
                <label className="newactivity-one-to-title">Tot</label>
                <input className="newactivity-one-to-input" type="text"></input>
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
              <input className="newactivity-one-location-input"></input>
            </div>
          </div>
          <div className="newactivity-one-next-btn">
            <p className="newactivity-one-next-btn-text">Interesses selecteren</p>
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
