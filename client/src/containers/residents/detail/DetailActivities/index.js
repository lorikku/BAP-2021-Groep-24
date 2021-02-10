import * as React from 'react';
import ToggleBtn from '../../../../components/global/ToggleBtn';
import ActivitySmall from '../../../../components/residents/detail/ActivitySmall';
import { fetchParticipatingActivitiesByResidentId } from '../../../../services/ResidentsService/ActivitiesService';
import './detailactivities.css';

const DetailActivities = ({
  resident,
  activities,
  setParticipatingActivities,
}) => {
  const { _id, name } = resident;

  /* ------------- FILTER OPTION ------------- */
  //Filter for selecting 'future' or 'passed' activities
  const [filter, setFilter] = React.useState({
    option1: {
      text: 'Gepland',
      isActive: true,
    },
    option2: {
      text: 'Afgelopen',
      isActive: false,
    },
  });

  const setOption = (option) => {
    setFilter((prevState) => {
      const newFilter = Object.assign({}, prevState);

      //Reset actives
      newFilter.option1.isActive = false;
      newFilter.option2.isActive = false;

      //Set new active
      newFilter[option].isActive = true;

      return newFilter;
    });
  };

  /* ------------- ACTIVITIES FETCHING ------------- */

  React.useEffect(() => {
    let componentMounted = true;

    const fetchActivities = async () => {
      let fetchedActivities;
      if (filter.option2.isActive) {
        fetchedActivities = await fetchParticipatingActivitiesByResidentId(
          _id,
          true
        );
      } else {
        fetchedActivities = await fetchParticipatingActivitiesByResidentId(
          _id,
          false
        );
      }

      if (componentMounted) setParticipatingActivities(fetchedActivities);
    };

    fetchActivities();

    return () => (componentMounted = false);
  }, [_id, filter, setParticipatingActivities]);

  return (
    <>
      <h2 className="visually-hidden">Activiteiten bewoner</h2>
      <div className="detailresident-activities">
        <p className="detailresident-activities-title">
          {name.split(' ')[0]}'s Activiteiten
        </p>
        <ToggleBtn
          setOption={setOption}
          option1={filter.option1}
          option2={filter.option2}
        />

        <ul className="activities-list">
          {activities.map((activity, index) => (
            <ActivitySmall key={index} activity={activity} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default DetailActivities;
