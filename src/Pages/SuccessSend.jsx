import React from "react";

import { SuccessRound } from "../Icons";

const SuccessSend = () => {
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
          Ваше сообщение отправлено!
        </p>
        <p
          style={{
            fontWeight: 600,
            fontSize: 14,
            lineHeight: "23.8px",
            marginTop: 7,
          }}
        >
          В ближайшее время мы с вами свяжемся
        </p>

        <button style={{ marginTop: 20 }} className="btn">
          Вернуться назад
        </button>
      </div>
    </div>
  );
};

export default SuccessSend;
