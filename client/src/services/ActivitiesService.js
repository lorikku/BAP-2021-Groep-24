function convertTimeToNumb(duration) {
  const hours = parseInt(duration.split(':')[0]);
  const minutes = parseInt(duration.split(':')[1]);
  return [hours, minutes];
}

const apiRoute = process.env.REACT_APP_API_URL + '/app/activities';

/* -------------- GET FUNCTIONS -------------- */

const fetchAllActivitiesByDateAndFloor = async (
  selectedDate = new Date(),
  floor = 'all'
) => {
  try {
    const response = await fetch(
      apiRoute + `?selectedDate=${selectedDate.getTime()}&floor=${floor}`
    );

    if (!response.ok) {
      return null;
    }

    const result = await response.json();

    return result.activities;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const fetchAcitivityById = async (activityId) => {
  try {
    const response = await fetch(apiRoute + `/${activityId}`);

    if (!response.ok) {
      return null;
    }

    const result = await response.json();

    return result.activity;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export { fetchAllActivitiesByDateAndFloor, fetchAcitivityById };

/* -------------- POST FUNCTIONS -------------- */

const postActivity = async (data) => {
  //Extract all inputs
  const { title, location, floor, date, startTime, endTime, interests } = data;

  //Setting the start date (adding the hours)
  const startDate = new Date(date);
  startDate.setHours(...convertTimeToNumb(startTime));
  const startTimestamp = startDate.getTime();

  //Setting the end date (adding the hours)
  const endDate = new Date(date);
  endDate.setHours(...convertTimeToNumb(endTime));
  const endTimestamp = endDate.getTime();

  //Preparing activity object (for posting)
  const activity = {
    title,
    location,
    floor: floor.toString(),
    startTimestamp,
    endTimestamp,
    hasCalculated: false,
    interests,
    participatedResidents: [],
    interestedResidents: [],
  };

  try {
    const response = await fetch(apiRoute, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(activity), // body data type must match "Content-Type" header
    });

    if (!response.ok) {
      return false;
    }

    const result = await response.json();

    return result.activityId;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export { postActivity };
