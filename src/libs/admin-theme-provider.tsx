import { ThemeProvider } from "@mui/material";
import { ThemeProviderProps } from "@mui/material/styles/ThemeProvider";
import merge from "lodash.merge";
import { useMemo } from "react";
import theme from "../theme";

import "@fontsource/ibm-plex-sans-thai/400.css";
import "@fontsource/ibm-plex-sans-thai/500.css";
import "@fontsource/ibm-plex-sans-thai/600.css";
import "@fontsource/ibm-plex-sans-thai/700.css";

export const AdminThemeProvider = (props: Partial<ThemeProviderProps>) => {
  const mergedTheme = useMemo(() => {
    if (typeof props.theme === "undefined") {
      return theme;
    }
    if (typeof props.theme === "object") {
      return merge(props.theme, theme);
    }

    throw new Error(
      `AdminThemeProvider 'theme' property supports only object type`
    );
  }, [props.theme]);
  return (
    <ThemeProvider {...props} theme={mergedTheme}>
      {props.children}
    </ThemeProvider>
  );
};
