import * as React from 'react';
import { useParams } from 'react-router-dom';

import DetailActivities from '../../containers/residents/detail/DetailActivities';
import DetailInteresting from '../../containers/residents/detail/DetailInteresting';

import { fetchParticipatingActivitiesByResidentId } from '../../services/ResidentsService/ActivitiesService';

import SubNav from '../../containers/residents/SubNav';

const DetailPlanningPage = ({ navItems, resident }) => {
  const { _id } = resident;

  /* ------------ ACTIVITIES STATES ------------ */

  const [participatingActivities, setParticipatingActivities] = React.useState(
    []
  );

  const [interestingActivities, setInterestingActivities] = React.useState([]);

  /* ------------ ACTIIVTIES HANDLER ------------ */

  const [activitiesLoaded, setActivitiesLoaded] = React.useState(false);

  React.useEffect(() => {
    //Re-render after previous states have been set
    setActivitiesLoaded(true)
  }, [setActivitiesLoaded]);

  return (
    <>
      <h2 className="visually-hidden">
        Informatie over planning van een bewoner
      </h2>
      <div className="residents-detailresident fit-height">
        <SubNav navItems={navItems} />
        {activitiesLoaded ? (
          <div className="detailresident-personal-planning fit-height">
            <DetailActivities
              resident={resident}
              activities={participatingActivities}
              setParticipatingActivities={setParticipatingActivities}
            />
            <DetailInteresting
              resident={resident}
              activities={interestingActivities}
              setInterestingActivities={setInterestingActivities}
              setParticipatingActivities={setParticipatingActivities}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default DetailPlanningPage;
