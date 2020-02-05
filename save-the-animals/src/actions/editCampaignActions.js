import {
  EDIT_CAMPAIGN_LOADING,
  EDIT_CAMPAIGN_SUCCESS,
  EDIT_CAMPAIGN_FAILURE,
  EDIT_MODAL_STATE
} from "./types";
import axios from "axios";

export const editCampaignModal = bool => {
  console.log(bool);
  return { type:EDIT_MODAL_STATE, payload: bool };
};

export const editCampaignGet = id => dispatch => {
  console.log("firing", id);
  dispatch({ type: EDIT_CAMPAIGN_LOADING });
  axios
    .get(`https://save-the-animals-backend.herokuapp.com/api/campaigns/${id}`)
    .then(res => {
      console.log(res, "api response in editCampaignActions");
      dispatch({ type: EDIT_CAMPAIGN_SUCCESS, payload: res.data });
    })
    .catch(err => {
        dispatch({ type: EDIT_CAMPAIGN_FAILURE, payload: err })
    });
};
