import React from "react";

import { BackArrow } from "../Icons";
import { MenuItem } from "@material-ui/core";
import { CssTextField } from "../MUI/CssComponents";

import BottomNav from "../Components/BottomNav";

const HandAdd = () => {
  return (
    <div style={{ padding: 20 }}>
      <BackArrow />
      <p
        style={{
          fontWeight: 700,
          fontSize: 30,
          lineHeight: "36.57px",
          marginTop: 15,
          color: "black",
        }}
      >
        Добавить вручную
      </p>

      <p
        style={{
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "23.8px",
          marginTop: 8,
          color: "#5b5b5b",
        }}
      >
        Заполнить данные карты вручную.
      </p>

      <form>
        <CssTextField
          style={{ marginTop: 11 }}
          variant="outlined"
          size="small"
          value="Hello"
          fullWidth
          select
        >
          <MenuItem>Hello</MenuItem>
        </CssTextField>
        <CssTextField
          style={{ marginTop: 11 }}
          variant="outlined"
          size="small"
          fullWidth
        />
        <CssTextField
          style={{ marginTop: 11 }}
          variant="outlined"
          size="small"
          fullWidth
          select
        >
          <MenuItem>Hello</MenuItem>
        </CssTextField>
        <CssTextField
          style={{ marginTop: 11 }}
          variant="outlined"
          size="small"
          fullWidth
        />

        <button style={{ marginTop: 16 }} className="btn btn-shadow">
          Добавить карту
        </button>
      </form>

      <BottomNav />
    </div>
  );
};

export default HandAdd;
