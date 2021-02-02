/* FETCHING SINGLE RESIDENT AND HIS INTERESTS/CONTACTS */
const fetchResident = async (residentId, setResident) => {
  setResident(undefined);
  let fetchedResident = undefined;

  // FETCHING RESIDENT
  try {
    const response = await fetch(
      `http://localhost:3001/app/residents/${residentId}`
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
      `http://localhost:3001/app/residents/${residentId}/interests`
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
      `http://localhost:3001/app/residents/${residentId}/contacts`
    );
    const result = await response.json();

    fetchedResident.contacts = result.contacts;
  } catch (err) {
    fetchedResident.contacts = null;
    console.log(err);
  }

  setResident(fetchedResident);
};

/* GETTING PAGES FOR RESIDENTS */
const getPagesObj = (paths) => {
    return {
        OVERVIEW: {
          text: 'alle bewoners',
          path: () => paths.ROOT + paths.OVERVIEW,
        },
        MY_RESIDENTS: {
          text: 'mijn bewoners',
          path: () => paths.ROOT + paths.MY_RESIDENTS,
        },
        DETAIL_GENERAL: {
          text: 'algemene informatie',
          path: (detail = paths.DETAIL) =>
            paths.ROOT + detail + paths.DETAIL_GENERAL,
        },
        DETAIL_PLANNING: {
          text: 'persoonlijke planning',
          path: (detail = paths.DETAIL) =>
            paths.ROOT + detail + paths.DETAIL_PLANNING,
        },
        DETAIL_ADD_CONTACT: {
          text: 'persoonlijke planning',
          path: (detail = paths.DETAIL) =>
            paths.ROOT + detail + paths.DETAIL_ADD_CONTACT,
        },
        NEW_RESIDENT: {
          path: () => paths.ROOT + paths.NEW_RESIDENT,
        },
      };
}

export { fetchResident, getPagesObj };
