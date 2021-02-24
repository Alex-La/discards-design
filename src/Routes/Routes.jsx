import React from "react";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Start from "../Pages/Start";
import Preloader from "../Pages/Preloader";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={Start} />
      <Route path="/preloader" component={Preloader} />
      <Redirect to="/" />
    </Router>
  );
};

export default Routes;
