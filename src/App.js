import React from "react";
import "./App.css";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

import Routes from "./Routes/Routes";

const THEME = createMuiTheme({
  typography: {
    fontFamily: '"Montserrat", "sans-serif"',
  },
});

function App() {
  return (
    <MuiThemeProvider theme={THEME}>
      <Routes />
    </MuiThemeProvider>
  );
}

export default App;
