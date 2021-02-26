import React from "react";
import "../css/catalog.css";

import BottomNav from "../Components/BottomNav";
import { InputAdornment } from "@material-ui/core";
import { SearchTextField } from "../MUI/CssComponents";
import { Search, ArrowRigth } from "../Icons";

import Item from "../Components/Catalog/Item";

import Sport from "../assets/sport.png";

const Catalog = () => {
  return (
    <div style={{ marginBottom: 70 }}>
      <div style={{ padding: 20, paddingBottom: 0 }}>
        <p
          style={{
            marginBottom: 6,
            fontWeight: 700,
            fontSize: 30,
            lineHeight: "36.57px",
            color: "#343434",
          }}
        >
          Каталог
        </p>

        <SearchTextField
          variant="outlined"
          size="small"
          fullWidth
          placeholder="Поиск"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />

        <p
          style={{
            marginTop: 12,
            fontWeight: 600,
            fontSize: 22,
            lineHeight: "26.82px",
            color: "#000000",
          }}
        >
          Магазины
        </p>
      </div>

      <div
        className="scroll-wrap"
        style={{
          display: "flex",
          padding: 20,
          flexWrap: "nowrap",
          overflowX: "auto",
        }}
      >
        {new Array(7).fill().map(() => (
          <Item icon={Sport} />
        ))}
      </div>

      <div style={{ padding: "0 20px" }}>
        <p
          style={{
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14.63px",
            color: "black",
          }}
        >
          Смотреть все
        </p>

        <p
          style={{
            fontWeight: 600,
            fontSize: 22,
            lineHeight: "26.82px",
            marginTop: 16,
          }}
        >
          Популярно сегодня
        </p>
      </div>

      <div
        className="scroll-wrap"
        style={{
          display: "flex",
          padding: 20,
          flexWrap: "nowrap",
          overflowX: "auto",
        }}
      >
        {new Array(7).fill().map(() => (
          <Item icon={Sport} text="Спортмастер" />
        ))}
      </div>

      <div style={{ padding: "0 20px" }}>
        <p
          style={{
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14.63px",
            color: "#5b5b5b",
          }}
        >
          Смотреть подборку
          <span style={{ float: "right" }}>
            <ArrowRigth />
          </span>
        </p>

        <p
          style={{
            fontWeight: 600,
            fontSize: 22,
            lineHeight: "26.82px",
            color: "black",
            marginTop: 16,
            display: "flex",
            alignItems: "center",
          }}
        >
          Новинки
          <span
            style={{
              marginLeft: 6,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.12)",
              borderRadius: 5,
              fontSize: 10,
              lineHeight: "12.19px",
              padding: 7,
            }}
          >
            42
          </span>
        </p>
      </div>

      <div
        className="scroll-wrap"
        style={{
          display: "flex",
          padding: 20,
          flexWrap: "nowrap",
          overflowX: "auto",
        }}
      >
        {new Array(7).fill().map(() => (
          <Item icon={Sport} text="Спортмастер" />
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default Catalog;
