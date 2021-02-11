const apiRoute = process.env.REACT_APP_API_URL + '/app/interests';

const fetchAllInterests = async () => {
  try {
    const response = await fetch(apiRoute);

    if (!response.ok) {
      return null;
    }

    const result = await response.json();

    return result.interests;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export {fetchAllInterests}