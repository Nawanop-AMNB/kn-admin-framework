import {
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { ReactNode } from "react";
import { SideBarItemBaseSchema } from "./side-bar-item-base";

export type SideBarItemSchema = {
  type: "item";
} & SideBarItemBaseSchema;

export type SideBarItemProps = Omit<SideBarItemSchema, "type"> & {
  selected?: boolean;
  extra?: ReactNode;
};

export const SideBarItem = (props: SideBarItemProps) => {
  return (
    <ListItemButton
      selected={props.selected}
      sx={{ borderRadius: 2 }}
      onClick={props.onClick}
    >
      {props.icon && <ListItemIcon>{props.icon}</ListItemIcon>}
      <ListItemText
        primaryTypographyProps={{
          fontWeight: 500,
        }}
      >
        {props.label}
      </ListItemText>
      {props.extra}
    </ListItemButton>
  );
};
