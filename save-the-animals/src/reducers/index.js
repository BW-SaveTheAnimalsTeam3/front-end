import { combineReducers } from "redux";

import { loginReducer, loginSupporterReducer } from "./loginReducer";
import { registrationReducer } from "./registrationReducer";
import { createCampaignReducer } from "./createCampaignReducer";
import { editCampaignReducer } from "./editCampaignReducer";

const rootReducer = combineReducers({
  loginReducer,
  loginSupporterReducer,
  registrationReducer,
  createCampaignReducer,
  editCampaignReducer
});

export default rootReducer;
