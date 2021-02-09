import * as React from "react";
import "./inputbirthplace.css";

const InputBirthPlace = () => {
  return (
    <div className="input-wlp-container">
      <label className="wlp-input-title" htmlFor="place">
        Geboorteplaats
      </label>
      <div>
        <div className="wlp-input-wrapper wlp-input">
          <div className="wlp-icon-div">
            <img
              className="wlp-icon"
              alt="marker icon"
              src="/assets/img/wlp-marker.svg"
            ></img>
          </div>
          <input
            className="place-input wlp-input-style "
            id="place"
            placeholder="Gemeente"
          ></input>
        </div>
      </div>
    </div>
  );
};
export default InputBirthPlace;
