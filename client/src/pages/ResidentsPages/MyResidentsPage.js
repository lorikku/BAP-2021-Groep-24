import * as React from 'react';

import ResidentsFilter from '../../containers/residents/ResidentsFilter';
import MyResidentsProfiles from '../../containers/residents/my-residents/MyResidentsProfiles';

const MyResidentsPage = () => {
  return (
    <>
      <h2 className="visually-hidden">Overzicht bewoners</h2>
      <div className="residents-overview">
        <ResidentsFilter />
        <MyResidentsProfiles />
      </div>
    </>
  );
};

export default MyResidentsPage;
