//This package creates a simple global state that can be used in other components by calling (useGlobalstate)
import { createGlobalState } from 'react-hooks-global-state';

const initialState = { confirmDialog: null, addNewContact: null };
const { useGlobalState } = createGlobalState(initialState);

export { useGlobalState };
