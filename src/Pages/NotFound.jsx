import React from "react";

const NotFound = () => {
  return (
    <div className="center-wrapper">
      <div className="wrap">
        <p style={{ fontWeight: 700, fontSize: 43, lineHeight: "52.42px" }}>
          DISCARDS
        </p>
        <p style={{ fontWeight: 600, fontSize: 14, lineHeight: "23.8px" }}>
          Любые карты в одном месте
        </p>

        <p
          style={{
            fontWeight: 700,
            fontSize: 24,
            lineHeight: "29.26px",
            color: "#5b5b5b",
            marginTop: 16,
          }}
        >
          Ошибка
        </p>

        <p
          style={{
            fontWeight: 700,
            fontSize: 80,
            lineHeight: "97.52px",
            color: "#5b5b5b",
            marginTop: 5,
          }}
        >
          404
        </p>

        <p
          style={{
            fontWeight: 600,
            fontSize: 14,
            lineHeight: "23.8px",
            color: "#5b5b5b",
          }}
        >
          Что-то пошло не так, данная страница не найдена!
        </p>

        <button className="btn" style={{ marginTop: 28 }}>
          Вернуться на главную
        </button>
      </div>
    </div>
  );
};

export default NotFound;
