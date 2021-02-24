import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Start from "../Pages/Start";
import Preloader from "../Pages/Preloader";
import Login from "../Pages/Login";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route path="/preloader" component={Preloader} />
        <Route path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
