import axios from "axios";
import {
  CREATE_CAMPAIGN_LOADING,
  CREATE_CAMPAIGN_SUCCESS,
  CREATE_CAMPAIGN_FAILURE
} from "./types";

export const createCampaignPost = () => dispatch => {
  dispatch({ type: CREATE_CAMPAIGN_LOADING });
  axios
    .post(``)
    .then(res => {
      console.log(res, "api response from createCampaignActions");
      dispatch({ type: CREATE_CAMPAIGN_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: CREATE_CAMPAIGN_FAILURE, payload: err });
    });
};
