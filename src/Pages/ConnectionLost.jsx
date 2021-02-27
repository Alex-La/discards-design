import React from "react";

import { Cloud } from "../Icons";
import Logo from "../assets/logo.svg";

const ConnectionLost = () => {
  return (
    <div className="center-wrapper">
      <div className="wrap">
        <img src={Logo} alt="logo" width={200} />

        <p
          style={{
            fontWeight: 700,
            fontSize: 24,
            lineHeight: "29.26px",
            color: "#5b5b5b",
            marginBottom: 25,
          }}
        >
          Потеря соединения
        </p>

        <Cloud />

        <p
          style={{
            marginTop: 19,
            fontWeight: 600,
            fontSize: 14,
            lineHeight: "23.8px",
            color: "#5b5b5b",
          }}
        >
          Вернитесь на главную, или перезагрузите страницу
        </p>

        <button className="btn" style={{ marginTop: 28 }}>
          Вернуться на главную
        </button>
      </div>
    </div>
  );
};

export default ConnectionLost;
