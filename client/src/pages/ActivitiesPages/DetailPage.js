import * as React from 'react';

import DetailActivityHeader from '../../containers/activities/DetailActivityHeader';
import DetailActivityPresent from '../../containers/activities/DetailActivityPresent';
import DetailActivityInterested from '../../containers/activities/DetailActivityInterested';

import GoBack from '../../components/global/GoBack';
import paths from '../../consts/paths';
import { useParams } from 'react-router-dom';
import { fetchAcitivityById } from '../../services/ActivitiesService';

const DetailPage = () => {
  const { activityId } = useParams();

  /* ------------ PARTICIPATED RESIDENTS HANDLER ------------ */

  const [participatedResidents, setParticipatedResidents] = React.useState([]);

  /* ------------ INTERESTED RESIDENTS HANDLER ------------ */

  const [interestedResidents, setInterestedResidents] = React.useState([]);

  /* ------------ FETCHING ACTIVITY FROM DB ------------ */
  const [activity, setActivity] = React.useState(undefined);

  React.useEffect(() => {
    let componentMounted = true;

    if (!activityId) {
      setActivity(null);
      return;
    }

    if (componentMounted) setActivity(undefined);

    const getActivity = async () => {
      const fetchedActivity = await fetchAcitivityById(activityId);
      //Setting local activity
      if (componentMounted) setActivity(fetchedActivity);
      //Setting local participatedResidents
      if (componentMounted)
        setParticipatedResidents(fetchedActivity.participatedResidents);
        //Setting local interestedResidents
      if (componentMounted)
        setInterestedResidents(fetchedActivity.interestedResidents);
    };

    getActivity();

    return () => (componentMounted = false);
  }, [
    activityId,
    setActivity,
    setParticipatedResidents,
    setInterestedResidents,
  ]);

  return activity ? (
    <>
      <h2 className="visually-hidden">Activteitnaam</h2>
      <div className="activities-detail fit-height flex-content">
        <GoBack path={paths.PATH_ACTIVITIES.ROOT} text={'Terug naar agenda'} />
        <DetailActivityHeader activity={activity} />
        <div className="dtl-act-present-int-container">
          <DetailActivityPresent
            activity={activity}
            participatedResidents={participatedResidents}
            setParticipatedResidents={setParticipatedResidents}
            setInterestedResidents={setInterestedResidents}
          />
          <DetailActivityInterested
            activity={activity}
            setActivity={setActivity}
            interestedResidents={interestedResidents}
            setInterestedResidents={setInterestedResidents}
            setParticipatedResidents={setParticipatedResidents}
          />
        </div>
      </div>
    </>
  ) : activity === null ? (
    <p className="notification">
      Er werd geen activiteit gevonden met deze identificatiecode
    </p>
  ) : (
    <p className="notification">Bewoner ophalen...</p>
  );
};

export default DetailPage;
