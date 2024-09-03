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
      div: {
        transition: "all 300ms linear",
        transitionProperty: "background-color, fill",
      },
    })}
  />
);
