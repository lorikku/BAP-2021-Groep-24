import * as React from "react";
import "./residentinterested.css";

const ResidentInterested = ({ name, room }) => {
  return (
    <li className="int-container">
      <div className="int-top-half">
        <img
          className="int-pic"
          alt="fototje van intpersoon"
          src="https://1tsip9tt643kufi0v3m1s4is-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/accessories-for-elderly-women.jpg"
        ></img>
        <div className="int-info-wrapper">
          <p className="int-name">{name.first + " " + name.last}</p>
          <div className="int-type">
            <p className="int-type-text">{room}</p>
          </div>
        </div>
      </div>
      <div className="int-yes-no-container">
        <div className="int-yes">
          <img
            className="int-yes-icon"
            alt="checkmark in cirkel"
            src="/assets/img/check-circle-white.svg"
          ></img>
          <p className="int-yes-text white">Aanwezig</p>
        </div>
        <div className="int-no">
          <p className="int-no-text white">Afwezig</p>
          <img
            className="int-no-icon"
            alt="checkmark in cirkel"
            src="/assets/img/cross-circle-white.svg"
          ></img>
        </div>
      </div>
    </li>
  );
};
export default ResidentInterested;
