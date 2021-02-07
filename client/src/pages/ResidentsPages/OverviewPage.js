import * as React from 'react';

import ResidentsFilter from '../../containers/residents/ResidentsFilter';
import OverviewProfiles from '../../containers/residents/overview/OverviewProfiles';

const OverviewPage = ({isMatchingPage}) => {
  const [residents, setResidents] = React.useState(undefined);

  return (
    <>
      <h2 className="visually-hidden">Overzicht bewoners</h2>
      <div className="residents-overview fit-height flex-content">
        <ResidentsFilter setResidents={setResidents} isMatchingPage={isMatchingPage}/>
        <OverviewProfiles residents={residents} isMatchingPage={isMatchingPage}/>
      </div>
    </>
  );
};

export default OverviewPage;
