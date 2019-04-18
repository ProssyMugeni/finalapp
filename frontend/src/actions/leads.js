import axios from "axios";
// import { createMessage, returnErrors } from "./messages";
// import { tokenConfig } from "./auth";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GOT_LEADS } from "./types";

// GET LEADS FARMER
export const getLeads = () => dispatch => {
  axios
    .get("api/farmer") 
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));};

    // DELETE LEAD
    export const deleteLead = name => (dispatch, getState) => {
      axios
        .delete(`api/farmer/${name}/`, tokenConfig(getState))
        .then(res => {
          dispatch(createMessage({ deleteLead: "Lead Deleted" }));
          dispatch({
            type: DELETE_LEAD,
            payload: name
          });
        })
        .catch(err => console.log(err));
    };

    // ADD LEAD
export const addLead = lead => (dispatch, getState) => {
  axios
    .post("api/farmer")
    .then(res => {
      dispatch(createMessage({ addLead: "Lead Added" }));
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      });
    })
    .catch(err =>
    console.log(err));
    
};
// GOT_LEADS REPORT
export const gotLeads = () => dispatch => {
  axios
    .get("api/report") 
    .then(res => {
      dispatch({
        type: GOT_LEADS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));};
