import React from "react";
import { Route } from 'react-router-dom';
import SignIn from "./components/SignIn";
import RegisterAccount from "./components/RegisterAccount";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <SignIn />
      </Route>

      <Route exact path="/register">
        <RegisterAccount />
      </Route>
    </div>
  )
}

export default App;
