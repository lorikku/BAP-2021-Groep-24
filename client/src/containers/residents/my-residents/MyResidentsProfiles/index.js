import * as React from 'react';

import MyResidentProfile from '../../../../components/residents/my-residents/MyResidentsProfile/index.js';

import './myresidentsprofiles.css';

const MyResidentsProfiles = ({residents}) => {
  return (
    <ul className="residents-myresidents__profiles">
      {residents.map((resident, index) => {
        return <MyResidentProfile key={index} resident={resident} />;
      })}
    </ul>
  );
};

export default MyResidentsProfiles;
