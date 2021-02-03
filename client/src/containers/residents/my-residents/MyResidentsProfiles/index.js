import * as React from 'react';

import MyResidentProfile from '../../../../components/residents/my-residents/MyResidentsProfile/index.js';

import './myresidentsprofiles.css';

const MyResidentsProfiles = ({ residents }) => {
  return residents ? (
    <ul className="residents-myresidents__profiles">
      {residents.map((resident, index) => {
        return <MyResidentProfile key={index} resident={resident} />;
      })}
    </ul>
  ) : residents === null ? (
    <p className="notification">Er werden geen bewoners gevonden met jouw zoekopties</p>
  ) : (
    <p className="notification">Mijn bewoners ophalen...</p>
  );
};

export default MyResidentsProfiles;
