import {
  EDIT_CAMPAIGN_LOADING,
  EDIT_CAMPAIGN_SUCCESS,
  EDIT_CAMPAIGN_FAILURE,
  EDIT_MODAL_STATE
} from "./types";

export const editCampaignModal = bool => {
    console.log(bool)
    return { type: 'EDIT_MODAL_STATE', payload: bool }
}
