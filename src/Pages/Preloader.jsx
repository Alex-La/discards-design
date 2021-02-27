import React from "react";

import Logo from "../assets/logo.svg";

const Preloader = () => {
  return (
    <div className="center-wrapper">
      <div className="wrap">
        <img src={Logo} alt="logo" width={150} />
        <p style={{ fontWeight: 700, fontSize: 43, lineHeight: "52.42px" }}>
          DISCARDS
        </p>
        <p style={{ fontWeight: 600, fontSize: 14, lineHeight: "23.8px" }}>
          Любые карты в одном месте
        </p>
      </div>
    </div>
  );
};

export default Preloader;
