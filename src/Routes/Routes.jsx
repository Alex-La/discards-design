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
import Registration from "../Pages/Registration";
import Lazy from "../Pages/Lazy";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route path="/preloader" component={Preloader} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/lazy" component={Lazy} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
