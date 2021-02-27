import React, { useState } from "react";

import BottomNav from "../Components/BottomNav";
import { BackArrow, Barcode, Star } from "../Icons";
import Sport from "../assets/sport 1.png";
import { useHistory } from "react-router-dom";
import { Switch } from "@material-ui/core";

const SingleCard = () => {
  const history = useHistory();
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => setChecked(event.target.checked);

  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #215BA5",
        height: "95vh",
      }}
    >
      <div style={{ padding: 20 }} onClick={() => history.goBack()}>
        <BackArrow color="white" />
      </div>

      <div
        style={{
          marginTop: 80,
          height: "100%",
          backgroundColor: "white",
          borderRadius: "15px 15px 0 0",
          position: "relative",
        }}
      >
        <div
          style={{
            margin: "0 20px",
            position: "absolute",
            backgroundColor: "#215BA5",
            left: 0,
            right: 0,
            top: -80,
            height: 180,
            borderRadius: 15,
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.12)",
            padding: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={Sport} alt="sport" width={38} height={38} />
            <p style={{ fontWeight: 700, fontSize: 25, color: "white" }}>
              Спортмастер
            </p>
          </div>
          <p style={{ fontWeight: 600, fontSize: 16, color: "white" }}>
            6511 1065 9684 1431
          </p>
        </div>

        <div
          style={{
            padding: 20,
            paddingTop: 160,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <Barcode />
            <p style={{ fontWeight: 600, fontSize: 16 }}>261 124 878 711 0</p>
          </div>

          <p style={{ marginTop: 25, fontWeight: 700, fontSize: 21 }}>
            Спортмастер
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p style={{ fontWeight: 700, fontSize: 16 }}>4.5</p>
            <p style={{ fontWeight: 500, fontSize: 12 }}>
              (254 отзывов о магазине)
            </p>
          </div>
          <p
            style={{
              marginTop: 13,
              fontWeight: 500,
              fontSize: 14,
              color: "#454e64",
            }}
          >
            Накапливайте баллы за покупки в данном магазине
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <div>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#343434",
                  lineHeight: "22px",
                }}
              >
                Скидка по карте
              </p>
              <p
                style={{
                  fontWeight: 500,
                  fontSize: 12,
                  color: "#454E64",
                  lineHeight: "22px",
                }}
              >
                5%
              </p>
            </div>
            <div style={{ textAlign: "end" }}>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#343434",
                  lineHeight: "22px",
                }}
              >
                Добавлена
              </p>
              <p
                style={{
                  fontWeight: 500,
                  fontSize: 12,
                  color: "#454E64",
                  lineHeight: "22px",
                }}
              >
                9 Июля 2020
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex" }}>
              <p
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  color: "#454e64",
                  marginRight: 7,
                }}
              >
                Сделать публичной
              </p>
              <button
                className="btn-circle"
                style={{
                  width: 20,
                  height: 20,
                  fontWeight: 700,
                  fontSize: 10,
                  color: "#454E64",
                  backgroundColor: "#EEEEEE",
                }}
              >
                ?
              </button>
            </div>
            <Switch checked={checked} onChange={handleChange} />
          </div>

          <button
            style={{
              marginTop: 14,
              color: checked ? "#215BA5" : "#898989",
              borderColor: checked ? "#215BA5" : "#898989",
            }}
            className="btn btn-outlined"
          >
            Поделиться
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default SingleCard;
