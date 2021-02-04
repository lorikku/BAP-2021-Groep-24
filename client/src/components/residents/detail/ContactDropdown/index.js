import * as React from "react";
import "./contactdropdown.css";
import Tag from "../../../interests/Tag";

const ContactDropdown = () => {
  return (
    <li className="contact-dropdown">
      <div className="contact-dropdown-grid">
        <img
          className="delete-contact-icon"
          alt="vuilbakje"
          src="/assets/img/trash-square.svg"
        ></img>
        <div className="dropdown-title-wrapper">
          <p className="dropdown-title">Match gemaakt op:</p>
          <p className="dropdown-subtitle">12 November 2017</p>
        </div>
      </div>
      {/* alleen bij match --> */}
      <div className="dropdown-tags-container">
        <p className="dropdown-tags-title">Gematched op</p>
        <ul className="dropdown-tags-list">
          <Tag name={"Pop Smoke Woooo"} />
        </ul>
      </div>
      {/* <--- */}
    </li>
  );
};

export default ContactDropdown;
