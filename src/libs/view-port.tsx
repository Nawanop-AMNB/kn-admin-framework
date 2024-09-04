import { Box, styled } from "@mui/material";

export const Viewport = styled(Box)`
  background-color: white;
  ${({ theme }) => ({
    ...theme.applyStyles("light", {
      backgroundColor: theme.palette.grey[200],
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.background.default,
    }),
  })}
  height: 100vh;
`;
