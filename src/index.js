import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/system";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
        <SnackbarProvider
          maxSnack={1}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          preventDuplicate
        >
          <ThemeProvider theme={theme}>
     
          <App />
          </ThemeProvider>
        </SnackbarProvider>
  </React.StrictMode>,
   document.getElementById('root')
);