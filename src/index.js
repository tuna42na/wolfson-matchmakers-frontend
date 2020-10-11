import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import "@babel/polyfill";
import App from "./App";
import "./styles.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
