import * as React from 'react';

import OverviewProfile from '../../../../components/residents/overview/OverviewProfile/index.js';

import './overviewprofiles.css';

const OverviewProfiles = ({ residents }) => {
  return residents ? (
    <ul className="residents-overview_profiles apply-scrollbar">
      {residents.map((resident, index) => {
        return <OverviewProfile key={index} resident={resident} />;
      })}
    </ul>
  ) : residents === null ? (
    <p className="notification">Er werden geen bewoners gevonden met jouw zoekopties</p>
  ) : (
    <p className="notification">Bewoners ophalen...</p>
  );
};

export default OverviewProfiles;
