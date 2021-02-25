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
      <ListItemLink to="/success-add">
        <ListItemText primary="Успешное добавление" />
      </ListItemLink>
      <ListItemLink to="/hand-add">
        <ListItemText primary="Добавление карты вручную" />
      </ListItemLink>
      <ListItemLink to="/catalog">
        <ListItemText primary="Каталог" />
      </ListItemLink>
      <ListItemLink to="/selection">
        <ListItemText primary="Каталог>Смотреть подборку" />
      </ListItemLink>
      <ListItemLink to="/profile">
        <ListItemText primary="Профиль" />
      </ListItemLink>
      <ListItemLink to="/settings">
        <ListItemText primary="Настройки" />
      </ListItemLink>
      <ListItemLink to="/contacts">
        <ListItemText primary="Контакты" />
      </ListItemLink>
      <ListItemLink to="/partners">
        <ListItemText primary="Партнерам" />
      </ListItemLink>
      <ListItemLink to="/support">
        <ListItemText primary="Поддержка" />
      </ListItemLink>
      <ListItemLink to="/about">
        <ListItemText primary="О приложении" />
      </ListItemLink>
      <ListItemLink to="/success-send">
        <ListItemText primary="success" />
      </ListItemLink>
    </List>
  );
};

export default Start;
