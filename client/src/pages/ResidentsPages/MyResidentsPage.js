import * as React from 'react';

import ResidentsFilter from '../../containers/residents/ResidentsFilter';
import MyResidentsProfiles from '../../containers/residents/my-residents/MyResidentsProfiles';

const MyResidentsPage = () => {
  const [residents, setResidents] = React.useState(undefined);
  return (
    <>
      <h2 className="visually-hidden">Mijn bewoners</h2>
      <div className="residents-myresidents fit-height flex-content">
        <ResidentsFilter setResidents={setResidents} isMyResidentsPage/>
        <MyResidentsProfiles residents={residents} />
      </div>
    </>
  );
};

export default MyResidentsPage;
