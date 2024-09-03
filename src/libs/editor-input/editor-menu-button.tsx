import { ExpandMore } from "@mui/icons-material";
import {
  IconButtonProps,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Editor } from "@tiptap/react";
import { MouseEvent, MouseEventHandler, ReactNode, useMemo } from "react";
import { useMenu } from "../use-menu";
import { EditorToggleButton } from "./editor-toggle-button";

export type EditorMenuItem<T> = {
  icon?: ReactNode;
  value: T;
  label?: string;
  menuItemLabel?: ReactNode;
};

export type EditorMenuButtonProps<T> = {
  items: EditorMenuItem<T>[];
  editor: Editor;
  getSelected: (options: EditorMenuItem<T>[], editor: Editor) => T | undefined;
  onSelected: (value: T, editor: Editor) => void;
  slotsProps?: {
    iconButton?: IconButtonProps;
  };
};

export const EditorMenuButton = <T,>(props: EditorMenuButtonProps<T>) => {
  const [opened, anchor, onMenuClick, onMenuClose] = useMenu();

  if (!props.editor) {
    return null;
  }

  const currentValue = props.getSelected(props.items, props.editor);
  const currentActiveItem = useMemo(
    () =>
      props.items.find((item) => item.value === currentValue) || props.items[0],
    [currentValue]
  );

  function handleSelect(value: T) {
    return function () {
      props.onSelected(value, props.editor);
      onMenuClose();
    };
  }

  function handleOnClick(
    callbacks: (MouseEventHandler<HTMLButtonElement> | undefined)[]
  ) {
    return function (e: MouseEvent<HTMLButtonElement>) {
      callbacks.forEach((callback) => callback?.(e));
    };
  }

  return (
    <>
      <EditorToggleButton
        {...props.slotsProps?.iconButton}
        sx={{
          borderRadius: 2,
          columnGap: "8px",
          ...props.slotsProps?.iconButton?.sx,
        }}
        editor={props.editor}
        onClick={handleOnClick([
          onMenuClick,
          props.slotsProps?.iconButton?.onClick,
        ])}
      >
        {currentActiveItem?.icon ?? (
          <Typography>{currentActiveItem.label}</Typography>
        )}
        <ExpandMore sx={{ marginTop: "-4px" }} />
      </EditorToggleButton>
      <Menu open={opened} anchorEl={anchor} onClose={onMenuClose}>
        {props.items.map((item) => (
          <MenuItem
            key={`${item.label}-${item.menuItemLabel}-${item.value}`}
            onClick={handleSelect(item.value)}
          >
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            {item.menuItemLabel ? (
              <ListItemText>{item.menuItemLabel}</ListItemText>
            ) : item.label ? (
              <ListItemText>{item.label}</ListItemText>
            ) : null}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
