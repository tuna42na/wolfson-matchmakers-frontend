import React from "react";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import "@babel/polyfill";
import App from "./App";
import "./styles.css";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider>
      <CSSReset />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("app")
);
