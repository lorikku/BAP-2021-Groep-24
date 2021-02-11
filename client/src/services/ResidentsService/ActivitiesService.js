import {apiUrl} from "../../global/states";

const apiRoute = apiUrl + 'app/residents';

/* -------------- GET FUNCTIONS -------------- */

const fetchParticipatingActivitiesByResidentId = async (residentId, isBeforeDate) => {
  let query = '?';

  //If date chosen was before date, get all activities before today (passed), else get all in future
  const timestamp = Date.now();
  if (isBeforeDate) {
    query += `&beforeDate=${timestamp}`;
  } else {
    query += `&afterDate=${timestamp}`;
  }

  try {
    const response = await fetch(
      apiRoute + `/${residentId}/activities` + query
    );

    if (!response.ok) {
      return null;
    }

    const result = await response.json();

    return result.activities;
  } catch (err) {
    
    return null;
  }
};

const fetchInterestingActivitiesByResidentId = async (residentId) => {
  //Get today's date
  const timestamp = Date.now();

  try {
    const response = await fetch(
      apiRoute + `/${residentId}/activities?afterDate=${timestamp}&fetchInteresting=true`
    );

    if (!response.ok) {
      return null;
    }

    const result = await response.json();

    return result.activities;
  } catch (err) {
    
    return null;
  }
};

export { fetchParticipatingActivitiesByResidentId, fetchInterestingActivitiesByResidentId };
