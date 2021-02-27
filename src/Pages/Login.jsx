import React from "react";

import Logo from "../assets/logo.svg";
import { CssTextField } from "../MUI/CssComponents";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="center-wrapper">
      <div className="wrap">
        <img src={Logo} alt="logo" width={150} />

        <p style={{ fontWeight: 700, fontSize: 43, lineHeight: "52.42px" }}>
          DISCARDS
        </p>
        <p style={{ fontWeight: 600, fontSize: 14, lineHeight: "23.8px" }}>
          Любые карты в одном месте
        </p>

        <p
          style={{
            marginTop: 25,
            marginBottom: 21,
            textAlign: "start",
            fontWeight: 700,
            fontSize: 24,
            lineHeight: "29,26px",
            color: "#343434",
          }}
        >
          Войти
        </p>

        <form>
          <CssTextField
            name="email"
            size="small"
            label="Эл. почта"
            variant="outlined"
            fullWidth
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

          <button style={{ marginTop: 15 }} className="btn btn-shadow">
            Войти
          </button>
        </form>

        <p
          style={{
            fontWeight: 600,
            fontSize: 11,
            lineHeight: "13px",
            marginTop: 15,
          }}
        >
          Или <NavLink to="/registration">зарегистрируйтесь</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
