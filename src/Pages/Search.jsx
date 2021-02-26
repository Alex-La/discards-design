import React, { useState } from "react";

import BottomNav from "../Components/BottomNav";
import { Grid, InputAdornment } from "@material-ui/core";
import { SearchTextField } from "../MUI/CssComponents";
import { Search, Card } from "../Icons";

import BottomModal from "../Components/Main/BottomModal";

const SearchComp = () => {
  const [drawerState, setDrawerState] = useState(false);
  const toggleDrawer = (state) => setDrawerState(state);

  return (
    <>
      <div style={{ padding: 20, marginBottom: 70 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <SearchTextField
            style={{ marginRight: 13 }}
            value="Продукты"
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
          <p style={{ fontWeight: 600, fontSize: 13, color: "#FF5151" }}>
            Отменить
          </p>
        </div>

        <p
          style={{
            fontWeight: 700,
            fontSize: 24,
            color: "#343434",
            marginTop: 15,
          }}
        >
          Личные карты по запросу “Продукты”:
        </p>

        <Grid
          container
          spacing={2}
          style={{
            marginTop: 20,
            color: "white",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          <Grid item xs={6} style={{ position: "relative" }}>
            <p style={{ position: "absolute", top: 15, left: 20 }}>Магнит</p>
            <Card />
            <p
              style={{
                position: "absolute",
                bottom: 20,
                right: 20,
                fontSize: 8,
                fontWeight: 500,
              }}
            >
              6511 1065 9684 1431
            </p>
          </Grid>
          <Grid item xs={6} style={{ position: "relative" }}>
            <p style={{ position: "absolute", top: 15, left: 20 }}>Магнит</p>
            <Card />
            <p
              style={{
                position: "absolute",
                bottom: 20,
                right: 20,
                fontSize: 8,
                fontWeight: 500,
              }}
            >
              6511 1065 9684 1431
            </p>
          </Grid>
          <Grid item xs={6} style={{ position: "relative" }}>
            <p style={{ position: "absolute", top: 15, left: 20 }}>Магнит</p>
            <Card />
            <p
              style={{
                position: "absolute",
                bottom: 20,
                right: 20,
                fontSize: 8,
                fontWeight: 500,
              }}
            >
              6511 1065 9684 1431
            </p>
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              position: "relative",
            }}
          >
            <p style={{ position: "absolute", top: 15, left: 20 }}>Магнит</p>
            <Card />
            <p
              style={{
                position: "absolute",
                bottom: 20,
                right: 20,
                fontSize: 8,
                fontWeight: 500,
              }}
            >
              6511 1065 9684 1431
            </p>
          </Grid>
        </Grid>

        <p
          style={{
            fontWeight: 700,
            fontSize: 24,
            color: "#343434",
            marginTop: 20,
          }}
        >
          Карточки в публичном каталоге по запросу “Продукты”:
        </p>

        <Grid
          container
          spacing={2}
          style={{
            marginTop: 20,
            color: "white",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          <Grid item xs={6} style={{ position: "relative" }}>
            <p style={{ position: "absolute", top: 15, left: 20 }}>Магнит</p>
            <Card />
            <p
              style={{
                position: "absolute",
                bottom: 20,
                right: 20,
                fontSize: 8,
                fontWeight: 500,
              }}
            >
              6511 1065 9684 1431
            </p>
          </Grid>
          <Grid item xs={6} style={{ position: "relative" }}>
            <p style={{ position: "absolute", top: 15, left: 20 }}>Магнит</p>
            <Card />
            <p
              style={{
                position: "absolute",
                bottom: 20,
                right: 20,
                fontSize: 8,
                fontWeight: 500,
              }}
            >
              6511 1065 9684 1431
            </p>
          </Grid>
        </Grid>

        <button style={{ marginTop: 30 }} className="btn btn-shadow">
          перейти в магазин карт
        </button>
      </div>

      <BottomModal drawerState={drawerState} toggleDrawer={toggleDrawer} />
      <BottomNav />
    </>
  );
};

export default SearchComp;
