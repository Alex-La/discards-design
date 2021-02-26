import React, { useState } from "react";

import BottomNav from "../Components/BottomNav";
import { InputAdornment } from "@material-ui/core";
import { SearchTextField } from "../MUI/CssComponents";
import { Search, Notify, Plus, Add } from "../Icons";

import BottomModal from "../Components/Main/BottomModal";

const Main = () => {
  const [drawerState, setDrawerState] = useState(false);
  const toggleDrawer = (state) => setDrawerState(state);

  return (
    <>
      <div style={{ padding: 20, marginBottom: 70 }}>
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
            onClick={() => toggleDrawer(true)}
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
          <button
            className="btn-circle"
            onClick={() => toggleDrawer(true)}
            style={{
              width: 45,
              height: 45,
              backgroundColor: "#FF5151",
              marginRight: 10,
            }}
          >
            <Add />
          </button>
          <p
            onClick={() => toggleDrawer(true)}
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

        <BottomModal drawerState={drawerState} toggleDrawer={toggleDrawer} />
      </div>
      <BottomNav />
    </>
  );
};

export default Main;
