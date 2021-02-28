import React from "react";

import { BackArrow, Close } from "../Icons";
import BottomNav from "../Components/BottomNav";
import { Grid } from "@material-ui/core";
import Pere from "../assets/pere.png";
import { useHistory } from "react-router-dom";

const AddPhotoConfirm = () => {
  const history = useHistory();
  return (
    <div
      style={{ padding: 20, marginBottom: 70 }}
      onClick={() => history.goBack()}
    >
      <BackArrow />
      <p
        style={{
          fontWeight: 700,
          fontSize: 30,
          color: "#343434",
          marginTop: 15,
        }}
      >
        Подтверждение
      </p>
      <p
        style={{
          fontWeight: 600,
          fontSize: 14,
          color: "#5b5b5b",
          marginTop: 8,
        }}
      >
        Подтвердите добавление новой карты в ваш профиль
      </p>

      <Grid container style={{ marginTop: 18 }}>
        <Grid item xs={6} style={{ paddingRight: 25, textAlign: "center" }}>
          <div style={{ position: "relative" }}>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: 15,
              }}
              alt="pere"
              src={Pere}
            />
            <span style={{ position: "absolute", right: -10, top: -10 }}>
              <button
                className="btn-circle"
                style={{ width: 20, height: 20, backgroundColor: "white" }}
              >
                <Close />
              </button>
            </span>
          </div>
          <p style={{ fontWeight: 600, fontSize: 14, color: "#5b5b5b" }}>
            Передняя часть
          </p>
        </Grid>
        <Grid item xs={6} style={{ paddingLeft: 25, textAlign: "center" }}>
          <div style={{ position: "relative" }}>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: 15,
              }}
              alt="pere"
              src={Pere}
            />
            <span style={{ position: "absolute", right: -10, top: -10 }}>
              <button
                className="btn-circle"
                style={{ width: 20, height: 20, backgroundColor: "white" }}
              >
                <Close />
              </button>
            </span>
          </div>
          <p style={{ fontWeight: 600, fontSize: 14, color: "#5b5b5b" }}>
            Задняя часть
          </p>
        </Grid>
      </Grid>

      <button className="btn btn-shadow" style={{ marginTop: 30 }}>
        Добавить
      </button>

      <BottomNav />
    </div>
  );
};

export default AddPhotoConfirm;
