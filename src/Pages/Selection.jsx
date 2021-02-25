import React from "react";

import { Grid } from "@material-ui/core";
import { BackArrow, Dot } from "../Icons";
import BottomNav from "../Components/BottomNav";
import Sport from "../assets/sport.png";

const Selection = () => {
  return (
    <div style={{ marginBottom: 56 }}>
      <div style={{ padding: 20 }}>
        <BackArrow />
        <p
          style={{
            fontWeight: 700,
            fontSize: 30,
            lineHeight: "36.57px",
            marginTop: 15,
          }}
        >
          Популярное сегодня
        </p>

        <Grid spacing={2} container justify="center" style={{ marginTop: 20 }}>
          {new Array(9).fill().map(() => (
            <Grid item>
              <div
                style={{
                  width: 100,
                  height: 140,
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.12)",
                  borderRadius: 15,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img style={{ paddingTop: 10 }} src={Sport} alt="item" />
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
                  Спортмастер
                </p>
                <Dot />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <BottomNav />
    </div>
  );
};

export default Selection;
