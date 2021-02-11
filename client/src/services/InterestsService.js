import {apiUrl} from "../global/states";

const apiRoute = apiUrl + 'app/interests';

const fetchAllInterests = async () => {
  try {
    const response = await fetch(apiRoute);

    if (!response.ok) {
      return null;
    }

    const result = await response.json();

    return result.interests;
  } catch (err) {
    
    return null;
  }
};

export {fetchAllInterests}