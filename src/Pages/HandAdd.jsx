import React from "react";

import { BackArrow } from "../Icons";
import { CssTextField } from "../MUI/CssComponents";
import { useHistory } from "react-router-dom";
import BottomNav from "../Components/BottomNav";

const HandAdd = () => {
  const history = useHistory();
  return (
    <div style={{ padding: 20 }}>
      <div onClick={() => history.goBack()}>
        <BackArrow />
      </div>
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
          variant="outlined"
          select
          size="small"
          fullWidth
          style={{ marginTop: 11 }}
        >
          <option>Hello</option>
          <option>Hello</option>
          <option>Hello</option>
          <option>Hello</option>
          <option>Hello</option>
          <option>Hello</option>
        </CssTextField>

        <CssTextField
          variant="outlined"
          size="small"
          placeholder="Введите номер карты"
          fullWidth
          style={{ marginTop: 11 }}
        />

        <CssTextField
          variant="outlined"
          select
          size="small"
          fullWidth
          style={{ marginTop: 10 }}
        >
          <option>Hello</option>
          <option>Hello</option>
          <option>Hello</option>
          <option>Hello</option>
          <option>Hello</option>
          <option>Hello</option>
        </CssTextField>

        <CssTextField
          variant="outlined"
          size="small"
          placeholder="Скидка по карте"
          fullWidth
          style={{ marginTop: 11 }}
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
