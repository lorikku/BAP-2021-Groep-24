import { getISODay } from 'date-fns';
import { fetchAllActivitiesByDateAndFloor } from '../../services/ActivitiesService';

const generateArrayFromActivities = async (selectedDate) => {
  const newActivities = [[], [], [], [], [], [], []];

  const activities = await fetchAllActivitiesByDateAndFloor(selectedDate);

  if (activities) {
    activities.forEach((activity) => {
      const index = getISODay(activity.startTimestamp) - 1;
      newActivities[index].push(activity);
    });
  }

  return newActivities;
};

export { generateArrayFromActivities };
