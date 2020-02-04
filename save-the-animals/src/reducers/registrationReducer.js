import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "../actions/types";

const initialState = {};

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_LOADING:
      return {};
    case REGISTER_SUCCESS:
      return {};
    case REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
};
