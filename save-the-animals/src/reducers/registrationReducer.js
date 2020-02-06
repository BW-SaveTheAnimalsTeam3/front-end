import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_SUPPORTER_STORE_ID
} from "../actions/types";

const initialState = {
  user_id: ""
};

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_LOADING:
      return {};
    case REGISTER_SUCCESS:
      return {};
    case REGISTER_FAILURE:
      return {};
    case REGISTER_SUPPORTER_STORE_ID:
      console.log("look at me", action.payload);
      return {
        ...state,
        user_id: action.payload
      };
    default:
      return state;
  }
};
