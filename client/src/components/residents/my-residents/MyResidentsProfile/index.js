import * as React from 'react';
import { Link } from 'react-router-dom';

import './myresidentsprofile.css';

const MyResidentsProfile = ({ isSpacer, resident }) => {
  const { id, roomNr, photoUri, isPermanent, name } = resident;
  return (
    <Link className="residents-myresidents__profiles__profile" to={id}>
      <div className="residents-myresidents__profiles__profilewrapper">
        <p className="residents-myresidents__profiles__roomnr">
          {'Kamer ' + roomNr}
        </p>
        <p className="visually-hidden" />
      </div>
      <img
        className="residents-myresidents__profiles__img"
        src={photoUri}
        alt={`Foto van ${name}.`}
      />
      <p className="residents-myresidents__profiles__name">{name}</p>
      <p className="residents-myresidents__profiles__ispermanent">
        {isPermanent ? 'Vast verblijver' : 'Kort verblijver'}
      </p>
    </Link>
  );
};

export default MyResidentsProfile;
