import * as React from 'react';
import ObjectID from 'bson-objectid';
import { Link } from 'react-router-dom';

import './overviewprofile.css';
import { isTimestampNew } from '../../../../global/timeStampFuncs';
import {
  deleteMyResident,
  postMyResident,
} from '../../../../services/MyResidentsService';
import paths from '../../../../consts/paths';

const OverviewProfile = ({ resident, isMatchingPage }) => {
  const {
    _id,
    name,
    roomNr,
    floor,
    photoUri,
    isPermanent,
    spotlightTimestamp,
  } = resident;

  //Gets created timestamp from _id (BSON ID)
  const createdAtDate = ObjectID(_id).getTimestamp();
  const isNew = isTimestampNew(createdAtDate.getTime());

  //Checks if resident is still in spotlight
  const isSpotlight = isTimestampNew(spotlightTimestamp);

  let isMyResidentLoading = false;
  const [isMyResident, setIsMyResident] = React.useState(resident.isMyResident);

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
    <li className={`residents-overview__overviewprofile`}>
      <div className="residents-myresidents__overviewprofile__container">
        <Link
          className="residents-myresidents__overviewprofile__link"
          to={
            isMatchingPage
              ? paths.PATH_MATCHING.ROOT + '/' + _id
              : paths.PATH_RESIDENTS.ROOT + '/' + _id
          }
        >
          <div className="residents-myresidents__overviewprofile__wrapper">
            {isNew ? (
              <p className="residents-myresidents__overviewprofile__nieuw">
                Nieuw
              </p>
            ) : null}
            <div className="residents-myresidents__overviewprofile__imgwrapper">
              <img
                alt={`Foto van ${name}.`}
                className={`residents-myresidents__overviewprofile__img${
                  isNew || isSpotlight
                    ? '  residents-myresidents__overviewprofile__img--acitve'
                    : ''
                }`}
                src={photoUri ? photoUri : '/assets/img/emptystate-profile.svg'}
              />
              {isNew || isSpotlight ? (
                <img
                  alt="Foto van een ster"
                  className="residents-myresidents__overviewprofile__star"
                  src="/assets/img/star-filled-border.svg"
                />
              ) : null}
            </div>
            <div className="residents-myresidents__overviewprofile__wrapper residents-myresidents__overviewprofile__wrapper--name">
              <p className="residents-myresidents__overviewprofile__name">
                {name}
              </p>
              <p className="residents-myresidents__overviewprofile__ispermanent">
                {isPermanent ? 'Vast verblijver' : 'Kort verblijver'}
              </p>
            </div>
          </div>
          <div className="residents-myresidents__overviewprofile__wrapper residents-myresidents__overviewprofile__wrapper--room">
            <p className="residents-myresidents__overviewprofile__roomtext">
              kamer
            </p>
            <p className="residents-myresidents__overviewprofile__roomnr">
              {roomNr}
            </p>
          </div>
        </Link>
        {isMatchingPage ? null : (
          <img
            alt="Hartje om bewoner toe te voegen aan Mijn Bewoners."
            onClick={toggleIsMyResident}
            className={`residents-myresidents__overviewprofile__heart${
              isMyResident
                ? ' residents-myresidents__overviewprofile__heart--active'
                : ''
            }`}
            src="/assets/img/heart-empty.svg"
          />
        )}
      </div>
    </li>
  );
};

export default OverviewProfile;
