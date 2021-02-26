import React from "react";

import BottomNav from "../Components/BottomNav";
import { BackArrow } from "../Icons";

const Contacts = () => {
  return (
    <div style={{ padding: 20, marginBottom: 70 }}>
      <BackArrow />

      <p
        style={{
          fontWeight: 700,
          fontSize: 30,
          lineHeight: "36.57px",
          marginTop: 15,
          color: "#343434",
        }}
      >
        Контакты
      </p>

      <p
        style={{
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "23.8px",
          color: "#5b5b5b",
          marginTop: 4,
        }}
      >
        ООО “ДИСКАРДС”, 2020
      </p>
      <p
        style={{
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "23.8px",
          color: "#5b5b5b",
          marginTop: 4,
        }}
      >
        Россия, Санкт-Петербург, ул. Грушевского д.25 оф. 134
      </p>
      <p
        style={{
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "23.8px",
          color: "#5b5b5b",
          marginTop: 4,
        }}
      >
        partners@discards.com
      </p>

      <BottomNav />
    </div>
  );
};

export default Contacts;
