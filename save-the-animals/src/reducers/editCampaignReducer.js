import { EDIT_MODAL_STATE } from "../actions/types";

const initialState = {
  isOpen: true
};

export const editCampaignReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_MODAL_STATE':
        console.log('hello')
      return {
        ...state,
        isOpen: action.payload
      };
    default:
      return state;
  }
};
