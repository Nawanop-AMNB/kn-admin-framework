import { NightsStay, WbSunnyOutlined } from "@mui/icons-material";
import { Box, IconButton, Stack, styled, useColorScheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const TopBarContainer = styled(Stack)`
  top: 0;
  z-index: 99;
  position: sticky;
  padding-left: 24px;
  padding-right: 24px;
  background-color: white;
  border-bottom-width: 1px;
  ${({ theme }) =>
    theme.applyStyles("dark", {
      backgroundColor: grey[900],
    })};
`;

export type TopBarProps = {};

export const TopBar = (_: TopBarProps) => {
  const { colorScheme, setColorScheme } = useColorScheme();

  const handleChangeScheme = () => {
    if (colorScheme === "dark") {
      setColorScheme("light");
    }
    if (colorScheme === "light") {
      console.log("pass!");
      setColorScheme("dark");
    }
  };
  return (
    <TopBarContainer
      direction="row"
      minHeight={70}
      width="100%"
      justifyContent="end"
      alignItems="center"
    >
      <Box width={48} height={48}>
        <IconButton
          onClick={handleChangeScheme}
          sx={(theme) => ({
            backgroundColor: theme.palette.grey[100],
            "&:hover": {
              backgroundColor: theme.palette.grey[200],
            },
            ...theme.applyStyles("dark", {
              backgroundColor: theme.palette.grey[800],
              "&:hover": {
                backgroundColor: theme.palette.grey[700],
              },
            }),
          })}
        >
          {colorScheme === "dark" ? <NightsStay /> : <WbSunnyOutlined />}
        </IconButton>
      </Box>
    </TopBarContainer>
  );
};
