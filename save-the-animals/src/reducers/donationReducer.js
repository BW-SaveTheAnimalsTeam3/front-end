import {
  DONATE_LOADING,
  DONATE_SUCCESS,
  DONATE_FAILURE
} from "../actions/types";

const initialState = {
  totalDonations: 0
};

export const donateReducer = (state = initialState, action) => {
  switch (action.type) {
    case DONATE_SUCCESS:
        console.log('donation payload', action.payload)
        console.log('current donation total', Number(state.totalDonations))
      return {
          ...state,
          totalDonations: Number(state.totalDonations) + Number(action.payload)
      };
    case DONATE_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
