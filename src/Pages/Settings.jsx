import React from "react";

import { BackArrow } from "../Icons";
import BottomNav from "../Components/BottomNav";
import { CssTextField } from "../MUI/CssComponents";

const Settings = () => {
  return (
    <div style={{ padding: 20, marginBottom: 70 }}>
      <BackArrow />

      <p
        style={{
          fontWeight: 700,
          fontSize: 30,
          lineHeight: "36.57px",
          marginTop: 15,
          color: "#343434",
        }}
      >
        Настройки
      </p>

      <p
        style={{
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "23.8px",
          color: "#5B5B5B",
          marginTop: 4,
        }}
      >
        Изменяйте настройки вашего профиля
      </p>

      <form style={{ marginTop: 20 }}>
        <CssTextField
          variant="outlined"
          size="small"
          label="Имя"
          fullWidth
          style={{ marginBottom: 10 }}
        />
        <CssTextField
          variant="outlined"
          size="small"
          label="Фамилия"
          fullWidth
          style={{ marginBottom: 10 }}
        />
        <CssTextField
          variant="outlined"
          size="small"
          label="Мобильный телефон"
          fullWidth
          style={{ marginBottom: 10 }}
        />
        <CssTextField
          variant="outlined"
          size="small"
          label="Эл. Почта"
          fullWidth
          style={{ marginBottom: 10 }}
        />
        <CssTextField
          variant="outlined"
          size="small"
          label="Пароль"
          type="password"
          fullWidth
          style={{ marginBottom: 10 }}
        />
        <CssTextField
          variant="outlined"
          size="small"
          label="Пароль еще раз"
          type="password"
          fullWidth
          style={{ marginBottom: 10 }}
        />

        <button className="btn btn-shadow" style={{ marginTop: 5 }}>
          Сохранить изменения
        </button>
        <button
          className="btn btn-shadow btn-outlined"
          style={{ marginTop: 14 }}
        >
          Выйти из аккаунта
        </button>
      </form>

      <BottomNav />
    </div>
  );
};

export default Settings;
