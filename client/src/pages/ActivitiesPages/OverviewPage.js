import * as React from 'react';

import OverviewAllActivities from '../../containers/activities/OverviewAllActivities';
import OverviewHeader from '../../containers/activities/OverviewHeader';

const OverviewPage = () => {
  return (
    <>
      <h2 className="visually-hidden">Activiteiten</h2>
      <div className="activities-overview fit-height flex-content">
        <OverviewHeader />
        <OverviewAllActivities />
      </div>
    </>
  );
};

export default OverviewPage;
