import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./app";
import { AdminThemeProvider } from "./libs/admin-theme-provider";

import '@fontsource/ibm-plex-sans-thai/400.css'
import '@fontsource/ibm-plex-sans-thai/500.css'
import '@fontsource/ibm-plex-sans-thai/600.css'
import '@fontsource/ibm-plex-sans-thai/700.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AdminThemeProvider>
      <App />
    </AdminThemeProvider>
  </React.StrictMode>
);
