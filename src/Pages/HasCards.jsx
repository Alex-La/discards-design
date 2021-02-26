import React, { useState } from "react";

import BottomNav from "../Components/BottomNav";
import { InputAdornment } from "@material-ui/core";
import { SearchTextField } from "../MUI/CssComponents";
import { Search, Notify, Add, Magnit } from "../Icons";

import BottomModal from "../Components/Main/BottomModal";

import Slider from "react-slick";

const HasCards = () => {
  const [drawerState, setDrawerState] = useState(false);
  const toggleDrawer = (state) => setDrawerState(state);

  return (
    <>
      <div style={{ padding: 20, paddingBottom: 0 }}>
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
      </div>

      <div
        className="scroll-wrap"
        style={{
          padding: 20,
          paddingTop: 13,
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "auto",
        }}
      >
        <div style={{ paddingRight: 12 }}>
          <div
            style={{
              flex: "0 0 auto",
              backgroundColor: "#FF5151",
              color: "white",
              width: 126,
              height: 32,
              borderRadius: 7,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.12)",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <i className="fas fa-utensils" aria-hidden="true"></i>
            <p style={{ fontSize: 13, fontWeight: 600 }}>Продукты</p>
          </div>
        </div>

        <div style={{ paddingRight: 12 }}>
          <div
            style={{
              flex: "0 0 auto",
              backgroundColor: "white",
              color: "#5B5B5B",
              width: 126,
              height: 32,
              borderRadius: 7,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.12)",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <i className="fas fa-volleyball-ball" aria-hidden="true"></i>
            <p style={{ fontSize: 13, fontWeight: 600 }}>Спорт</p>
          </div>
        </div>

        <div style={{ paddingRight: 12 }}>
          <div
            style={{
              flex: "0 0 auto",
              backgroundColor: "white",
              color: "#5B5B5B",
              width: 126,
              height: 32,
              borderRadius: 7,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.12)",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <i className="fas fa-car" aria-hidden="true"></i>
            <p style={{ fontSize: 13, fontWeight: 600 }}>Автотовары</p>
          </div>
        </div>
      </div>

      <Slider
        dots={false}
        arrows={false}
        centerMode
        infinite={false}
        centerPadding={40}
      >
        <div>
          <p
            style={{
              fontWeight: 700,
              fontSize: 24,
              marginBottom: 10,
              color: "#343434",
            }}
          >
            Магнит
          </p>

          <Magnit />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <p
            style={{
              fontWeight: 700,
              fontSize: 24,
              marginBottom: 10,
              color: "#343434",
            }}
          >
            Магнит
          </p>
          <Magnit width="90%" />
        </div>
      </Slider>

      <div style={{ paddingBottom: 20, marginBottom: 70 }}>
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
      </div>

      <BottomModal drawerState={drawerState} toggleDrawer={toggleDrawer} />
      <BottomNav />
    </>
  );
};

export default HasCards;
