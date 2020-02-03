import React from "react";
import { Route } from 'react-router-dom';

import "./App.css";

import OrganizationProfile from './components/profile/organization-profile';
import CreateCampaign from './components/create-campaign';

function App() {
  return <div className="App">
    <Route path='/organization' component={OrganizationProfile} />
    <Route path='/create-campaign' component={CreateCampaign} />
  </div>;
}

export default App;
