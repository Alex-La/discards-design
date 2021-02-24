import React from "react";

import { Fab } from "@material-ui/core";
import { Back } from "../Icons";

import { CssTextField, CssButton } from "../MUI/CssComponents";
import { NavLink } from "react-router-dom";

const Registration = () => {
  return (
    <div className="center-wrapper">
      <div className="wrap">
        <p style={{ fontWeight: 700, fontSize: 43, lineHeight: "52.42px" }}>
          DISCARDS
        </p>
        <p style={{ fontWeight: 600, fontSize: 14, lineHeight: "23.8px" }}>
          Любые карты в одном месте
        </p>

        <div style={{ textAlign: "start", marginTop: 18 }}>
          <Fab
            size="small"
            aria-label="add"
            style={{
              backgroundColor: "white",
            }}
          >
            <Back />
          </Fab>
        </div>

        <p
          style={{
            marginTop: 10,
            marginBottom: 22,
            textAlign: "start",
            fontWeight: 700,
            fontSize: 24,
            lineHeight: "29.26px",
            color: "#343434",
          }}
        >
          Регистрация
        </p>

        <form>
          <CssTextField
            name="email"
            size="small"
            label="Ваше имя"
            variant="outlined"
            fullWidth
          />
          <CssTextField
            name="password"
            size="small"
            label="Эл. почта"
            variant="outlined"
            fullWidth
            style={{ marginTop: 11 }}
          />
          <CssTextField
            name="password"
            size="small"
            label="Пароль"
            variant="outlined"
            type="password"
            fullWidth
            style={{ marginTop: 11 }}
          />
          <CssTextField
            name="password"
            size="small"
            label="Пароль ещё раз"
            variant="outlined"
            type="password"
            fullWidth
            style={{ marginTop: 11 }}
          />

          <CssButton
            style={{ marginTop: 15 }}
            variant="contained"
            color="secondary"
            fullWidth
          >
            Зарегистрироваться
          </CssButton>
        </form>

        <p
          style={{
            fontWeight: 600,
            fontSize: 11,
            lineHeight: "13.41px",
            marginTop: 15,
          }}
        >
          Нажимая кнопку “Зарегистрироваться” я даю согласие на обработку
          персональных данных, а так же соглашаюсь с{" "}
          <NavLink to="/policy"> политикой конфиденциальности</NavLink>{" "}
          приложения DISCARDS
        </p>
      </div>
    </div>
  );
};

export default Registration;
