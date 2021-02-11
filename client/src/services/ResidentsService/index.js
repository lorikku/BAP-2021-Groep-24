import { fetchContactsByResidentId } from './ContactsService';
import { fetchInterestByResidentId } from './InterestsService';
import { fetchMyResidents } from '../MyResidentsService';

const apiRoute = process.env.REACT_APP_API_URL + '/app/residents';

/* -------------- GET FUNCTIONS -------------- */

/* Fetching single resident and their interests/contacts/planned activities/ */
const fetchResidentById = async (residentId, noContacts) => {
  let fetchedResident = undefined;

  // FETCHING RESIDENT
  try {
    const response = await fetch(apiRoute + `/${residentId}`);
    const result = await response.json();

    if (!response.ok) {
      return null;
    }

    fetchedResident = result.resident;
  } catch (err) {
    
    return null;
  }

  // FETCHING RESIDENT INTERESTS
  fetchedResident.interests = await fetchInterestByResidentId(residentId);

  if (!noContacts) {
    // FETCHING RESIDENT CONACTS
    fetchedResident.contacts = await fetchContactsByResidentId(residentId);
  }

  return fetchedResident;
};

/* Fetching ALL residents */
const fetchResidents = async (name, floor, sorting, isMatchingPage) => {
  const query = `?name=${name}&floor=${floor}&sorting=${sorting.value}`;

  try {
    const response = await fetch(apiRoute + query);
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
    
    return null;
  }
};

export { fetchResidents, fetchResidentById };

/* -------------- POST FUNCTIONS -------------- */

const postNewResident = async (resident) => {
  try {
    const response = await fetch(apiRoute, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(resident), // body data type must match "Content-Type" header
    });

    if (!response.ok) {
      return false;
    }

    const result = await response.json();

    return result.residentId;
  } catch (err) {
    
    return false;
  }
}

export {postNewResident}

/* -------------- PUT FUNCTIONS -------------- */

/* Update one resident */
const updateResident = async (residentId, payload) => {
  try {
    const response = await fetch(apiRoute + `/${residentId}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload), // body data type must match "Content-Type" header
    });
    const result = await response.json();

    if (!response.ok) {
      return false;
    }

    return result.newResident;
  } catch (err) {
    
    return false;
  }
};

export { updateResident };

/* -------------- DELETE FUNCTIONS -------------- */
