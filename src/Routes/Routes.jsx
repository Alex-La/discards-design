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
import About from "../Pages/About";
import SuccessSend from "../Pages/SuccessSend";
import NotFound from "../Pages/NotFound";
import ConnectionLost from "../Pages/ConnectionLost";
import AddPhoto from "../Pages/AddPhoto";
import AddPhotoConfirm from "../Pages/AddPhotoConfirm";
import HasCards from "../Pages/HasCards";
import Search from "../Pages/Search";
import SingleCard from "../Pages/SingleCard";
import CardFull from "../Pages/CardFull";
import SingleMarket from "../Pages/SingleMarket";
import Reviews from "../Pages/Reviews";

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
        <Route path="/about" component={About} />
        <Route path="/success-send" component={SuccessSend} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/connection-lost" component={ConnectionLost} />
        <Route path="/add-photo" component={AddPhoto} />
        <Route path="/add-photo-confirm" component={AddPhotoConfirm} />
        <Route path="/has-card" component={HasCards} />
        <Route path="/search" component={Search} />
        <Route path="/single-card" component={SingleCard} />
        <Route path="/card-full" component={CardFull} />
        <Route path="/single-market" component={SingleMarket} />
        <Route path="/reviews" component={Reviews} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
