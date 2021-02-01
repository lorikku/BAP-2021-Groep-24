import * as React from "react";
import "./contact.css";

const Contact = ({ name, type }) => {
  return (
    <div className="contact-container">
      <img
        className="contact-pic"
        alt="fototje van contactpersoon"
        src="https://1tsip9tt643kufi0v3m1s4is-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/accessories-for-elderly-women.jpg"
      ></img>
      <div className="contact-info-wrapper">
        <p className="contact-name">{name.first + " " + name.last}</p>
        <div className="contact-type">
          <p className="contact-type-text">{type}</p>
        </div>
      </div>
      <div className="contact-info-btn">
        <img
          className="contact-info-btn-vector"
          alt="chevron down icon"
          src="/assets/img/chevron-down.svg"
        ></img>
      </div>
    </div>
  );
};

export default Contact;
