import { combineReducers } from "redux";

import { loginReducer, loginSupporterReducer } from './loginReducer';
import { registrationReducer } from './registrationReducer'
import { createCampaignReducer } from './createCampaignReducer';


const rootReducer = combineReducers({
    loginReducer,
    loginSupporterReducer,
    registrationReducer,
    createCampaignReducer,
});

export default rootReducer;
