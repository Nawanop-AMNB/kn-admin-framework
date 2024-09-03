import { GlobalStyles } from "@mui/material";

export const globalStyles = (
  <GlobalStyles
    styles={(theme) => ({
      "*": {
        border: 0,
        borderStyle: "solid",
        borderColor: theme.palette.grey[200],
        ...theme.applyStyles("dark", { borderColor: theme.palette.grey[700] }),
      },
      body: {
        transition: "all 300ms linear",
        transitionProperty: "background-color, color, fill",
        backgroundColor: theme.palette.grey[200],
        ...theme.applyStyles("dark", {
          backgroundColor: theme.palette.background.default,
        }),
      },
    })}
  />
);
