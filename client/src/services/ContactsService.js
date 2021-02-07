const apiRoute = '/app/residents';

const fetchContactsByResidentId = async (residentId) => {
  try {
    const response = await fetch(
      process.env.REACT_APP_API_URL + apiRoute + `/${residentId}/contacts`
    );
    const result = await response.json();

    return result.contacts;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export {fetchContactsByResidentId}