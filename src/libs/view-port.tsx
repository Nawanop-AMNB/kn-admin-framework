import { Box, styled } from "@mui/material";

export const Viewport = styled(Box)`
  ${({ theme }) => ({
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.background.default,
    }),
  })}
  height: 100vh;
`;
