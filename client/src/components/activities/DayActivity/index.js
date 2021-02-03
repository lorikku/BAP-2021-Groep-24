import * as React from "react";
import "./dayactivity.css";

const DayActivity = () => {
  return (
    <div className="dayactivity-container">
      <div className="dayactivity-left-component">
        {/* 
        color variations classnames: 
        calendar-today/date-today
        calendar-future/date-future
        calendar-unplanned 

        
        */}
        <div className="dayactivity-calendar calendar-today">
          <p className="dayactivity-date date-today">15</p>
          <p className="dayactivity-day date-today">Ma</p>
        </div>
        <div className="dayactivity-main-info">
          <p className="dayactivity-title">Taartenbak: Frangipanne</p>
          <div className="dayactivity-location-time-wrapper">
            <div className="dayactivity-location-border">
              <p className="dayactivity-location"> Keuken H.Hart</p>
            </div>
            <p className="dayactivity-time">8:30 - 11:30</p>
          </div>
        </div>
      </div>

      <div className="dayactivity-right-component">
        <div className="dayactivity-interested-container">
          <p className="interested-title bubbles-title">
            Wellicht geïnteresseerd
          </p>
          <div className="dayactivity-bubbles">
            {/* max 2, 3de is bubble met aantal */}
            <img
              className="radius interested-bubble"
              alt="geïnteresseerde persoon"
              src="https://media.istockphoto.com/photos/happy-senior-woman-picture-id1029340496?k=6&m=1029340496&s=612x612&w=0&h=4ScjIFlsN8uVI2xxijOegNZaiYn4_toD0AGciS4bejc="
            ></img>
            <img
              className="radius interested-bubble"
              alt="geïnteresseerde persoon"
              src="https://media.istockphoto.com/photos/happy-senior-woman-picture-id1029340496?k=6&m=1029340496&s=612x612&w=0&h=4ScjIFlsN8uVI2xxijOegNZaiYn4_toD0AGciS4bejc="
            ></img>
            <div className="radius interested-bubble bubble-rest">
              <p className="interested-plus-amount">15+</p>
            </div>
          </div>
        </div>
        <div className="dayactivity-present-container">
          <p className="present-title bubbles-title">Aanwezigen</p>
          <div className="dayactivity-bubbles">
            {/* max 2, 3de is bubble met aantal */}
            <img
              className="radius present-bubble"
              alt="geïnteresseerde persoon"
              src="https://media.istockphoto.com/photos/happy-senior-woman-picture-id1029340496?k=6&m=1029340496&s=612x612&w=0&h=4ScjIFlsN8uVI2xxijOegNZaiYn4_toD0AGciS4bejc="
            ></img>
            <img
              className="radius present-bubble"
              alt="geïnteresseerde persoon"
              src="https://media.istockphoto.com/photos/happy-senior-woman-picture-id1029340496?k=6&m=1029340496&s=612x612&w=0&h=4ScjIFlsN8uVI2xxijOegNZaiYn4_toD0AGciS4bejc="
            ></img>
            <div className="radius present-bubble bubble-rest">
              <p className="present-plus-amount">15+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DayActivity;
