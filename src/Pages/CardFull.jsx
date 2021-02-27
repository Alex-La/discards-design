import React from "react";

import { Close, Restart, BarcodeVertical } from "../Icons";
import Sport from "../assets/sport 1.png";
import { useHistory } from "react-router-dom";

const CardFull = () => {
  const history = useHistory();

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
        padding: 20,
      }}
    >
      <div
        onClick={() => history.goBack()}
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Close width="16" height="16" color="white" />

        <div
          style={{
            transform: "rotate(180deg)",
            backgroundColor: "#215BA5",
            flexBasis: "70%",
            borderRadius: 15,
            padding: 30,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            writingMode: "vertical-rl",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{ transform: "rotate(90deg)" }}
              src={Sport}
              alt="sport"
            />
            <p style={{ fontWeight: 700, fontSize: 25, color: "white" }}>
              Спортмастер
            </p>
          </div>
          <div
            style={{ backgroundColor: "white", padding: 20, borderRadius: 15 }}
          >
            <BarcodeVertical />
          </div>
        </div>

        <button
          className="btn-circle"
          style={{
            width: 50,
            height: 50,
            boxShadow: "none",
            background: "rgba(255, 255, 255, 0.15)",
            alignSelf: "center",
          }}
        >
          <Restart />
        </button>
      </div>
    </div>
  );
};

export default CardFull;
