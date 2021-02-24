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
    </List>
  );
};

export default Start;
