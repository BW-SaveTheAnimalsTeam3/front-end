import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import OrganizationProfile from "./components/profile/organization-profile";
import CreateCampaign from "./components/create-campaign";
import SignIn from "./components/Forms/SignIn";
import RegisterAccount from "./components/Forms/RegisterAccount";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={SignIn} />
      <Route exact path="/register" component={RegisterAccount} />
      <Route path="/organization" component={OrganizationProfile} />
      <Route path="/create-campaign" component={CreateCampaign} />
    </div>
  );
}

export default App;
