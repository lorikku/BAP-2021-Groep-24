import * as React from 'react';
import { addWeeks, getDay, getWeek, startOfWeek } from 'date-fns';

import OverviewAllActivities from '../../containers/activities/OverviewAllActivities';
import OverviewHeader from '../../containers/activities/OverviewHeader';
import { generateArrayFromActivities } from './generateArrayFromActivities';

const OverviewPage = () => {
  //Date handler (cycling through weeks n such)
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
    let componentLoaded = true;

    if(componentLoaded) setActivitiesPerDay(null);

    let fetchedActivities;
    const fetchActivities = async () => {
      fetchedActivities = await generateArrayFromActivities(selectedDate);
      if (componentLoaded) setActivitiesPerDay(fetchedActivities);
    };
    fetchActivities();
  }, [selectedDate]);

  return (
    <>
      <h2 className="visually-hidden">Activiteiten</h2>
      <div className="activities-overview fit-height flex-content">
        <OverviewHeader selectedDate={selectedDate} changeWeek={changeWeek} />
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
