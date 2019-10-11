//reducer with its initila state.

import { FETCHING, SUCCESS, FAILURE, ADD_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE } from '../actions';


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    
    case FETCHING:
      return {
        ...state,
        fetching: true
      }
    case SUCCESS:
      return {
        ...state,
        fetching: false,
        smurfs: action.payload
      }
    case FAILURE:
      return {
        ...state,
        fetching: false
      }

      
    case ADD_SMURF:
      return {
        ...state,
        addingSmurf: true,
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      }
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        addingSmurf: false
      }
    default:
      return state;
  }
};

