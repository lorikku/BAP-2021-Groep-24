import { fetchMyResidents } from './MyResidentsService';

const apiRoute = '/app/residents/';

/* -------------- GET FUNCTIONS -------------- */

/* Fetching single resident and their interests/contacts */
const fetchResident = async (residentId) => {
  let fetchedResident = undefined;

  // FETCHING RESIDENT
  try {
    const response = await fetch(
      process.env.REACT_APP_API_URL + apiRoute + residentId
    );
    const result = await response.json();

    if (!response.ok) {
      return null;
      return;
    }

    fetchedResident = result.resident;
  } catch (err) {
    console.log(err);
    return null;
  }

  // FETCHING RESIDENT INTERESTS
  try {
    const response = await fetch(
      process.env.REACT_APP_API_URL + apiRoute + residentId + '/interests'
    );
    const result = await response.json();

    fetchedResident.interests = result.interests;
  } catch (err) {
    fetchedResident.interests = null;
    console.log(err);
  }

  // FETCHING RESIDENT CONACTS
  try {
    const response = await fetch(
      process.env.REACT_APP_API_URL + apiRoute + residentId + '/contacts'
    );
    const result = await response.json();

    fetchedResident.contacts = result.contacts;
  } catch (err) {
    fetchedResident.contacts = null;
    console.log(err);
  }

  return fetchedResident;
};

/* Fetching ALL residents */
const fetchResidents = async (name, floor, sorting) => {
  const query = `?name=${name}&floor=${floor}&sorting=${sorting.value}`;

  try {
    const response = await fetch(process.env.REACT_APP_API_URL + apiRoute + query);
    const result = await response.json();

    if (!response.ok) {
      return null;
    }

    const residents = result.residents;

    //Checking which resident is seen as 'my resident' (for coloring the heart)
    const myResidents = await fetchMyResidents(name, floor, sorting);
    if (myResidents) {
      if (myResidents.length > 0) {
        myResidents.forEach((myResident) => {
          //If myResident was found in residents overview -> isMyResident = true -> color heart
          const resident = residents.find(
            (resident) => myResident._id === resident._id
          );
          if (resident) resident.isMyResident = true;
        });
      }
    }

    return residents;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export { fetchResidents, fetchResident };

/* -------------- POST FUNCTIONS -------------- */

/* -------------- PUT FUNCTIONS -------------- */

/* Update one resident */
const updateResident = async (residentId, data) => {
  try {
    const response = await fetch(
      process.env.REACT_APP_API_URL + apiRoute + residentId,
      {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      }
    );
    const result = await response.json();

    if (!response.ok) {
      return false;
    }

    return result.newResident;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export { updateResident };

/* -------------- DELETE FUNCTIONS -------------- */
