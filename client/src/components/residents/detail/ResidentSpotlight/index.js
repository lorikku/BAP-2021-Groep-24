import * as React from 'react';
import {updateResident} from '../../../../services/ResidentsService';
import { getMsUntilExpired, isTimestampNew } from '../../timeStampFuncs';

import './residentspotlight.css';

const ResidentSpotlight = ({ resident }) => {
  const { _id, spotlightTimestamp, name } = resident;

  const [spotlightTimestampState, setSpotlightTimestamp] = React.useState(
    spotlightTimestamp
  );

  //Checks if resident is still in spotlight
  let isSpotlightLoading = false;
  const [isSpotlight, setIsSpotlight] = React.useState(false);

  React.useEffect(() => {
    setIsSpotlight(isTimestampNew(spotlightTimestampState));
  }, [spotlightTimestampState]);

  const toggleSpotlight = async () => {
    //Check if another fetch is already running (so button cant get spammed)
    if (isSpotlightLoading) {
      return;
    }

    //Loading -> calling this function disallowed
    isSpotlightLoading = true;

    let updatedResident;
    if (!isSpotlight) {
      //If not my resident -> add to my residents
      updatedResident = await updateResident(_id, {
        spotlightTimestamp: Date.now(),
      });
    } else {
      //If my resident -> delete from my residents
      updatedResident = await updateResident(_id, {
        spotlightTimestamp: null,
      });
    }

    //If updatedResident returned something -> fetch was complete
    if (updatedResident) {
      setSpotlightTimestamp(updatedResident.spotlightTimestamp);
      resident.spotlightTimestamp = updatedResident.spotlightTimestamp;
    }

    //Not loading -> calling this function allowed
    isSpotlightLoading = false;
  };

  return (
    <div
      className={`resident-spotlight-container${
        isSpotlight ? ' resident-spotlight-container--active' : ''
      }`}
    >
      <img
        className="spotlight-vector"
        alt="a spotlight vector illustration"
        src={
          isSpotlight
            ? '/assets/img/spotlight-pop-active.svg'
            : '/assets/img/spotlight-pop.svg'
        }
      ></img>
      <div className="spotlight-text-wrapper">
        <p className="spotlight-text">
          {isSpotlight
            ? `
          ${name.split(' ')[0]} staat in
          de spotlight!
          `
            : `
          Geef ${name} meer aandacht door haar profiel bovenaan het overzicht te
          zetten.
          `}
        </p>
        {isSpotlight ? (
          <p>
            <span className="spotlight-text--underline">
              {Math.round(
                getMsUntilExpired(spotlightTimestampState) /
                  (1000 * 60 * 60 * 24)
              )}
            </span>{' '}
            dagen resterend...
          </p>
        ) : null}
        <button
          onClick={toggleSpotlight}
          className={`spotlight-btn${
            isSpotlight ? ' spotlight-btn--active' : ''
          }`}
        >
          <img
            className="spotlight-btn-star"
            alt="spotlight star icon inside button"
            src={
              isSpotlight
                ? '/assets/img/star-empty.svg'
                : '/assets/img/star-filled.svg'
            }
          ></img>
          <p
            className={`spotlight-btn-text${
              isSpotlight ? ' spotlight-btn-text--active' : ''
            }`}
          >
            {isSpotlight ? 'In de spotlight!' : 'Zet in Spotlight'}
          </p>
        </button>
      </div>
    </div>
  );
};

export default ResidentSpotlight;
