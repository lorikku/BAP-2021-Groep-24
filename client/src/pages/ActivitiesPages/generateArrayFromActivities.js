import { getISODay } from 'date-fns';
import { fetchAllActivitiesByDateAndFloor } from '../../services/ActivitiesService';

const generateArrayFromActivities = async (selectedDate) => {
  const newActivities = [[], [], [], [], [], [], []]; // 7 days (1 week)

  const activities = await fetchAllActivitiesByDateAndFloor(selectedDate);

  if (activities) {
    activities.forEach((activity) => {
      const index = getISODay(activity.startTimestamp) - 1; //getISOday (returns 1 -> 7) - index (returns 0 -> 6)
      newActivities[index].push(activity);
    });
  }

  return newActivities;
};

export { generateArrayFromActivities };
