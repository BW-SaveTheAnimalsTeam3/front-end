import {
  EDIT_MODAL_STATE,
  EDIT_CAMPAIGN_LOADING,
  EDIT_CAMPAIGN_SUCCESS,
  EDIT_CAMPAIGN_FAILURE,
  DELETE_CAMPAIGN_LOADING,
  DELETE_CAMPAIGN_SUCCESS,
  DELETE_CAMPAIGN_FAILURE
} from "../actions/types";

const initialState = {
  isOpen: false,
  isLoading: false,
  campaign: {
    id: null,
    org_id: null,
    campaign: "",
    location: "",
    description: "",
    species: "",
    urgency_level: "",
    funding_goal: "",
    deadline: "",
    image: ""
  }
};

export const editCampaignReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_MODAL_STATE:
      console.log("modal payload", action.payload);
      return {
        ...state,
        isOpen: action.payload
      };

    case EDIT_CAMPAIGN_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case EDIT_CAMPAIGN_SUCCESS:
      console.log("edit campaign payload", action.payload);
      return {
        ...state,
        campaign: {
          ...state.campaign,
          id: action.payload.id,
          org_id: action.payload.org_id,
          campaign: action.payload.campaign,
          location: action.payload.location,
          description: action.payload.description,
          species: action.payload.species,
          urgency_level: action.payload.urgency_level,
          funding_goal: action.payload.funding_goal,
          deadline: action.payload.deadline,
          image: action.payload.image
        }
      };
    case EDIT_CAMPAIGN_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
