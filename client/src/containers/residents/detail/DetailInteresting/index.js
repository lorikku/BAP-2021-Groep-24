import * as React from 'react';
import ActivityInteresting from '../../../../components/residents/detail/ActivityInteresting';
import {fetchInterestingActivitiesByResidentId} from '../../../../services/ResidentsService/ActivitiesService';
import './detailinteresting.css';

const DetailInteresting = ({
  resident,
  activities,
  setInterestingActivities,
  setParticipatingActivities,
}) => {

  /* ------------- ACTIVITIES FETCHING ------------- */

  React.useEffect(() => {
    let componentMounted = true;

    const fetchActivities = async () => {
      const fetchedActivities = await fetchInterestingActivitiesByResidentId(
        resident._id
      );

      if (componentMounted) setInterestingActivities(fetchedActivities);
    };

    fetchActivities();

    return () => (componentMounted = false);
  }, [resident._id, setInterestingActivities]);

  return (
    <>
      <h2 className="visually-hidden">Wellicht interessante activiteiten</h2>
      <div className="detailresident-interesting">
        <p className="detailresident-interesting-title">
          Wellicht interessant voor {resident.name}
        </p>
        <ul className="interesting-list">
          {/* interesting-activity component */}
          {activities.map((activity, index) => (
            <ActivityInteresting
              key={index}
              activity={activity}
              resident={resident}
              setInterestingActivities={setInterestingActivities}
              setParticipatingActivities={setParticipatingActivities}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default DetailInteresting;
