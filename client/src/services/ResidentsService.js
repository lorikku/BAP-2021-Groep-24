import { fetchContactsByResidentId } from './ContactsService';
import { fetchInterestByResidentId } from './InterestsService';
import { fetchMyResidents } from './MyResidentsService';

const apiRoute = '/app/residents';

/* -------------- GET FUNCTIONS -------------- */

/* Fetching single resident and their interests/contacts/planned activities/ */
const fetchResident = async (residentId, isMatchingPage) => {
  let fetchedResident = undefined;

  // FETCHING RESIDENT
  try {
    const response = await fetch(
      process.env.REACT_APP_API_URL + apiRoute + `/${residentId}`
    );
    const result = await response.json();

    if (!response.ok) {
      return null;
    }

    fetchedResident = result.resident;
  } catch (err) {
    console.log(err);
    return null;
  }

  // FETCHING RESIDENT INTERESTS
  fetchedResident.interests = await fetchInterestByResidentId(residentId);

  if (!isMatchingPage) {
    // FETCHING RESIDENT CONACTS
    fetchedResident.contacts = await fetchContactsByResidentId(residentId);
  }

  return fetchedResident;
};

/* Fetching ALL residents */
const fetchResidents = async (name, floor, sorting, isMatchingPage) => {
  const query = `?name=${name}&floor=${floor}&sorting=${sorting.value}`;

  try {
    const response = await fetch(
      process.env.REACT_APP_API_URL + apiRoute + query
    );
    const result = await response.json();

    if (!response.ok) {
      return null;
    }

    const residents = result.residents;

    if (!isMatchingPage) {
      //Checking which resident is seen as 'my resident' (for coloring the heart)
      //NOT USED ON MATCHING PAGE!
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
      process.env.REACT_APP_API_URL + apiRoute + `/${residentId}`,
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

/* Update one resident */
const deleteContactFromResident = async (residentId, contactId) => {
  try {
    const response = await fetch(
      process.env.REACT_APP_API_URL +
        apiRoute +
        `/${residentId}` +
        `/contacts/${contactId}`,
      {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      }
    );
    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      return false;
    }

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export { deleteContactFromResident };
