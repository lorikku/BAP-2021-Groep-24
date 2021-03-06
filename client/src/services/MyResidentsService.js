import {apiUrl} from "../global/states";

const apiRoute = apiUrl + 'app/my-residents';

/* -------------- GET FUNCTIONS -------------- */

/* Fetching MY resident */
const myResidentExists = async (residentId) => {
  try {
    const response = await fetch(apiRoute + `/${residentId}`);

    if (!response.ok) {
      return false;
    }

    const result = await response.json();

    //Does exist, yes or no
    return result.found;
  } catch (err) {
    
    return false;
  }
};

/* Fetching MY residents */
const fetchMyResidents = async (name, floor, sorting) => {
  const query = `?name=${name}&floor=${floor}&sorting=${sorting.value}`;

  try {
    const response = await fetch(apiRoute + query);
    const result = await response.json();

    if (!response.ok) {
      return null;
    }

    if(result.myResidents.length === 0) {
      return null;
    } else {
      return result.myResidents;
    }
  } catch (err) {
    
    return null;
  }
};

export { myResidentExists, fetchMyResidents };

/* -------------- POST FUNCTIONS -------------- */

/* Posting to MY residents */

const postMyResident = async (resident) => {
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

    return {
      newValue: true,
    };
  } catch (err) {
    
    return false;
  }
};

export { postMyResident };

/* -------------- PUT FUNCTIONS -------------- */

/* -------------- DELETE FUNCTIONS -------------- */

/* Delete a resident from my residents */
const deleteMyResident = async (residentId) => {
  try {
    const response = await fetch(apiRoute + `/${residentId}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    });

    if (!response.ok) {
      return false;
    }

    return {
      newValue: false,
    };
  } catch (err) {
    
    return false;
  }
};

export { deleteMyResident };
