import axios from "axios";
import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_SUPPORTER_STORE_ID
} from "./types";

export const registrationStore = id => {
  return { type: REGISTER_SUPPORTER_STORE_ID, payload: id };
};

export const registrationSupporterPost = () => dispatch => {
  dispatch({ type: REGISTER_LOADING });
  axios
    .post(``)
    .then(res => {
      console.log(res, "api response from registrationActions");
      dispatch({ type: REGISTER_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err });
    });
};
