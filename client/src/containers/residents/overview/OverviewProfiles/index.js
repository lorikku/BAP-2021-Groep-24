import * as React from 'react';

import OverviewProfile from '../../../../components/residents/overview/OverviewProfile/index.js';

import './overviewprofiles.css';

const OverviewProfiles = ({residents}) => {
  return (
    <ul className="residents-overview_profiles apply-scrollbar">
      {residents.map((resident, index) => {
        return <OverviewProfile key={index} resident={resident} />;
      })}
    </ul>
  );
};

export default OverviewProfiles;
