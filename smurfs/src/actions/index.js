import axios from 'axios';

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

// export const DELETE_SMURF = "DELETE_SMURF";
// export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
// export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";
// export const FETCH_SMURF_DATA_SUCCESS = "FETCH_SMURF_DATA_SUCCESS";



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
// export const deleteSmurf = (id) => dispatch => {
//   dispatch({ type: DELETE_SMURF });
//   axios
//   .delete(`http://localhost:3333/smurfs/${id}`)
//   .then(res => { console.log(res.data); return res })
//   .then(res => {
 