import {apiUrl} from "../../global/states";

const apiRoute = apiUrl + 'app/residents';

const fetchInterestByResidentId = async (residentId) => {
  try {
    const response = await fetch(apiRoute + `/${residentId}/interests`);
    const result = await response.json();

    return result.interests;
  } catch (err) {
    
    return null;
  }
};

export { fetchInterestByResidentId };
