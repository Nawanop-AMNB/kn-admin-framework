import { CssBaseline } from "@mui/material";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { AdminThemeProvider } from "./libs/admin-theme-provider";
import { App } from "./app";
import { globalStyles } from "./libs/global-style";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AdminThemeProvider>
      <CssBaseline />
      {globalStyles}
      <App />
    </AdminThemeProvider>
  </React.StrictMode>
);
