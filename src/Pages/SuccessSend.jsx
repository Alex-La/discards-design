import React from "react";

import { SuccessRound } from "../Icons";
import { Button } from "@material-ui/core";

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

        <Button
          style={{ marginTop: 20 }}
          variant="contained"
          color="secondary"
          fullWidth
        >
          Вернуться назад
        </Button>
      </div>
    </div>
  );
};

export default SuccessSend;
