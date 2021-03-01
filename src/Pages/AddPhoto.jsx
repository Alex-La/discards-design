import React from "react";

import { BackArrow, Close, Camera, Light, Gallery } from "../Icons";
import BottomNav from "../Components/BottomNav";
import { Grid } from "@material-ui/core";
import Pere from "../assets/pere.png";
import Card from "../assets/card.png";
import { useHistory } from "react-router-dom";

const AddPhoto = () => {
  const history = useHistory();
  return (
    <div style={{ padding: 20, marginBottom: 70 }}>
      <div onClick={() => history.goBack()}>
        <BackArrow />
      </div>
      <p
        style={{
          fontWeight: 700,
          fontSize: 30,
          color: "#343434",
          marginTop: 15,
        }}
      >
        Добавление карты
      </p>
      <p
        style={{
          fontWeight: 600,
          fontSize: 14,
          color: "#5b5b5b",
          marginTop: 8,
        }}
      >
        Сфотографируете вашу карту с двух сторон:
      </p>

      <div style={{ marginTop: 25 }}>
        <img
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: 15,
          }}
          alt="pere"
          src={Pere}
        />
      </div>

      <Grid container style={{ marginTop: 50 }}>
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
              src={Card}
            />
          </div>
          <p style={{ fontWeight: 600, fontSize: 14, color: "#5b5b5b" }}>
            Задняя часть
          </p>
        </Grid>
      </Grid>

      <div
        style={{
          display: "flex",
          marginTop: 56,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          className="btn-circle"
          style={{
            width: 76,
            height: 76,
            boxShadow: "none",
            backgroundColor: "white",
          }}
        >
          <Light />
        </button>
        <button className="btn-circle" style={{ width: 76, height: 76 }}>
          <Camera color="white" />
        </button>
        <button
          className="btn-circle"
          style={{
            width: 76,
            height: 76,
            boxShadow: "none",
            backgroundColor: "white",
          }}
        >
          <Gallery />
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

export default AddPhoto;
