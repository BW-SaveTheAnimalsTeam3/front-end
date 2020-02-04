import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SUPPORTER_LOGIN_LOADING,
  SUPPORTER_LOGIN_SUCCESS,
  SUPPORTER_LOGIN_FAILURE
} from "../actions/types";

const initialState = {};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {};
    case LOGIN_SUCCESS:
      return {};
    case LOGIN_FAILURE:
      return {};
    default:
      return state;
  }
};

export const loginSupporterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUPPORTER_LOGIN_LOADING:
      return {};
    case SUPPORTER_LOGIN_SUCCESS:
      return {};
    case SUPPORTER_LOGIN_FAILURE:
      return {};
    default:
      return state;
  }
};
