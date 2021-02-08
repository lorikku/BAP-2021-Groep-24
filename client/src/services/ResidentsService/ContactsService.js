import { toSec } from '../../global/timeStampFuncs';

const apiRoute = process.env.REACT_APP_API_URL + '/app/residents';

const fetchContactsByResidentId = async (residentId) => {
  try {
    const response = await fetch(apiRoute + `/${residentId}/contacts`);
    const result = await response.json();

    return result.contacts;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const postContact = async (matchee, match, matchedInterests = []) => {
  //Setting resident (matchee)
  const resident = {
    _id: matchee._id,
    name: matchee.name,
    photoUri: matchee.photoUri,
  };

  //Setting contact (match)
  const contact = {
    _id: match._id,
    name: match.name,
    photoUri: match.photoUri,
  };

  //Get today's unix timestamp (in seconds)
  const addedAt = toSec(Date.now());

  try {
    const response = await fetch(apiRoute + `/${matchee._id}/contacts`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        resident,
        contact,
        addedAt,
        matchedInterests,
      }), // body data type must match "Content-Type" header
    });

    if (!response.ok) {
      return false;
    }

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export { fetchContactsByResidentId, postContact };
