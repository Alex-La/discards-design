import React from "react";

import { SuccessRound } from "../Icons";

const SuccessAdd = () => {
  return (
    <div className="center-wrapper">
      <div className="wrap">
        <SuccessRound />
        <p
          style={{
            fontWeight: 600,
            fontSize: 19,
            lineHeight: "23.16px",
            color: "#000000",
            marginTop: 20,
          }}
        >
          Карта успешно добавлена
        </p>
        <p
          style={{
            fontWeight: 600,
            fontSize: 14,
            lineHeight: "23.8px",
            marginTop: 7,
          }}
        >
          Теперь она всегда будет с Вами
        </p>

        <button style={{ marginTop: 20 }} className="btn btn-shadow">
          Перейти к карте
        </button>
        <button
          style={{ marginTop: 16 }}
          className="btn btn-shadow btn-outlined"
        >
          Ко всем картам
        </button>
      </div>
    </div>
  );
};

export default SuccessAdd;
