import "./index.css";
import "./style.scss";

import { ThemeProvider } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as StateProvider } from "react-redux";

import App from "./App";
import store from "./configureStore";
import AuthProvider from "./contexts/AuthContext";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme";

// eslint-disable-next-line import/no-named-as-default-member
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <StateProvider store={store}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </StateProvider>
  </React.StrictMode>
);

// Note: React 18 will call useEffect twice for future upgradation for details
// check link https://reactjs.org/docs/strict-mode.html#ensuring-reusable-state
// it will only occur in development and to bypass that we can comment
// React.StrictMode tags if we don't find other way around.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
