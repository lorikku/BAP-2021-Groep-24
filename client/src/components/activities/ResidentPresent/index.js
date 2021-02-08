import * as React from 'react';
import { Link } from 'react-router-dom';
import paths from '../../../consts/paths';
import './residentpresent.css';

const ResidentPresent = ({ resident }) => {
  const { _id, name, roomNr, photoUri } = resident;
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
