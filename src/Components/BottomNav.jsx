import React from "react";

import {
  BottomNavigation,
  BottomNavigationAction,
  AppBar,
  makeStyles,
} from "@material-ui/core";

import { Catalog, My, Profile } from "../Icons";

const useStyles = makeStyles({
  root: {
    padding: "0 40px",
    height: "70px",
  },
  label: {
    "& .Mui-selected": {
      color: "#4D4D4D",
    },
  },
});

const BottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);
  return (
    <AppBar
      component="div"
      position="fixed"
      style={{ top: "auto", bottom: 0, boxShadow: "none" }}
    >
      <BottomNavigation
        className={classes.root}
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          disableTouchRipple
          className={classes.label}
          label="Каталог"
          icon={<Catalog active={value === 0} />}
        />
        <BottomNavigationAction
          disableTouchRipple
          className={classes.label}
          label="Мои"
          icon={<My active={value === 1} />}
        />
        <BottomNavigationAction
          disableTouchRipple
          className={classes.label}
          label="Профиль"
          icon={<Profile active={value === 2} />}
        />
      </BottomNavigation>
    </AppBar>
  );
};

export default BottomNav;
