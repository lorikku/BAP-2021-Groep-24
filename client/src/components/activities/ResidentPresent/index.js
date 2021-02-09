import * as React from 'react';
import { Link } from 'react-router-dom';
import paths from '../../../consts/paths';
import {deleteParticipatedResidentFromActivity} from '../../../services/ActivitiesService';
import './residentpresent.css';

const ResidentPresent = ({ resident, activityId, setParticipatedResidents }) => {
  const { _id, name, roomNr, photoUri } = resident;

  let residentDeleting = false;
  const deleteCurrentResident = async () => {
    //If resident is deleting (request already made) -> ignore
    if (residentDeleting) return;

    residentDeleting = true;

    const succes = await deleteParticipatedResidentFromActivity(activityId, _id);

    if (succes) {
      setParticipatedResidents((prevState) => {
        const newParticipatedResidents = [...prevState];

        const index = newParticipatedResidents.findIndex(
          (resident) => resident._id === _id
        );

        newParticipatedResidents.splice(index, 1);
        return newParticipatedResidents;
      });
    }

    residentDeleting = false;
  };

  return (
    <li className="present-container">
      <Link
        to={paths.PATH_RESIDENTS.ROOT + `/${_id}`}
        className="present-container--wrapper"
      >
        <img
          className="present-pic"
          alt="fototje van presentpersoon"
          src={photoUri ? photoUri : '/assets/img/emptystate-profile.svg'}
        ></img>
        <div className="present-info-wrapper">
          <p className="present-name">{name}</p>
          <div className="present-type">
            <p className="present-type-text">Kamer {roomNr}</p>
          </div>
        </div>
      </Link>
      <div onClick={deleteCurrentResident} className="present-info-btn">
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
