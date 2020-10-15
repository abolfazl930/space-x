import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Theme } from "./providers/theme";
import { ThemeProvider } from "styled-components";

import App from "./App";
import ModalContextProvider from "./context/providers/modal-provider";

import "bootstrap/dist/css/bootstrap-grid.min.css";
// import "./index.css";
import GlobalStyle from "./providers/global-styles";

ReactDOM.render(
  <React.StrictMode>
    <ModalContextProvider>
      <ThemeProvider theme={Theme()}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </ModalContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
