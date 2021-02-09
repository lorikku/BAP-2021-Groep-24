import * as React from 'react';
import { Link } from 'react-router-dom';

import paths from '../../../consts/paths';
import {deleteInterestedResidentFromActivity, postParticipatedResident} from '../../../services/ActivitiesService.js';

import './residentinterested.css';

const ResidentInterested = ({ resident, activityId, setInterestedResidents, setParticipatedResidents }) => {
  const { _id, name, roomNr, photoUri } = resident;

  let residentDeleting = false;
  const deleteCurrentResident = async (paramId) => {
    //If resident is deleting (request already made) -> ignore
    if (residentDeleting) return;

    residentDeleting = true;

    const succes = await deleteInterestedResidentFromActivity(activityId, paramId);

    if (succes) {
      setInterestedResidents((prevState) => {
        const newInterestedResidents = [...prevState];

        const index = newInterestedResidents.findIndex(
          (resident) => resident._id === paramId
        );

        newInterestedResidents.splice(index, 1);
        return newInterestedResidents;
      });
    }

    residentDeleting = false;
  };

  let residentAdding;
  const addResidentToGoing = async (paramId, paramResident) => {
    //If resident is being added (request already made) -> ignore
    if (residentAdding) return;
    
    residentAdding = true;

    const succes = await postParticipatedResident(activityId, paramResident)

    if (succes) {
      await deleteCurrentResident(paramId);
      setParticipatedResidents((prevState) => {
        const newParticipatedResidents = [...prevState];

        newParticipatedResidents.unshift(resident);
        return newParticipatedResidents;
      });
    }

    residentAdding = false;

  }

  return (
    <li className="int-container">
      <Link to={paths.PATH_RESIDENTS.ROOT + `/${_id}`} className="int-top-half">
        <img
          className="int-pic"
          alt="fototje van intpersoon"
          src={photoUri ? photoUri : '/assets/img/emptystate-profile.svg'}
        ></img>
        <div className="int-info-wrapper">
          <p className="int-name">{name}</p>
          <div className="int-type">
            <p className="int-type-text">Kamer {roomNr}</p>
          </div>
        </div>
      </Link>
      <div className="int-yes-no-container">
        <div onClick={() => addResidentToGoing(_id, resident)} className="int-yes">
          <img
            className="int-yes-icon"
            alt="checkmark in cirkel"
            src="/assets/img/check-circle-white.svg"
          ></img>
          <p className="int-yes-text white">Aanwezig</p>
        </div>
        <div onClick={() => deleteCurrentResident(_id)} className="int-no">
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
