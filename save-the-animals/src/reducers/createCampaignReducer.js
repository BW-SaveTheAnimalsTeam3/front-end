import {
  CREATE_CAMPAIGN_LOADING,
  CREATE_CAMPAIGN_SUCCESS,
  CREATE_CAMPAIGN_FAILURE
} from "../actions/types";

const initialState = {};

export const createCampaignReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CAMPAIGN_LOADING:
      return {};
    case CREATE_CAMPAIGN_SUCCESS:
      return {};
    case CREATE_CAMPAIGN_FAILURE:
      return {};
    default:
      return state;
  }
};
