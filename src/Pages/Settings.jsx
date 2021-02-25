import React from "react";

import { Button } from "@material-ui/core";
import { BackArrow } from "../Icons";
import BottomNav from "../Components/BottomNav";
import { CssTextField } from "../MUI/CssComponents";

const Settings = () => {
  return (
    <div style={{ padding: 20, marginBottom: 56 }}>
      <BackArrow />

      <p
        style={{
          fontWeight: 700,
          fontSize: 30,
          lineHeight: "36.57px",
          marginTop: 15,
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

        <Button
          variant="contained"
          color="secondary"
          fullWidth
          style={{ marginTop: 5 }}
        >
          Сохранить изменения
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Выйти из аккаунта
        </Button>
      </form>

      <BottomNav />
    </div>
  );
};

export default Settings;
