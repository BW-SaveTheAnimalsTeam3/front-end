import React from "react";
import { Route } from 'react-router-dom';

import "./App.css";

import OrganizationProfile from './components/profile/organization-profile';

function App() {
  return <div className="App">
    <Route path='/organization' component={OrganizationProfile} />
  </div>;
}

export default App;
