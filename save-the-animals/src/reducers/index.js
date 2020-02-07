import { combineReducers } from "redux";

import { loginReducer, loginSupporterReducer } from "./loginReducer";
import { registrationReducer } from "./registrationReducer";
import { createCampaignReducer } from "./createCampaignReducer";
import { editCampaignReducer } from "./editCampaignReducer";
import {donateReducer} from './donationReducer'

const rootReducer = combineReducers({
  loginReducer,
  loginSupporterReducer,
  registrationReducer,
  createCampaignReducer,
  editCampaignReducer,
  donateReducer,
});

export default rootReducer;
