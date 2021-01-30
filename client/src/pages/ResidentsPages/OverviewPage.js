import * as React from 'react';

import ResidentsFilter from '../../containers/residents/ResidentsFilter';
import OverviewProfiles from '../../containers/residents/overview/OverviewProfiles';

const OverviewPage = () => {
  const [residents, setResidents] = React.useState(undefined);

  return (
    <>
      <h2 className="visually-hidden">Overzicht bewoners</h2>
      <div className="residents-overview fit-height flex-content">
        <ResidentsFilter setResidents={setResidents} />
        <OverviewProfiles residents={residents} />
      </div>
    </>
  );
};

export default OverviewPage;
