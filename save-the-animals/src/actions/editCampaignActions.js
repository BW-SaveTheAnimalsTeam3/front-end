import {
  EDIT_CAMPAIGN_LOADING,
  EDIT_CAMPAIGN_SUCCESS,
  EDIT_CAMPAIGN_FAILURE,
  EDIT_MODAL_STATE,
  DELETE_CAMPAIGN_LOADING,
  DELETE_CAMPAIGN_SUCCESS,
  DELETE_CAMPAIGN_FAILURE,
  PUT_CAMPAIGN_LOADING,
  PUT_CAMPAIGN_SUCCESS,
  PUT_CAMPAIGN_FAILURE
} from "./types";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const editCampaignModal = bool => {
  console.log(bool);
  return { type: EDIT_MODAL_STATE, payload: bool };
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
      dispatch({ type: EDIT_CAMPAIGN_FAILURE, payload: err });
    });
};

export const editCampaignPut = (initialValue, id) => dispatch => {
  dispatch({ type: PUT_CAMPAIGN_LOADING });
  axiosWithAuth()
    .put(`/campaigns/${id}`, initialValue)
    .then(res => {
      dispatch({ type: PUT_CAMPAIGN_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: PUT_CAMPAIGN_FAILURE, payload: err });
    });
};

export const deleteCampaign = id => dispatch => {
  dispatch({ type: DELETE_CAMPAIGN_LOADING });
  axiosWithAuth()
    .delete(`/campaigns/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: DELETE_CAMPAIGN_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: DELETE_CAMPAIGN_FAILURE, payload: err });
    });
};
