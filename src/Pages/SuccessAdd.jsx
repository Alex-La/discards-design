import React from "react";

import { SuccessRound } from "../Icons";
import { Button } from "@material-ui/core";

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

        <Button
          style={{ marginTop: 20 }}
          variant="contained"
          color="secondary"
          fullWidth
        >
          Перейти к карте
        </Button>
        <Button
          style={{ marginTop: 16 }}
          variant="outlined"
          color="secondary"
          fullWidth
        >
          Ко всем картам
        </Button>
      </div>
    </div>
  );
};

export default SuccessAdd;
