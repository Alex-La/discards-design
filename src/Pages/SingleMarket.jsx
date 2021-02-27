import React from "react";

import { BackArrow, ArrowRigth, Dollar } from "../Icons";
import Sport from "../assets/sport 1.png";

const SingleMarket = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #215BA5",
        display: "block",
        position: "absolute",
        height: "auto",
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <div style={{ padding: 20 }}>
        <BackArrow color="white" />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: 700,
            fontSize: 30,
            color: "white",
            marginTop: 15,
          }}
        >
          <img src={Sport} alt="sport" />
          Спортмастер
        </div>

        <p
          style={{
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "23px",
            color: "white",
          }}
        >
          В магазине работает скидочная система из 3 видов карт - синей,
          серебряной и золотой. Синяя дает постоянную скидку в 5%, серебряная -
          10%, золотая - 15%. Так же у каждой карты свои индивидуальные бонусы
        </p>
      </div>

      <div
        style={{
          marginTop: 10,
          backgroundColor: "white",
          borderRadius: "25px 25px 0px 0px",
          padding: 20,
        }}
      >
        <div
          style={{
            marginTop: 10,
            height: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            fontWeight: 700,
            fontSize: 25,
            color: "white",
            backgroundColor: "#215BA5",
            borderRadius: 15,
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.12)",
            padding: 15,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={Sport} alt="sport" />
            Спортмастер
          </div>
          <p style={{ fontWeight: 500, fontSize: 15, marginBottom: 15 }}>
            6511 1065 9684 1431
          </p>
        </div>
        <p style={{ fontWeight: 600, fontSize: 22, marginTop: 10 }}>
          Синяя карта, скидка до 5%
        </p>
        <p style={{ fontWeight: 500, fontSize: 12, color: "#5b5b5b" }}>
          Читать все преимущества
          <span style={{ float: "right" }}>
            <ArrowRigth />
          </span>
        </p>
        <button
          style={{
            marginTop: 20,
            marginBottom: 30,
            backgroundColor: "#215BA5",
          }}
          className="btn btn-shadow"
        >
          добавить бесплатно
        </button>

        <div
          style={{
            marginTop: 10,
            height: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            fontWeight: 700,
            fontSize: 25,
            color: "white",
            backgroundColor: "#B0B0B0",
            borderRadius: 15,
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.12)",
            padding: 15,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={Sport} alt="sport" />
            Спортмастер
          </div>
          <p style={{ fontWeight: 500, fontSize: 15, marginBottom: 15 }}>
            6511 1065 9684 1431
          </p>
        </div>
        <p style={{ fontWeight: 600, fontSize: 22, marginTop: 10 }}>
          Серебряная карта, скидка до 10%
        </p>
        <p style={{ fontWeight: 500, fontSize: 12, color: "#5b5b5b" }}>
          Читать все преимущества
          <span style={{ float: "right" }}>
            <ArrowRigth />
          </span>
        </p>
        <button
          style={{
            marginTop: 20,
            marginBottom: 30,
            backgroundColor: "#215BA5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="btn btn-shadow"
        >
          <p style={{ marginRight: 5 }}>Купить за 250</p>{" "}
          <Dollar width="15" height="15" />
        </button>

        <div
          style={{
            marginTop: 10,
            height: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            fontWeight: 700,
            fontSize: 25,
            color: "white",
            backgroundColor: "#FFDB1D",
            borderRadius: 15,
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.12)",
            padding: 15,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={Sport} alt="sport" />
            Спортмастер
          </div>
          <p style={{ fontWeight: 500, fontSize: 15, marginBottom: 15 }}>
            6511 1065 9684 1431
          </p>
        </div>
        <p style={{ fontWeight: 600, fontSize: 22, marginTop: 10 }}>
          Синяя карта, скидка до 5%
        </p>
        <p style={{ fontWeight: 500, fontSize: 12, color: "#5b5b5b" }}>
          Читать все преимущества
          <span style={{ float: "right" }}>
            <ArrowRigth />
          </span>
        </p>
        <button
          style={{
            marginTop: 20,
            marginBottom: 30,
            backgroundColor: "#215BA5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="btn btn-shadow"
        >
          <p style={{ marginRight: 5 }}>Купить за 650</p>{" "}
          <Dollar width="15" height="15" />
        </button>
      </div>
    </div>
  );
};

export default SingleMarket;
