import React from "react";

import { Button } from "@material-ui/core";
import { Cloud } from "../Icons";

const ConnectionLost = () => {
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

        <Button
          variant="contained"
          color="secondary"
          fullWidth
          style={{ marginTop: 28 }}
        >
          Вернуться на главную
        </Button>
      </div>
    </div>
  );
};

export default ConnectionLost;
