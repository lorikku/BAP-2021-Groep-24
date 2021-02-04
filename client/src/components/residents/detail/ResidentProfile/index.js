import * as React from 'react';
import {
  deleteMyResident,
  fetchMyResident,
  postMyResident,
} from '../../../../services/ResidentsService';

import ResidentProfilePicture from '../ResidentProfilePicture';

import './residentprofile.css';

const ResidentProfile = ({ resident, showIcons }) => {
  const {
    _id,
    name,
    roomNr,
    floor,
    photoUri,
    isPermanent,
    spotlightTimestamp,
  } = resident;

  let isMyResidentLoading = false;
  const [isMyResident, setIsMyResident] = React.useState(false);

  //Checks if resident is in 'my residents' when profile lodas
  React.useEffect(() => {
    let componentMounted = true;

    if (showIcons) {
      const checkIsMyResident = async () => {
        const bool = await fetchMyResident(_id);
        if (componentMounted) setIsMyResident(bool);
      };
      checkIsMyResident();
    }

    return () => (componentMounted = false);
  }, [_id, setIsMyResident, showIcons]);

  //Function to toggle 'my resident'
  const toggleIsMyResident = async () => {
    //Check if another fetch is already running (so button cant get spammed)
    if (isMyResidentLoading) {
      return;
    }
    //Loading -> calling this function disallowed
    isMyResidentLoading = true;

    let myResidentUpdate;
    if (!isMyResident) {
      //If not my resident -> add to my residents
      myResidentUpdate = await postMyResident({
        _id,
        name,
        roomNr,
        floor,
        photoUri,
        spotlightTimestamp,
      });
    } else {
      //If my resident -> delete from my residents
      myResidentUpdate = await deleteMyResident(_id);
    }

    //If myResidentUpdate returned something -> fetch was complete
    if (myResidentUpdate) setIsMyResident(myResidentUpdate.newValue);

    //Not loading -> calling this function allowed
    isMyResidentLoading = false;
  };

  return (
    <div className="resident-profile-card">
      <ResidentProfilePicture src={photoUri} />
      <div className="res-profile-info-wrapper">
        <div className="res-profile-name-heart-wrapper">
          <p className="res-profile-name">{name}</p>
          {showIcons ? (
            <img
              onClick={toggleIsMyResident}
              className="res-profile-heart-btn"
              alt="knop om bewoner toe te voegen aan 'mijn bewoners'"
              src={`${
                isMyResident
                  ? '/assets/img/heart-btn-filled.svg'
                  : '/assets/img/heart-btn.svg'
              }`}
            ></img>
          ) : null}
        </div>

        <p className="res-profile-status">
          {isPermanent ? 'Vast verblijver' : 'Kort verblijver'}
        </p>
        <div className="res-profile-room-edit-wrapper">
          <div className="res-profile-room">{`Kamer ${roomNr}`}</div>
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
