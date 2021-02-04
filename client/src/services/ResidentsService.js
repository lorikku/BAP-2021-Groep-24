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

    const myResidents = await fetchMyResidents(name, floor, sorting);
    if (myResidents) {
      if (myResidents.length > 0) {
        myResidents.forEach((myResident) => {
          const resident = residents.find(
            (resident) => myResident._id === resident._id
          );
          resident.isMyResident = true;
        });
      }
    }

    return residents;
  } catch (err) {
    console.log(err);
    return null;
  }
};

/* FETCHING SINGLE RESIDENT AND HIS INTERESTS/CONTACTS */
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

  // FETCHING RESIDENT INTEREST
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
