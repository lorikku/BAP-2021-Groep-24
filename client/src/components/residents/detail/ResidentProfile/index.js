import * as React from 'react';
import ResidentProfilePicture from '../ResidentProfilePicture';

import './residentprofile.css';

const ResidentProfile = ({ name, status, room, photoUri, showIcons }) => {
  return (
    <div className="resident-profile-card">
      <ResidentProfilePicture src={photoUri}/>
      <div className="res-profile-info-wrapper">
        <div className="res-profile-name-heart-wrapper">
          <p className="res-profile-name">{name}</p>
          {showIcons ? (
            <img
              className="res-profile-heart-btn"
              alt="knop om bewoner toe te voegen aan 'mijn bewoners'"
              src="/assets/img/heart-btn.svg"
            ></img>
          ) : null}
        </div>

        <p className="res-profile-status">{status}</p>
        <div className="res-profile-room-edit-wrapper">
          <div className="res-profile-room">{room}</div>
          {showIcons ? (
            <img
              className="res-profile-edit-btn"
              alt="profiel van bewoner wijzigen"
              src="/assets/img/edit-resident.svg"
            ></img>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ResidentProfile;
