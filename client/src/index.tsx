import React, { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import { Provider } from "react-redux";

import store from "./store";
import App from "./App";

import "./index.css";

const rootElement = document.getElementById("root") as Element;
const root = createRoot(rootElement) as Root;

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
