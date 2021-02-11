//This package creates a simple global state that can be used in other components by calling (useGlobalstate)
import { createGlobalState } from 'react-hooks-global-state';

const initialState = {
  confirmDialog: null,
  addNewResident: null,
  resident: undefined,
};
const { useGlobalState } = createGlobalState(initialState);

//Api url extracted from .env file: else default api url is heroku deployment
const apiUrl =
  process.env.REACT_APP_API_URI ||
  'https://radiant-harbor-10229.herokuapp.com/';


export { useGlobalState, apiUrl };
