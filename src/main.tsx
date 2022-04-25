import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter, Router } from "react-router-dom";
import App from "./App";
import "./global.css";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
