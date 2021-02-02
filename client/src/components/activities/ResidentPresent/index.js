import * as React from "react";
import "./residentpresent.css";

const ResidentPresent = ({ name, room }) => {
  return (
    <li className="present-container">
      <img
        className="present-pic"
        alt="fototje van presentpersoon"
        src="https://1tsip9tt643kufi0v3m1s4is-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/accessories-for-elderly-women.jpg"
      ></img>
      <div className="present-info-wrapper">
        <p className="present-name">{name.first + " " + name.last}</p>
        <div className="present-type">
          <p className="present-type-text">{room}</p>
        </div>
      </div>
      <div className="present-info-btn">
        <img
          className="present-info-btn-vector"
          alt="minus in cirkel icoon"
          src="/assets/img/minus-circle-white.svg"
        ></img>
      </div>
    </li>
  );
};
export default ResidentPresent;
