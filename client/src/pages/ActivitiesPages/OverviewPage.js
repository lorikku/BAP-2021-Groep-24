import * as React from 'react';
import { addWeeks, getDay, getWeek, startOfWeek } from 'date-fns';

import OverviewAllActivities from '../../containers/activities/OverviewAllActivities';
import OverviewHeader from '../../containers/activities/OverviewHeader';
import { generateArrayFromActivities } from './generateArrayFromActivities';
import { floorOptions } from '../../containers/residents/ResidentsFilter/filterOptions';
import FloorInput from '../../components/global/FloorInput';
import { Link } from 'react-router-dom';
import paths from '../../consts/paths';

const OverviewPage = () => {
  //Date handler (cycling through weeks n such)
  const [floor, setFloor] = React.useState(floorOptions[0]);
  const [selectedDate, setSelectedDate] = React.useState(new Date()); //Setting today's date as initial value

  const changeWeek = React.useCallback((action) => {
    switch (action) {
      case 'next':
        setSelectedDate((prevDate) => addWeeks(prevDate, 1));
        break;

      case 'current':
        setSelectedDate(new Date());
        break;

      case 'prev':
        setSelectedDate((prevDate) => addWeeks(prevDate, -1));
        break;

      default:
        setSelectedDate(new Date());
        break;
    }
  }, []);

  const [activitiesPerDay, setActivitiesPerDay] = React.useState(null);

  React.useEffect(() => {
    if (!selectedDate) return;
    let componentMounted = true;

    if (componentMounted) setActivitiesPerDay(null);

    let fetchedActivities;
    const fetchActivities = async () => {
      fetchedActivities = await generateArrayFromActivities(
        selectedDate,
        floor
      );
      if (componentMounted) setActivitiesPerDay(fetchedActivities);
    };
    fetchActivities();
  }, [floor, selectedDate]);

  return (
    <>
      <h2 className="visually-hidden">Activiteiten</h2>
      <div className="activities-overview fit-height flex-content">
        <OverviewHeader selectedDate={selectedDate} changeWeek={changeWeek} />
        <div className="all-activities-filter">
          <Link
            to={paths.PATH_ACTIVITIES.ROOT + paths.PATH_ACTIVITIES.NEW_ACTIVITY}
            className="all-activities-btn"
          >
            <img
              className="all-activities-add-vector"
              alt="plusje"
              src="/assets/img/plus-white.svg"
            ></img>
            <p>Nieuwe activiteit</p>
          </Link>
          <FloorInput
            options={floorOptions}
            floor={floor}
            setFloor={setFloor}
            isActivityOverviewPage
          />
        </div>
        {activitiesPerDay ? (
          <OverviewAllActivities
            activitiesPerDay={activitiesPerDay}
            selectedDate={selectedDate}
            changeWeek={changeWeek}
          />
        ) : (
          <p className="notification">Activiteiten ophalen...</p>
        )}
      </div>
    </>
  );
};

export default OverviewPage;
