import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "IBM Plex Sans Thai",
  },
  colorSchemes: {
    light: true,
    dark: true,
  },
  cssVariables: {
    colorSchemeSelector: "class",
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderColor: grey[200],
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "16px 16px",
        },
      },
    },
  },
});

export default theme;
