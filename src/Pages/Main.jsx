import React from "react";

import BottomNav from "../Components/BottomNav";
import { InputAdornment, Fab } from "@material-ui/core";
import { SearchTextField } from "../MUI/CssComponents";
import { Search, Notify, Plus, Add } from "../Icons";

const Main = () => {
  return (
    <>
      <div style={{ padding: 20, marginBottom: 56 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <SearchTextField
            style={{ marginRight: 13 }}
            variant="outlined"
            size="small"
            placeholder="Поиск"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <Notify count={1} />
        </div>

        <p
          style={{
            marginTop: 16,
            fontWeight: 700,
            fontSize: 24,
            lineHeight: "29.26px",
          }}
        >
          Для начала, добавьте вашу первую карту:
        </p>

        <div style={{ marginTop: 32, padding: "0 22px" }}>
          <div
            style={{
              width: "100%",
              height: "55vh",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.12)",
              borderRadius: 15,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Plus />
          </div>
        </div>

        <div
          style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Fab
            size="small"
            aria-label="add"
            style={{
              backgroundColor: "#FF5151",
              marginRight: 10,
            }}
          >
            <Add />
          </Fab>
          <p
            style={{
              fontWeight: 600,
              fontSize: 15,
              lineHeight: "18.29px",
              color: "#FF5151",
            }}
          >
            Добавить
          </p>
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Main;
