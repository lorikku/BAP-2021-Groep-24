const apiRoute = process.env.REACT_APP_API_URL + '/app/residents';

const fetchInterestByResidentId = async (residentId) => {
  try {
    const response = await fetch(apiRoute + `/${residentId}/interests`);
    const result = await response.json();

    return result.interests;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export { fetchInterestByResidentId };
