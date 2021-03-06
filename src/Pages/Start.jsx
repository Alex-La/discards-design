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
      <ListItemLink to="/add-photo">
        <ListItemText primary="Добавление через фото" />
      </ListItemLink>
      <ListItemLink to="/add-photo-confirm">
        <ListItemText primary="Добавление через фото>подтверждение" />
      </ListItemLink>
      <ListItemLink to="/success-add">
        <ListItemText primary="Успешное добавление" />
      </ListItemLink>
      <ListItemLink to="/hand-add">
        <ListItemText primary="Добавление карты вручную" />
      </ListItemLink>
      <ListItemLink to="/has-card">
        <ListItemText primary="Главная>есть карты" />
      </ListItemLink>
      <ListItemLink to="/search">
        <ListItemText primary="Главная>поиск" />
      </ListItemLink>
      <ListItemLink to="/single-card">
        <ListItemText primary="Одиночная карточка" />
      </ListItemLink>
      <ListItemLink to="/card-full">
        <ListItemText primary="Полный экран" />
      </ListItemLink>
      <ListItemLink to="/catalog">
        <ListItemText primary="Каталог" />
      </ListItemLink>
      <ListItemLink to="/selection">
        <ListItemText primary="Каталог>Смотреть подборку" />
      </ListItemLink>
      <ListItemLink to="/single-market">
        <ListItemText primary="Одиночный магазин" />
      </ListItemLink>
      <ListItemLink to="/reviews">
        <ListItemText primary="Отзывы" />
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
      <ListItemLink to="/not-found">
        <ListItemText primary="404 Не найдена" />
      </ListItemLink>
      <ListItemLink to="/connection-lost">
        <ListItemText primary="Потеря соединения" />
      </ListItemLink>
    </List>
  );
};

export default Start;
