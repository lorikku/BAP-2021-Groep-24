import * as React from "react";

import "./residentprofile.css";

const ResidentProfile = ({ name, status, room }) => {
  return (
    <div className="resident-profile-container">
      <div className="resident-profile-card">
        <img
          className="res-profile-pic"
          alt="foto van bewoner"
          src="https://1tsip9tt643kufi0v3m1s4is-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/accessories-for-elderly-women.jpg"
        ></img>
        <div className="res-profile-info-wrapper">
          <div className="res-profile-name-heart-wrapper">
            <p className="res-profile-name">{name.first + " " + name.last}</p>
            <img
              className="res-profile-heart-btn"
              alt="knop om bewoner toe te voegen aan 'mijn bewoners'"
              src="/assets/img/heart-btn.svg"
            ></img>
          </div>

          <p className="res-profile-status">{status}</p>
          <div className="res-profile-room-edit-wrapper">
            <img
              className="res-profile-edit-btn"
              alt="profiel van bewoner wijzigen"
              src="/assets/img/edit-resident.svg"
            ></img>
            <div className="res-profile-room">{room}</div>
          </div>
        </div>
      </div>
      <div className="resident-spotlight-container">
        <img
          className="spotlight-vector"
          alt="a spotlight vector illustration"
          src="/assets/img/spotlight-pop.svg"
        ></img>
        <div className="spotlight-text-wrapper">
          <p className="spotlight-text">
            Geef {name.first} meer aandacht door haar profiel bovenaan het
            overzicht te zetten.
          </p>
          <div className="spotlight-btn">
            <img
              className="spotlight-btn-star"
              alt="spotlight star icon inside button"
              src="/assets/img/star-filled.svg"
            ></img>
            <p className="spotlight-btn-text">Zet in Spotlight</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentProfile;
