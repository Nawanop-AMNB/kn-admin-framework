import { Box, darken, styled } from "@mui/material";

export const Viewport = styled(Box)`
  ${({ theme }) => ({
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: darken(theme.palette.grey[900], 0.3),
    }),
  })}
  height: 100vh;
`;
