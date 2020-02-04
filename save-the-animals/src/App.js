import React from "react";
import { Route } from 'react-router-dom';
import SignIn from "./components/Forms/SignIn";
import RegisterAccount from "./components/Forms/RegisterAccount";
import "./App.css";

import OrganizationProfile from './components/profile/organization-profile';
import CreateCampaign from './components/create-campaign';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <SignIn />
      </Route>
      <Route path='/organization' component={OrganizationProfile} />
    <Route path='/create-campaign' component={CreateCampaign} />

      <Route exact path="/register">
        <RegisterAccount />
      </Route>
    </div>
  )
}

export default App;
