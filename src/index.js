import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styling/index.sass";
import styled from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
