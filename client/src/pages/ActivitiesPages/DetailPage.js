import * as React from 'react';

import DetailActivityHeader from '../../containers/activities/DetailActivityHeader';
import DetailActivityPresent from '../../containers/activities/DetailActivityPresent';
import DetailActivityInterested from '../../containers/activities/DetailActivityInterested';

import GoBack from '../../components/global/GoBack';
import paths from '../../consts/paths';
import { useParams } from 'react-router-dom';
import {fetchAcitivityById} from '../../services/ActivitiesService';

const DetailPage = () => {
  const { activityId } = useParams();

  //Fetching resident single from db
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
      if (componentMounted) setActivity(fetchedActivity);
    };

    getActivity();

    return () => (componentMounted = false);
  }, [activityId, setActivity]);

  return activity ? (
    <>
      <h2 className="visually-hidden">Activteitnaam</h2>
      <div className="activities-detail fit-height flex-content">
        <GoBack path={paths.PATH_ACTIVITIES.ROOT} text={'Terug naar agenda'} />
        <DetailActivityHeader activity={activity} />
        <div className="dtl-act-present-int-container">
          <DetailActivityPresent residents={activity.participatedResidents} />
          <DetailActivityInterested residents={activity.interestedResidents} />
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
