import axios from 'axios';

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";



export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        dispatch({
          type: SUCCESS,
          payload: res.data

        });
      })
    .catch(err => {
        dispatch({
          type: FAILURE,
          payload: err
        });
      });
}

export const addSmurf = (newSmurf) => dispatch => {
  dispatch({ type: ADD_SMURF });
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
        dispatch({
          type: ADD_SMURF_SUCCESS,
          payload: res.data
        });
      })
    .catch(err => {
        dispatch({
          type: ADD_SMURF_FAILURE,
          payload: err
        });
      });
}