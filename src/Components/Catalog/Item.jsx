import React from "react";

import { Dot } from "../../Icons";

const Item = ({ icon, text }) => {
  return (
    <div style={{ paddingRight: text ? 16 : 10 }}>
      <div
        style={{
          flex: "0 0 auto",
          width: text ? 100 : 70,
          height: text ? 140 : 70,
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.12)",
          borderRadius: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img style={{ paddingTop: text ? 10 : 0 }} src={icon} alt="item" />
        {text && (
          <>
            <p
              style={{
                marginTop: 17,
                marginBottom: 16,
                fontWeight: 700,
                fontSize: 11,
                lineHeight: "13.41px",
                color: "#0058AF",
              }}
            >
              {text}
            </p>
            <Dot />
          </>
        )}
      </div>
    </div>
  );
};

export default Item;
