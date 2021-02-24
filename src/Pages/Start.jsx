import React from "react";

import { NavLink } from "react-router-dom";
import { List, ListItem, ListItemText } from "@material-ui/core";

const ListItemLink = (props) => {
  return (
    <NavLink to={props.to}>
      <ListItem button component="a" {...props} />
    </NavLink>
  );
};

const Start = () => {
  return (
    <List component="nav" aria-label="secondary mailbox folders">
      <ListItemLink to="/preloader">
        <ListItemText primary="Preloader" />
      </ListItemLink>
      <ListItemLink to="/login">
        <ListItemText primary="Вход" />
      </ListItemLink>
      <ListItemLink to="/registration">
        <ListItemText primary="Регистрация" />
      </ListItemLink>
      <ListItemLink to="/lazy">
        <ListItemText primary="Lazy load" />
      </ListItemLink>
      <ListItemLink to="/Main">
        <ListItemText primary="Главная" />
      </ListItemLink>
    </List>
  );
};

export default Start;
