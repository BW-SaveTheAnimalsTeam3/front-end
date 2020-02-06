import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import OrganizationProfile from "./components/profile/organization-profile";
import CreateCampaign from "./components/create-campaign";
import SignIn from "./components/login-and-registration/Forms/SignIn";
import RegisterAccount from "./components/login-and-registration/Forms/RegisterAccount";
import SupporterProfile from './components/profile/supporter-profile';
import Dashboard from './components/dashboard';
import PrivateRoute from './components/PrivateRoute';
import RegisterOrganization from './components/login-and-registration/Organization/register'




function App() {

  return (
    <div className="App">
      <Route exact path="/" component={SignIn} />
      <Route exact path="/register" component={RegisterAccount} />
      <PrivateRoute path="/organization" component={OrganizationProfile} />
      {/* <PrivateRoute path="/organization"><OrganizationProfile /></PrivateRoute> */}
      <PrivateRoute path="/supporter" component={SupporterProfile} />
      <PrivateRoute path="/create-campaign" component={CreateCampaign} />
      <Route path='/register-organization' component={RegisterOrganization} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
