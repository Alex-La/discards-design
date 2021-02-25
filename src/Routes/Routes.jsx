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
import Main from "../Pages/Main";
import SuccessAdd from "../Pages/SuccessAdd";
import HandAdd from "../Pages/HandAdd";
import Catalog from "../Pages/Catalog";
import Selection from "../Pages/Selection";
import Profile from "../Pages/Profile";
import Settings from "../Pages/Settings";
import Contacts from "../Pages/Contacts";
import Support from "../Pages/Support";
import Partners from "../Pages/Partners";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route path="/preloader" component={Preloader} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/lazy" component={Lazy} />
        <Route path="/main" component={Main} />
        <Route path="/success-add" component={SuccessAdd} />
        <Route path="/hand-add" component={HandAdd} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/selection" component={Selection} />
        <Route path="/profile" component={Profile} />
        <Route path="/settings" component={Settings} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/support" component={Support} />
        <Route path="/partners" component={Partners} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
