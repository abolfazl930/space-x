import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Theme } from "./providers/theme";
import { ThemeProvider } from "theming";

import App from "./App";
import ModalContextProvider from "./context/providers/modal-provider";

import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ModalContextProvider>
      <ThemeProvider theme={Theme()}>
        <App />
      </ThemeProvider>
    </ModalContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
