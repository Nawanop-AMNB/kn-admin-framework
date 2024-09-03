import { Box, List, Stack, styled } from "@mui/material";
import { useState } from "react";
import { SideBarItem, SideBarItemSchema } from "./side-bar-item";
import {
  SideBarItemGroup,
  SideBarItemGroupSchema,
} from "./side-bar-item-group";
import { grey } from "@mui/material/colors";

const SideBarContainer = styled(Box)`
  position: fixed;
  background-color: white;
  ${({ theme }) =>
    theme.applyStyles("dark", {
      backgroundColor: grey[900],
    })};
`;

const SideBarHeaderContainer = styled(Stack)`
  border-right-width: 1px;
  border-bottom-width: 1px;
`;

const SideBarContentContainer = styled(List)`
  height: calc(100vh - 70px);
  min-width: 275;
  padding: 1;
  border-right-width: 1px;
`;

export type SideBarProps = {
  selectedKeys: string[];
  items: (SideBarItemSchema | SideBarItemGroupSchema)[];
  onItemSelected: (keys: string[]) => void;
};

export type UseSideBarParams = {
  defaultKeys?: string[];
};

export const useSideBar = (props: UseSideBarParams) => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>(
    props.defaultKeys ?? []
  );

  return {
    selectedKeys,
    onItemSelected: setSelectedKeys,
  };
};

export const SideBar = (props: SideBarProps) => {
  const handleItemSelected = (key: string, onClick?: () => void) => () => {
    props.onItemSelected([key]);
    onClick?.();
  };

  const isItemSelected = (key: string) => {
    return props.selectedKeys[0] === key;
  };

  return (
    <SideBarContainer>
      <SideBarHeaderContainer
        direction="row"
        justifyContent="center"
        alignItems="center"
        minHeight={70}
      >
        Logo
      </SideBarHeaderContainer>
      <SideBarContentContainer
        sx={{
          height: "calc(100vh - 70px)",
          minWidth: 275,
          padding: 1,
        }}
      >
        {props.items.map((item) => {
          if (item.type === "group") {
            return (
              <SideBarItemGroup
                key={`${item.id}-group`}
                {...item}
                selected={isItemSelected(item.id)}
                selectedKeys={props.selectedKeys}
                onItemSelected={props.onItemSelected}
                onClick={handleItemSelected(item.id, item.onClick)}
              />
            );
          } else {
            return (
              <SideBarItem
                key={`${item.id}-item`}
                {...item}
                selected={isItemSelected(item.id)}
                onClick={handleItemSelected(item.id, item.onClick)}
              />
            );
          }
        })}
      </SideBarContentContainer>
    </SideBarContainer>
  );
};
