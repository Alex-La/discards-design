import React from "react";

import { BackArrow } from "../Icons";
import BottomNav from "../Components/BottomNav";
import { CssTextField } from "../MUI/CssComponents";
import { Button } from "@material-ui/core";

const Support = () => {
  return (
    <div style={{ padding: 20, marginBottom: 56 }}>
      <BackArrow />

      <p
        style={{
          fontWeight: 700,
          fontSize: 30,
          lineHeight: "36.57px",
          marginTop: 15,
          color: "#343434",
        }}
      >
        Поддержка
      </p>

      <p
        style={{
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "23.8px",
          marginTop: 4,
          color: "#5b5b5b",
        }}
      >
        Заполните форму ниже и мы ответим вам в ближайшее время:
      </p>

      <form>
        <CssTextField
          variant="outlined"
          size="small"
          label="Эл. почта"
          fullWidth
          style={{ marginTop: 12 }}
        />
        <CssTextField
          variant="outlined"
          size="small"
          label="Имя"
          fullWidth
          style={{ marginTop: 11 }}
        />
        <CssTextField
          variant="outlined"
          size="small"
          label="Сообщение"
          multiline
          rows={5}
          fullWidth
          style={{ marginTop: 11 }}
        />

        <Button
          variant="contained"
          color="secondary"
          fullWidth
          style={{ marginTop: 11 }}
        >
          Отправить сообщение
        </Button>
      </form>

      <BottomNav />
    </div>
  );
};

export default Support;
