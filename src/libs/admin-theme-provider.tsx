import { ThemeProvider } from "@mui/material/styles";
import { ThemeProviderProps } from "@mui/material/styles/ThemeProvider";
import merge from "lodash.merge";
import { useMemo } from "react";
import theme from "../theme";

import { CssBaseline } from "@mui/material";
import { globalStyles } from "./global-style";
import { Viewport } from "./view-port";

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
      <CssBaseline enableColorScheme />
      {globalStyles}
      <Viewport>{props.children}</Viewport>
    </ThemeProvider>
  );
};
