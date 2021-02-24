import React from "react";

import {
  BottomNavigation,
  BottomNavigationAction,
  AppBar,
} from "@material-ui/core";

import { Catalog, My, Profile } from "../Icons";

const BottomNav = () => {
  const [value, setValue] = React.useState(1);
  return (
    <AppBar
      position="fixed"
      style={{ top: "auto", bottom: 0, boxShadow: "none" }}
    >
      <BottomNavigation
        style={{ padding: "0 20px" }}
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          label="Каталог"
          icon={<Catalog active={value === 0} />}
        />
        <BottomNavigationAction
          label="Мои"
          icon={<My active={value === 1} />}
        />
        <BottomNavigationAction
          label="Профиль"
          icon={<Profile active={value === 2} />}
        />
      </BottomNavigation>
    </AppBar>
  );
};

export default BottomNav;
