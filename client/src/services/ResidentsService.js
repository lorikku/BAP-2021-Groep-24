/* -------------- GET FUNCTIONS -------------- */

/* Fetching MY residents */
const fetchMyResidents = async (name, floor, sorting) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/staff/my-residents?name=${name}&floor=${floor}&sorting=${sorting.value}`
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

/* Fetching ALL residents */
const fetchResidents = async (name, floor, sorting) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/app/residents?name=${name}&floor=${floor}&sorting=${sorting.value}`
    );
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

/* Fetching single resident and their interests/contacts */
const fetchResident = async (residentId) => {
  let fetchedResident = undefined;

  // FETCHING RESIDENT
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/app/residents/${residentId}`
    );
    const result = await response.json();

    if (!response.ok) {
      fetchedResident = null;
      return;
    }

    fetchedResident = result.resident;
  } catch (err) {
    fetchedResident = null;
    console.log(err);
  }

  // FETCHING RESIDENT INTERESTS
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/app/residents/${residentId}/interests`
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
      `${process.env.REACT_APP_API_URL}/app/residents/${residentId}/contacts`
    );
    const result = await response.json();

    fetchedResident.contacts = result.contacts;
  } catch (err) {
    fetchedResident.contacts = null;
    console.log(err);
  }

  return fetchedResident;
};

export { fetchResidents, fetchMyResidents, fetchResident };

/* -------------- POST FUNCTIONS -------------- */

/* Posting to MY residents */

const postMyResident = async (data) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/staff/my-residents`,
      {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      }
    );


    if (!response.ok) {
      return false;
    }

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const deleteMyResident = async (_id) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/staff/my-residents/${_id}`,
      {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      }
    );
    const result = await response.json();

    if (!response.ok) {
      return false;
    }

    return result;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export { postMyResident, deleteMyResident };
