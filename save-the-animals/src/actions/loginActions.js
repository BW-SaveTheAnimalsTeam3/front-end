import axios from "axios";
import {
  LOGIN_LOADING,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SUPPORTER_LOGIN_LOADING,
  SUPPORTER_LOGIN_SUCCESS,
  SUPPORTER_LOGIN_FAILURE
} from "./types";

export const loginAuth = () => dispatch => {
  dispatch({ type: LOGIN_LOADING });
  axios
    .get(``)
    .then(res => {
      console.log(res, "api response from loginActions");
      dispatch({ type: LOGIN_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};

export const loginSupporterAuth = () => dispatch => {
  dispatch({ type: SUPPORTER_LOGIN_LOADING });
  axios
    .get(``)
    .then(res => {
      console.log(res, "api response from loginActions");
      dispatch({ type: SUPPORTER_LOGIN_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: SUPPORTER_LOGIN_FAILURE, payload: err });
    });
};
