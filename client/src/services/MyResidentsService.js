const apiRoute = '/app/my-residents';

/* -------------- GET FUNCTIONS -------------- */

/* Fetching MY resident */
const fetchMyResident = async (residentId) => {
  try {
    const response = await fetch(
      process.env.REACT_APP_API_URL + apiRoute + `/${residentId}`
    );

    if (!response.ok) {
      return null;
    }

    return true;
  } catch (err) {
    console.log(err);
    return null;
  }
};

/* Fetching MY residents */
const fetchMyResidents = async (name, floor, sorting) => {
  const query = `?name=${name}&floor=${floor}&sorting=${sorting.value}`;

  try {
    const response = await fetch(
      process.env.REACT_APP_API_URL + apiRoute + query
    );
    const result = await response.json();

    if (!response.ok) {
      return null;
    }

    return result.myResidents;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export { fetchMyResident, fetchMyResidents };

/* -------------- POST FUNCTIONS -------------- */

/* Posting to MY residents */

const postMyResident = async (data) => {
  try {
    const response = await fetch(process.env.REACT_APP_API_URL + apiRoute, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    if (!response.ok) {
      return false;
    }

    return {
      newValue: true,
    };
  } catch (err) {
    console.log(err);
    return false;
  }
};

export { postMyResident };

/* -------------- PUT FUNCTIONS -------------- */

/* -------------- DELETE FUNCTIONS -------------- */

/* Delete a resident from my residents */
const deleteMyResident = async (residentId) => {
  try {
    const response = await fetch(
      process.env.REACT_APP_API_URL + apiRoute + `/${residentId}`,
      {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      }
    );

    if (!response.ok) {
      return false;
    }

    return {
      newValue: false,
    };
  } catch (err) {
    console.log(err);
    return false;
  }
};

export { deleteMyResident };
