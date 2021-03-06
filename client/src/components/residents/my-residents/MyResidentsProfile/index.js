import * as React from 'react';
import { Link } from 'react-router-dom';

import './myresidentsprofile.css';

const MyResidentsProfile = ({ resident }) => {
  const { _id, roomNr, photoUri, isPermanent, name } = resident;
  return (
    <li className="residents-myresidents__profiles__profile">
      <Link className="residents-myresidents__profiles__link" to={_id + '/general'}>
        <div className="residents-myresidents__profiles__profilewrapper">
          <p className="residents-myresidents__profiles__roomnr">
            {'Kamer ' + roomNr}
          </p>
          <p className="visually-hidden" />
        </div>
        <img
          className="residents-myresidents__profiles__img"
          src={photoUri ? photoUri : '/assets/img/emptystate-profile.svg'}
          alt={`Foto van ${name}.`}
        />
        <p className="residents-myresidents__profiles__name">{name}</p>
        <p className="residents-myresidents__profiles__ispermanent">
          {isPermanent ? 'Vast verblijver' : 'Kort verblijver'}
        </p>
      </Link>
    </li>
  );
};

export default MyResidentsProfile;
