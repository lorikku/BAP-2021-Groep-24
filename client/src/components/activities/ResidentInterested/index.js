import * as React from 'react';
import { Link } from 'react-router-dom';

import paths from '../../../consts/paths';

import './residentinterested.css';

const ResidentInterested = ({ resident }) => {
  const { _id, name, roomNr, photoUri } = resident;
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
        <div className="int-yes">
          <img
            className="int-yes-icon"
            alt="checkmark in cirkel"
            src="/assets/img/check-circle-white.svg"
          ></img>
          <p className="int-yes-text white">Aanwezig</p>
        </div>
        <div className="int-no">
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
